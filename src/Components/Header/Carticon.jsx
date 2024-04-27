import React from 'react'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Badge from '@mui/material/Badge';
import Cartimage from '../../../public/Assets/Icons/shopping-bag 1.svg'
import Image from 'next/image';
function Carticon() {
  return (
    <div>
        <Tooltip title="Cart Items">
        <Badge color="primary" badgeContent={10}>
      <IconButton>
        <Image
        src={Cartimage }
        alt='Cart'
        height={25}
        width={25}
        />
        {/* <LocalMallIcon /> */}
      </IconButton>
      </Badge>
    </Tooltip>
    </div>
  )
}

export default Carticon
