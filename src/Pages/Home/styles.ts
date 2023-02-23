import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */

  margin-bottom: 6.75rem;

  img {
    display: block;
    width: 476px;
    max-width: 100%;
    height: 360px;
  }

  @media (max-width: 1100px) {
    img {
      display: none;
    }
  }
`