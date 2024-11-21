import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
  font-size: 20px;
  font-family: "Inter";
`;

export const Title = styled("p")`
  margin: 1.5rem 0 2rem 0;
  font-size: 36px;
  font-family: "Inter";
`;

// Link buttons
export const StyledA = styled("a")`
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 400;
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};
`;

// text
export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 16px;
  font-family: "Inter";
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
`;

//unused
export const MinPara = styled("p")`
  font-size: 13px;
  font-family: "Inter";
`;

// learn more button
export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    font-size: 18px;
    margin-left: 20px;
    font-weight: 400;
  }
`;
