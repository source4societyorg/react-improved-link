import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ImprovedLink = ({ to: to, children: children, external: external, ...props}) => (
  external ? (
    <a href={to} {...props}>{children}</a>
  ) : (
    <Link to={to} {...props}>{children}</Link>
  )
)

ImprovedLink.defaultProps = {
  external: false,
  to: PropTypes.string,
}

ImprovedLink.propTypes = {
  external: PropTypes.bool,
  to: PropTypes.string,
  children: PropTypes.any,
}

export default ImprovedLink;
