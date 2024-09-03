import styled from "styled-components";

export const Button = styled.button`
  border: ${(props) =>
    props.theme === "primary" ? "none" : "1px solid #ffffff"};
  background: ${(props) =>
    props.theme === "primary"
      ? "linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)"
      : "transparent"};
  font-size: 16px;
  color: #ffffff;
  padding: 16px 32px;
  width: fit-content;
  cursor: pointer;
  border-radius: 30px;

  &:hover {
    ${(props) => (props.theme === "primary" ? "opacity: 0.8" : "opacity: 0.6")}
  }

  &:active {
    ${(props) =>
      props.theme === "primary"
        ? "opacity: 0.5"
        : "background: rgba(255,255,255, 0.2)"}
  }
`;
