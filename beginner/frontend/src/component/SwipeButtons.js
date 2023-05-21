import React from 'react'
import './SwipeButtons.css'
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import Button from '@mui/material/Button';

const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
        <Button className="swipeButtons__repeat">
            <ReplayCircleFilledIcon fontSize="large" />
        </Button>
        <Button className="swipeButtons__left">
            <CloseIcon fontSize="large" />
        </Button>
        <Button className="swipeButtons__star">
            <StarRateIcon fontSize="large" />
        </Button>
        <Button className="swipeButtons__right">
            <FavoriteIcon fontSize="large" />
        </Button>
        <Button className="swipeButtons__lightning">
            <FlashOnIcon fontSize="large" />
        </Button>
        </div>
        )
       }
       export default SwipeButtons;