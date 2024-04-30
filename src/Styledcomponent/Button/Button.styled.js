import styled from "@emotion/styled";

export const Mainbutton = styled.button`

padding: ${props => (props.$paddingTB ? props.$paddingTB  : "0")} ${props => (props.$paddingLR  ? props.$paddingLR : "0")};
text-transform: uppercase;
font-size:${props => (props.$TextSize ? props.$TextSize  : "20px" )};
border:${props => (props.$border ? props.$border  : "0" )} solid ${props => (props.$borderColor ? props.$borderColor  : "white" )} ;
width:${props => (props.$BtnWidth ? props.$BtnWidth  : "150px" )};
font-size:${props => (props.$BtnFont ? props.$BtnFont  : "20px" )} ;
margin-top:40px;
font-weight:400;
color:${props => (props.$TextColor ? props.$TextColor  : "white" )} ;
background-color:${props => (props.$BGColor ? props.$BGColor  : "transparent" )} ;
transition:all .3s ease-in-out;
&:hover{
    transform:scale(0.98);
}
`