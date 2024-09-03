import PropTypes from "prop-types";

import { Button } from "./styles";
//spread operator
function DefaultButton({ children, theme, ...props }) {
  return (
    <Button {...props} theme={theme}>
      {children}
    </Button>
  );
}

//Tipando o componente
DefaultButton.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
};

export default DefaultButton;
