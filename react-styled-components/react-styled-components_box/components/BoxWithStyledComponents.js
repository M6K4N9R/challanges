import styled, { css } from "styled-components";

export default styled.div`
  width: 100px;
  height: 100px;
  margin: 2rem;

  ${({ $isBlack }) =>
    $isBlack === "black" &&
    css`
      background-color: black;
    `}

  ${({ $isBlack }) =>
    !$isBlack &&
    css`
      background-color: green;
    `}
  &:hover {
    background-color: red;
  }
`;

// export default function NewBox({ $isBlack }) {
//   return <StyledBox $isBlack={$isBlack}></StyledBox>;
// }
