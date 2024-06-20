import PropTypes from "prop-types";

MessageCMP.propTypes = {
  message: PropTypes.string,
};

const stylesObj = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  textWrap: "noWrap",
};

export default function MessageCMP({ message }) {
  return <p style={stylesObj}>{message}</p>;
}
