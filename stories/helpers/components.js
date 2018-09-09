import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
`;

const checkbox = ({ hideCheckbox }) => (
  !hideCheckbox
    ? css`
        background: linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc 0), linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc 0), transparent;
        background-position: 0 0, 10px 10px;
        background-size: 20px 20px;
    `
    : ''
);

const spacer = ({ skipSpacer }) => (
  !skipSpacer
    ? css`
        > * {
          margin: 15px;
        }
    `
    : ''
);

const centered = ({ skipCentered }) => (
  !skipCentered
    ? css`
      text-align: center;
    `
    : ''
);

const flex = ({ direction, skipFlex }) => (
  !skipFlex
    ? css`
      align-items: center;
      display: flex;
      flex-direction: ${direction};
      flex-wrap: wrap;
      justify-content: center;
    `
    : ''
);

const StyledView = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  margin: 0 auto;
  min-height: 30vh;
  ${centered};
  ${flex};
  ${checkbox}
  ${spacer};
`;

const View = ({ children, ...props }) => (
  <StyledView {...props}>{children}</StyledView>
);

View.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.string,
  hideCheckbox: PropTypes.bool,
  skipCentered: PropTypes.bool,
  skipFlex: PropTypes.bool,
  skipSpacer: PropTypes.bool,
};

View.defaultProps = {
  direction: 'row',
  hideCheckbox: false,
};

const StyledSVG = styled.div`
  display: flex;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  
  & + * {
    margin-left: 6px;
  }
`;

const SVG = ({ color, height, width, ...props }) => (
  <StyledSVG height={height} width={width} {...props}>
    <svg
      width={width}
      height={height}
      viewBox="0 0 128 128"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
    >
      <g>
        <path
          d="M107.083522,64 C107.083522,62.5000067 106.583524,61.2500123 105.583529,60.2500167 L67.8336972,22.5001853 C66.8337016,21.5001897 65.5837072,21.000192 64.0837139,21.000192 C62.5837206,21.000192 61.3337262,21.5001897 60.3337307,22.5001853 L52.7503359,30.08358 C51.7503404,31.0835755 51.2503426,32.3335699 51.2503426,33.8335632 C51.2503426,35.3335565 51.7503404,36.583551 52.7503359,37.5835465 L68.5002656,53.3334762 L26.6670238,53.3334762 C25.2226493,53.3334762 23.9726549,53.8612834 22.9170405,54.9168977 C21.8614262,55.972512 21.333619,57.2225064 21.333619,58.666881 L21.333619,69.3336905 C21.333619,70.778065 21.8614262,72.0280594 22.9170405,73.0836737 C23.9726549,74.1392881 25.2226493,74.6670952 26.6670238,74.6670952 L68.5002656,74.6670952 L52.7503359,90.4170249 C51.6947216,91.4726393 51.1669144,92.7226337 51.1669144,94.1670082 C51.1669144,95.6113827 51.6947216,96.8613771 52.7503359,97.9169914 L60.3337307,105.500386 C61.3337262,106.500382 62.5837206,107.000379 64.0837139,107.000379 C65.5837072,107.000379 66.8337016,106.500382 67.8336972,105.500386 L105.583529,67.7505547 C106.583524,66.7505591 107.083522,65.5005647 107.083522,64.0005714 L107.083522,64 Z M128,64 C128,75.6111863 125.13887,86.3195194 119.41661,96.1249994 C113.69435,105.930479 105.930479,113.69435 96.1249994,119.41661 C86.3195194,125.13887 75.6111863,128 64,128 C52.3888137,128 41.6804806,125.13887 31.8750006,119.41661 C22.0695205,113.69435 14.3056504,105.930479 8.58339025,96.1249994 C2.86113008,86.3195194 0,75.6111863 0,64 C0,52.3888137 2.86113008,41.6804806 8.58339025,31.8750006 C14.3056504,22.0695205 22.0695205,14.3056504 31.8750006,8.58339025 C41.6804806,2.86113008 52.3888137,1.08272902e-14 64,0 C75.6111863,-1.08272902e-14 86.3195194,2.86113008 96.1249994,8.58339025 C105.930479,14.3056504 113.69435,22.0695205 119.41661,31.8750006 C125.13887,41.6804806 128,52.3888137 128,64 Z"
          fill={color}
        />
      </g>
    </svg>
  </StyledSVG>
);

SVG.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

SVG.defaultProps = {
  color: '#fff',
  height: '16px',
  width: '16px',
};

export { SVG, Wrapper, View };
