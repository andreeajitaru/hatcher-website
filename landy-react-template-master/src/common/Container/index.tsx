import { StyledContainer } from "./styles";
import { Wrapper } from "./styles";
import { ContainerProps } from "../types";

const Container = ({ border, children }: ContainerProps) => (
  <Wrapper>
    <StyledContainer border={border}>{children}</StyledContainer>
  </Wrapper>
);

export default Container;
