import styled from "styled-components";

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ $isBlack }) =>
    $isBlack === "black" ? "black" : "green"};
  margin: 2rem;
  &:hover {
    background-color: red;
  }
`;

export default function NewBox({ $isBlack }) {
  return <StyledBox $isBlack={$isBlack}></StyledBox>;
}
