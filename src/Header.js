import React from 'react'
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import { Subscriptions } from '@material-ui/icons/SubscriptionsOutlined';
import  StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { SubscriptionsOutlined } from '@material-ui/icons';
import { Avatar,IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import logo from './images/fb-logo.png'

function Header() {
    return (
        <div className='header' >
            <div className='header__left' >
                <img src = {logo} />
                <div className='header__input' >
                    <SearchIcon />
                    <input type='text' placeholder='Search facebook' />
                </div>
            </div>
            <div className='header__center' >
                <div className='header__option active' >
                    <HomeIcon fontSize = 'large' />
                </div>
                <div className='header__option' >
                    <FlagIcon fontSize = 'large' />
                </div>
                <div className='header__option' >
                    <SubscriptionsOutlined fontSize = 'large' />
                </div>
                <div className='header__option' >
                    <StorefrontOutlinedIcon fontSize = 'large' />
                </div>
                <div className='header__option' >
                    <SupervisedUserCircleIcon fontSize = 'large' />
                </div>
            </div>
            <div className='header__right' >
                <div className='header__info' >
                    <Avatar />
                    <h4>sssangna</h4>
                </div>
                <div className='header__icons' >

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Header
