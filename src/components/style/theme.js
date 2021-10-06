import {
  GiCrystalBars,
  GiCutDiamond,
  GiRock,
  GiFloatingCrystal,
} from "react-icons/gi";

const theme = {
  colors: {
    header: "#101522",
    body: "#fff",
    footer: "#101522",
  },
  cards: [
    {
      icon: <GiRock />,
      plan: "Starters Pack",
      cost: "$99.99",
      duration: "per month",
      feature1: "100 New Users",
      feature2: "$10,000 Budget",
      feature3: "Retargeting analytics",
    },
    {
      icon: <GiCrystalBars />,
      plan: "Starter Pack",
      cost: "$299.99",
      duration: "per month",
      feature1: "1000 New Users",
      feature2: "$50,000 Budget",
      feature3: "Lead Gen Analytics",
    },
    {
      icon: <GiCutDiamond />,
      plan: "Diamond Kings",
      cost: "$999.99",
      duration: "per month",
      feature1: "Unlimited Users",
      feature2: "Unlimited Budget",
      feature3: "24/7 Support",
    },
  ],
  mobile: "760px",
};

export default theme;
