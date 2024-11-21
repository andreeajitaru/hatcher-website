import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #f6faec; /* Margin color */
  width: 100%; /* Full width to cover margins */
`;

export const StyledContainer = styled("div")<{
  border?: boolean;
}>`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 60px;
  background-color: #f6faec; /* Container background */
  border-top: ${(p) => (p.border ? "1px solid #F6FAEC" : "")};

  @media only screen and (max-width: 1024px) {
    max-width: calc(100% - 68px);
    padding: 0 30px;
  }

  @media only screen and (max-width: 768px) {
    max-width: calc(100% - 38px);
    padding: 0 18px;
  }

  @media only screen and (max-width: 414px) {
    max-width: 100%;
    padding: 0 18px;
  }
`;
