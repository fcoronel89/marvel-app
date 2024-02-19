import PropTypes from "prop-types";
import { AuthContextProvider } from "../context/authContext";

export const TestProviders = ({ children, currentUserValue }) => (
  <AuthContextProvider currentUser={currentUserValue}>
    {children}
  </AuthContextProvider>
);

TestProviders.propTypes = {
  children: PropTypes.node.isRequired,
  currentUserValue: PropTypes.string,
};