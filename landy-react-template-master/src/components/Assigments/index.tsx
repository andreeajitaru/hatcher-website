import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import { Title } from "../../components/ContentBlock/styles";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  StyledA,
  ButtonWrapper,
  PresRow,
} from "./styles";

import AssignmentsContent from "../../content/Assignments.json";

const Assignments = ({ id }: any) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const direction = "right";

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <ContentWrapper>
            <Title>{"Process Presentations"}</Title>
            <ServiceWrapper>
              <Row justify="space-between">
                {typeof AssignmentsContent === "object" &&
                  AssignmentsContent.map((i) => {
                    return (
                      <PresRow key={i.title} justify="start" align="middle">
                        <MinTitle>{i.title}</MinTitle>
                        {i.pdf && (
                          <StyledA href={i.pdf} target="_blank">
                            PDF
                          </StyledA>
                        )}
                        {i.pptx && (
                          <StyledA href={i.pptx} target="_blank">
                            PPTX
                          </StyledA>
                        )}
                        {i.readme && (
                          <StyledA href={i.readme} target="_blank">
                            README
                          </StyledA>
                        )}
                        {i.link && (
                          <StyledA href={i.link} target="_blank">
                            LINK
                          </StyledA>
                        )}
                        {i.word && (
                          <StyledA href={i.word} target="_blank">
                            WORD
                          </StyledA>
                        )}
                        {i.xlsx && (
                          <StyledA href={i.xlsx} target="_blank">
                            XLSX
                          </StyledA>
                        )}
                        {i.script && (
                          <StyledA href={i.word} target="_blank">
                            SCRIPT
                          </StyledA>
                        )}
                      </PresRow>
                    );
                  })}
              </Row>
            </ServiceWrapper>
          </ContentWrapper>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(Assignments);
