import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ImprovedLink = (props) => (
  external ? (
    <a href={props.to} {...props}>{props.children}</a>
  ) : (
    <Link to={props.to} {...props}>{props.children}</Link>
  )
)

ImprovedLink.defaultProps = {
  external: false,
  to: PropTypes.string,
}

ImprovedLink.propTypes = {
  external: PropTypes.bool,
  children: PropTypes.any,
}

export default ImprovedLink;
