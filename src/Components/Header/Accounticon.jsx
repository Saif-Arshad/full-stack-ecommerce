"use client"
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Accountimage from '../../../public/Assets/Icons/user 1.svg'
import Image from 'next/image';

export default function Accounticon() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
    
       <Tooltip title="Account">
     <IconButton
     aria-controls={open ? 'demo-positioned-menu' : undefined}
     aria-haspopup="true"
     aria-expanded={open ? 'true' : undefined}
     onClick={handleClick}
     >
      <Image
        src={Accountimage }
        alt='Cart'
        height={25}
        width={25}
        />
      </IconButton>
    </Tooltip>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Log In</MenuItem>
        <MenuItem onClick={handleClose}>Sign In</MenuItem>
      </Menu>
    </div>
  );
}