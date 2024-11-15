import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  StyledA,
  PresRow,
  ButtonWrapper,
} from "./styles";

import AssignmentsContent from "../../content/Assignments.json";

const Assignemnts = ({ id }: any) => {
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
            <h6>{"Process Presentations"}</h6>
            <ServiceWrapper>
              <Row justify="space-between">
                {typeof AssignmentsContent === "object" &&
                  AssignmentsContent.map((i) => {
                    return (
                      <PresRow
                        key={i.title}
                        justify="space-between"
                        align="middle"
                      >
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

export default withTranslation()(Assignemnts);
