import React, { useState, useEffect, useRef } from 'react';
import ImageCard from '../../Components/ImageCard';
import { Container, Grid } from '@mui/material';
import { Skeleton } from '@mui/material';

interface Image {
  urls: {
    small: string;
  };
  alt_description: string;
}

const ImageGrid = ({ images }: { images: Image[] }) => (
  <React.Fragment>
    {images.map((image, i) => (
      <Grid item xs={3} md={3} sm={6} key={i}>
        <ImageCard image={image.urls.small} title={image.alt_description} />
      </Grid>
    ))}
  </React.Fragment>
);

const LoadingPlaceholder = () => (
  <React.Fragment>
    {[...Array(12)].map((_, i) => (
      <Grid item xs={3} md={3} sm={6} key={i}>
        <Skeleton variant="rectangular" width="100%" height={300} />
      </Grid>
    ))}
  </React.Fragment>
);

const ListPage = () => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  const loadMore = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos?page=${page}&client_id=H8scTiTOto2zn7MF5KGO3jrh4lHYMqIS1SN6RPvHNBA&per_page=24`
      );
      const data = await response.json();
      setTimeout(() => {
        if (page > 1) setImages(prevImages => [...prevImages, ...data]);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error: ', error);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }

  const handleObserver = (entities: any) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0
    };

    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current)
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, []);

  useEffect(() => {
    loadMore();
  }, [page]);

  return (
    <Container>
      <Grid container spacing={3} mt={3} mb={5}>
        <ImageGrid images={images} />
        {loading && <LoadingPlaceholder />}
        <div ref={loader} />
      </Grid>
    </Container>
  );
};

export default ListPage;