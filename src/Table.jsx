import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withTheme } from './utils/helpers';
import { sizeType } from './utils/propTypes';
import { TableStyles } from './utils/system';

export const StyledTable = styled.table`
  ${TableStyles.base};
  
  th {
    text-align: inherit;
  }

  th,
  td {
    ${TableStyles.cellBorder};
    ${TableStyles.padding};
    vertical-align: top;
  }
  
  thead {
    ${TableStyles.headBackgroundColor};
    ${TableStyles.headColor};
  }
  
  thead th {
    ${TableStyles.headCellBorder};
    vertical-align: bottom;
  }
  
  tbody tr:nth-of-type(odd) {
    ${TableStyles.striped};
  }
  
  ${TableStyles.caption};
`;

StyledTable.propTypes = {
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  children: PropTypes.node.isRequired,
  head: PropTypes.oneOf(['light', 'dark']),
  inverted: PropTypes.bool,
  size: sizeType,
  striped: PropTypes.bool,
};

StyledTable.defaultProps = {
  bordered: false,
  borderless: false,
  inverted: false,
  size: 'md',
  striped: false,
};

export default withTheme(StyledTable, 'Table');
