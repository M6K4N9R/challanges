import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import NewBox from "@/components/BoxWithStyledComponents.js";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
`;

export default function HomePage() {
  return (
    <StyledDiv>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <NewBox $isBlack={"black"} />
      <NewBox $isBlack={""} />
    </StyledDiv>
  );
}
