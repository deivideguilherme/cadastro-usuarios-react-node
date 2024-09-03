import PropTypes from "prop-types";

import { Button } from "./styles";
//spread operator
function DefaultButton({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
}

//Tipando o componente
DefaultButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultButton;
