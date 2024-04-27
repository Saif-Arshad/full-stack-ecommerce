import styled from "styled-components";

export const Hero = styled.section`
    min-height: ${props => (props.$minH ? props.$minH : "90vh")};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    div {
        height: 100%;
        padding: 90px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h1 {
            font-size: 50px;
            color: white;
            text-transform: uppercase;
            font-weight: 700;
            text-align: center;
        }
    }

    @media screen and (max-width: 520px) {
        div h1 {
            font-size: 30px; 
        }
    }
    @media screen and (max-width: 680px) {
        div  {
            padding:10px; 
        }
    }
`;