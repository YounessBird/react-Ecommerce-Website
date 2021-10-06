import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  padding: 0 50px;
  margin: 0 auto;
  z-index: 1;
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0 30px;
  }
`;
