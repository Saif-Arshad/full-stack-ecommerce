import styled from "@emotion/styled";

export const Card = styled.div`
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 15px;
    width: 100%;
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
            font-weight: 500;
            color:#024E82;
        }
    }

`;