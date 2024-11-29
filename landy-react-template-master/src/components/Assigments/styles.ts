import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  padding: 4rem 0 4rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) => "row"};
  width: 100%;
`;

export const PresRow = styled(Row)`
  flex-direction: row;
  width: 100%;
  border-top: solid;
  padding: 10px;
`;

export const ContentWrapper = styled("div")`
  position: relative;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const StyledA = styled("a")`
  padding-left: 32px;
  color: #464646;
  font-family: "Inter";

  &:hover,
  &:active,
  &:focus {
    color: #ff9500;
  }
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1.2rem;
  width: 600px;
  padding: 0.3rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Inter";
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;
