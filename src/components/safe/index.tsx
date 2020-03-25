import React from "react";
import styled from "styled-components";

import { Stepper } from "../index";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 245px auto;
  grid-template-rows: 62px auto;
  min-height: 500px;
`;

const Title = styled.div`
  grid-column: 1/3;
  grid-row: 1;
`;

export const Nav = styled.div`
  grid-column: 1;
  grid-row: 2;
`;

export const Body = styled.div`
  grid-column: 2;
  grid-row: 2;
`;
const steps = [
  { id: "1", label: "Transaction submitted" },
  { id: "2", label: "Validating transaction" },
  { id: "3", label: "Deploying smart contract" },
  { id: "4", label: "Generating your Safe" },
  { id: "5", label: "Result" }
];

const SafeDeployment = () => (
  <Wrapper>
    <Title>some Title</Title>
    <Nav>
      <Stepper steps={steps} activeStepIndex={1} orientation="vertical" />
    </Nav>
    <Body>
      <div>something</div>
    </Body>
  </Wrapper>
);

export default SafeDeployment;
