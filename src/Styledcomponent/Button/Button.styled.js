import styled from "styled-components";

export const Mainbutton = styled.button`

padding: ${props => (props.$paddingTB ? props.$paddingTB  : "0")} ${props => (props.$paddingLR  ? props.$paddingLR : "0")};
text-transform: uppercase;
font-size:20px;
border:${props => (props.$border ? props.$border  : "0" )} solid ${props => (props.$borderColor ? props.$borderColor  : "white" )} ;
width:150px;
font-size:20px;
margin-top:40px;
font-weight:400;
color:white;
transition:all .3s ease-in-out;
&:hover{
    transform:scale(0.98);
}
`