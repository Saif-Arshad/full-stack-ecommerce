import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 15px;
    width: 95%;
    @media screen  and (max-width: 500px) {
        width: 98%;
    }
    div{
        display: flex;
        flex-direction: column;
        align-items:center;
        h1{
            font-weight: 650;
            margin-top: 5px;
        }
        img{
            object-fit: cover;
        }
        p{
            font-weight: 400;
            color:#024E82;
        }
    }

`;