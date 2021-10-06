import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from "../shared/Container";
import { Button } from "../shared";
import {
  StyledInfoSection,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Subtitle,
  Heading,
  ImgWrapper,
  Img,
} from "./InfoSecton.styles";
const InforSection = ({
  primary,
  lightBg,
  imgStart,
  lightTopLine,
  lightTextDesc,
  buttonLabel,
  description,
  headline,
  lightText,
  topLine,
  img,
  alt,
  start,
}) => {
  return (
    <div>
      <StyledInfoSection lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Button big primary={primary} to="/sign-up">
                  {buttonLabel}
                </Button>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </StyledInfoSection>
    </div>
  );
};

export default InforSection;
