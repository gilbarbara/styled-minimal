// @flow
import PropTypes from 'prop-types';
import { sizeOptions, sizeOptionsFull, variantOptions } from './options';

export const buttonType = PropTypes.oneOf(['button', 'submit', 'reset']);
export const headingType = PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);
export const sizeType = PropTypes.oneOf(sizeOptions);
export const sizeTypeFull = PropTypes.oneOf(sizeOptionsFull);
export const textAlignType = PropTypes.oneOf(['left', 'center', 'right', 'justify']);
export const variantType = PropTypes.oneOf(variantOptions);
