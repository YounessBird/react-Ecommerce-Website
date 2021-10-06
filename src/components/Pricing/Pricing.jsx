import React from "react";
import { Button } from "../shared";
import { AiFillThunderbolt } from "react-icons/ai";
import theme from "../style/theme";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Pricing.styled";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            {theme.cards.map((card) => (
              <PricingCard to="/sign-up">
                <PricingCardInfo>
                  <PricingCardIcon>{card.icon}</PricingCardIcon>
                  <PricingCardPlan>{card.plan}</PricingCardPlan>
                  <PricingCardCost>{card.cost}</PricingCardCost>
                  <PricingCardLength>{card.duration}</PricingCardLength>
                  <PricingCardFeatures>
                    <PricingCardFeature>{card.feature1}</PricingCardFeature>
                    <PricingCardFeature>{card.feature2}</PricingCardFeature>
                    <PricingCardFeature>{card.feature3} </PricingCardFeature>
                  </PricingCardFeatures>
                  <Button primary>Choose Plan</Button>
                </PricingCardInfo>
              </PricingCard>
            ))}
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
