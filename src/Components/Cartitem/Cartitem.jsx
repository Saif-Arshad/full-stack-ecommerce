"use client"


import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeCartItem } from '@/Redux/feature/cartSlice'
import styled from '@emotion/styled'
import Tooltip from '@mui/material/Tooltip';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';


const CartTable = styled.table`
  border-collapse: collapse;
  width: 100%;

  th, td {
    padding: 10px; 
    text-align: left; 
  }
  tr {
    border-bottom: 1px solid #ccc
  }
  td:first-of-type {
    width: 10%; 
  }

  @media (max-width: 768px) {
    th, td {
      padding: 8px; 
      font-size: 12px; 
    }

    td:first-of-type {
      width: 15%;
    }
  }
`

function Cartitem() {
  const cartData = useSelector((state) => state.ecommerce.cart)
  console.log(cartData)
  const dispatch = useDispatch();

  const deleteItem =(item)=>{
    const permission = confirm("Are You want to delete this Item?")
    if(permission){
        dispatch(removeCartItem(item))
    }
  }
  
  return (
    <CartTable>
      <thead>
        <tr>
          <th></th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cartData.map((item, index) => (
          <tr key={index}>

            <td>
        <Tooltip title={`Delete ${item.title}`}>
                 <IconButton onClick={()=>deleteItem(item)}>
      <DeleteOutlineIcon style={{ fill: 'red' }} />
      </IconButton>
    </Tooltip>
      
      </td>
            <td>{item.title}</td>
            <td>{item.actualprice}$</td>
            <td>{item.quantity}</td>
            <td>{(item.quantity * item.actualprice).toFixed(2)} $</td>
          </tr>
        ))}
      </tbody>
    </CartTable>
  )
}

export default Cartitem
