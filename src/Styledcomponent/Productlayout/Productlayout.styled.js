import styled from '@emotion/styled'


export const ProductCard = styled.div`
  width: 100%;
  display: flex;
  margin:40px 0;
  align-items: center;
  flex-direction: column;

  .top-heading {
    display: flex;
    align-items: center;
    flex-direction: column;
    h1 {
      font-size: 35px;
      font-weight: 700;
      @media screen and (max-width:450px) {
        font-size: 25px;
      }
    }
    h5 {
      font-size: 18px;
    }
  }
`
