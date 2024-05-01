"use client"

import React from 'react'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import Cartimage from '../../../public/Assets/Icons/shopping-bag 1.svg'
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';

function Carticon() {
  const cartItmes = useSelector((state)=>state.ecommerce.cart)
  const length = cartItmes.length
  return (
    <div>
        <Tooltip title="Cart Items">
        <Badge color="primary" badgeContent=
        {length}
        >
   <Link href={'/cart'}>
      <IconButton>
        <Image
        src={Cartimage }
        alt='Cart'
        height={25}
        width={25}
        />
      </IconButton>
        </Link>
      </Badge>
    </Tooltip>
    </div>
  )
}

export default Carticon
