import React from 'react'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'
import Image from 'next/image'
import { Mainbutton } from '@/Styledcomponent/Button/Button.styled'
import Dropdown from '../Dropdown/Dropdown'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/Redux/feature/cartSlice'
import toast from 'react-hot-toast'
const SingalProduct= styled.section`
    display: flex;
    flex-direction: column;

    .Main-product{
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        @media screen and (max-width: 647px) {
                flex-direction: column;
                justify-content: center;
                align-items: center;
        }
        
        div:nth-of-type(1){
            width: 35%;
            @media screen and (max-width: 647px) {
                width: 230px;
        }
        }
        div:nth-of-type(2){
            display: flex;
            width: 60%;
            @media screen and (max-width: 647px) {
                width: 100%;
                p{
                    font-size: 17px;
                }
        }
            flex-wrap: wrap;
            flex-direction: column;

          h1{
            font-size: 42px;
            font-weight: 600;
            @media screen  and (max-width:500px){
                font-size: 32px;
            }
            text-transform: capitalize;
          } 
          .price {
            display: flex;
            gap: 20px;
            font-size: 24px;
            span:nth-of-type(1){
                opacity: 0.8;
            }
        }
        p{
            font-size: 20px;
        }
        .array-list{
            margin-top: 20px;
            label{
                font-size: 20px;
                font-weight: 600;
            }
            span{
                display: flex;
                gap: 7px;
                margin-top: 3px;
                flex-direction: row;

            }
        }
            
        }
   
        
    }
    .description{
            display: flex;
            margin-top: 30px;
            flex-direction: column;
            width: 100%;

            h1{
                font-size: 30px;
                font-weight: 500;
            }
            p{  
                font-size: 18px;
                margin-top: 6px;
                width: 95%;
            }
        }

        .slice-description{
            display: flex;
            width: 97%;
            display: flex;
            flex-wrap: wrap;
        }
`



function Singalproduct(props) {
        const id = props.id
    const productData = useSelector((state)=>state.ecommerce.items)
    const filteredData = productData.filter((item)=> item.id === id)[0]
    const dispatch = useDispatch()
    const cartAdd = (item)=>{
       dispatch(addToCart(item))
       toast.success(`${item.title} added to cart`)
    }


  return (
    <SingalProduct key={filteredData.id}>
        <div className='Main-product'>
        <div>
<Image
     data-aos="zoom-in"
    src={filteredData.image.src}
    alt={filteredData.title}
    width={400}
    height={300}
    className='object-cover'
>

</Image>

        </div>
        <div>
        <h1>{filteredData.title}</h1>
        <div className="price">
            <span><del>{filteredData.actualprice}$</del></span>
            <span>{filteredData.discountprice}$</span>
        </div>
        <span className="slice-description">
        <p>
            {filteredData.description.slice(0,150)}...
        </p>
        </span>

<Dropdown/>

        <Mainbutton onClick={()=>cartAdd(filteredData)} $BGColor="#024E82" $paddingTB="10px" $paddingLR="1px"  $TextSize="37px" >
  Add to cart
</Mainbutton>
<div className='array-list'>
            <label htmlFor="cataories">Catagory:</label>
         <span>
            {
                filteredData.category.map((item,index)=>(
                    <p name="category" key={index}>{item},</p>
                ))
            }
            </span>
        </div>
        <div className='array-list'>
            <label htmlFor="Tags">Tags:</label>
            <span>
            {
                filteredData.Tags.map((item,index)=>(
                    <p name="Tags" key={index}>{item},</p>
                ))
            }
            </span>
        </div>
        </div>
       
        </div>

        <div className='description'>
            <h1>Description</h1>
                <p>{filteredData.description}</p>
        </div>
    </SingalProduct>
  )
}

export default Singalproduct
