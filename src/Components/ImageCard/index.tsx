import * as React from 'react';
import 
{ 
  Card,
  Button,
  CardMedia,
  Typography,
  CardActions,
  CardContent,
} from '@mui/material';

interface ImageCardProps {
  id: number;
  image: string;
  title: string;
  onDetailView: (id: number) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({id, image, title, onDetailView}) => {
  const [readMore, setReadMore] = React.useState(false);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  }

  const showModal = () => {
    onDetailView(id);
  }

  const displayText = readMore ? title : `${title?.substring(0, 25)}...`;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 250 }}
        image={image}
        title={title}
        onClick={showModal}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {displayText}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={toggleReadMore}>
          {readMore ? 'Show less' : 'Read more'}
        </Button>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
}

export default ImageCard;