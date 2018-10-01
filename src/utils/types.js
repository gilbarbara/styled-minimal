// @flow
import PropTypes from 'prop-types';
import { sizeOptions, sizeFullOptions, variantOptions } from './options';

export const buttonType = PropTypes.oneOf(['button', 'submit', 'reset']);
export const headingType = PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);
export const sizeType = PropTypes.oneOf(sizeOptions);
export const sizeFullType = PropTypes.oneOf(sizeFullOptions);
export const textAlignType = PropTypes.oneOf(['left', 'center', 'right', 'justify']);
export const variantType = PropTypes.oneOf(variantOptions);
