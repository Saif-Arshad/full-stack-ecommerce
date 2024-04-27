import React from 'react'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Accountimage from '../../../public/Assets/Icons/user 1.svg'
import Image from 'next/image';

function Accounticon() {
  return (
    <div>
        <Tooltip title="Account">
      <IconButton>
      <Image
        src={Accountimage }
        alt='Cart'
        height={25}
        width={25}
        />
      </IconButton>
    </Tooltip>
    </div>
  )
}

export default Accounticon
