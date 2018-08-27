import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fontFamily, TableStyles } from './utils/system';

export const StyledTable = styled.table`
  ${TableStyles.backgroundColor};
  ${TableStyles.border};
  ${TableStyles.color};
  border-collapse: collapse;
  ${fontFamily};
  width: 100%;
  
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

const Table = ({ children, ...props }) => (
  <StyledTable {...props}>{children}</StyledTable>
);

Table.propTypes = {
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  children: PropTypes.node.isRequired,
  head: PropTypes.oneOf(['light', 'dark']),
  inverted: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  striped: PropTypes.bool,
};

Table.defaultProps = {
  bordered: false,
  borderless: false,
  inverted: false,
  size: 'md',
  striped: false,
};

export default Table;
