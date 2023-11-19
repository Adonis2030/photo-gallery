import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

interface KeepMountedModalProps {
    title: string;
    imageUrl: string;
    open: boolean;
    onClose: () => void;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 2,
};

const KeepMountedModal: React.FC<KeepMountedModalProps> = ({ title, imageUrl, open, onClose }) => {
    return (
        <Modal
            keepMounted
            open={open}
            onClose={onClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={style}>
                <img src={imageUrl} alt="Modal content" style={{width: '100%', height: 'auto'}} />
            </Box>
        </Modal>
    );
}

export default KeepMountedModal;