import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import ForumIcon from '@mui/icons-material/Forum';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
const Header=()=>{
    return(
        <div className='header'>
            <Button>
                <PersonIcon fontSize='large' className='header_icon' />
            </Button>
            <Button>
                <AlternateEmailIcon fontSize='large' className='header_logo' />
            </Button>
            <Button>
                <ForumIcon fontSize='large' className='header_icon' />
            </Button>
        </div>
    )
}

export default Header;