import React from 'react';
import PropTypes from 'prop-types';

const isSingle = child => child.length === 1 && typeof child[0] === 'string';

const Enhancer = ({ children, component: Component, ...props }) => {
  const childrenWithProps = React.Children.map(children, child => (React.isValidElement(child) ? React.cloneElement(child, { ...props }) : child));

  let element;

  if (Component && isSingle(childrenWithProps)) {
    element = React.isValidElement(Component)
      ? React.cloneElement(Component, { ...props }, childrenWithProps)
      : <Component {...props}>{childrenWithProps}</Component>;
  }

  return (
    element || childrenWithProps
  );
};

Enhancer.propTypes = {
  children: PropTypes.node.isRequired,
  component: PropTypes.func.isRequired,
};

export default Enhancer;
