import React from 'react';
import styled from 'styled-components';

import { outlines } from '../src/utils/system';
import { basePropTypes, gridPropTypes } from '../src/Box';

const stylePropTypes = { ...basePropTypes, ...gridPropTypes, ...outlines.propTypes };
const stylePropNames = Object.keys(stylePropTypes).map(d => d);

const getPropTypes = (property, propType) => {
  let type = typeof propType === 'string' ? propType : propType.name;

  if (stylePropNames.includes(property)) {
    const prop = stylePropTypes[property];
    if (!prop.meta) {
      type = 'string';
    } else if (prop.meta.styleType === 'responsive') {
      type = 'string|number|array';
    } else {
      type = 'string|number';
    }
  }

  return type;
};

const splitProps = props => {
  const componentProps = props.filter(d => !stylePropNames.includes(d.property));
  const componentStyles = props.filter(d => stylePropNames.includes(d.property));

  return { componentProps, componentStyles };
};

const Table = styled.table`
  margin-top: 15px;
  width: 100%;
`;

const Th = styled.th`
  border-bottom: 1px solid #ccc;
  text-align: left;
  text-transform: uppercase;
`;

const Red = styled.span`
  color: red;
`;

const SubTitle = styled.h4`
  margin: 0;
  padding: 5px 0 0;
`;

const Text = styled.p`
  margin: 0;
  padding-bottom: 5px;
`;

const TableComponent = ({ propDefinitions }) => {
  const { componentProps, componentStyles } = splitProps(propDefinitions);
  const props = [
    ...componentProps,
    { title: 'Style Props' },
    ...componentStyles.sort((a, b) => {
      if (a.property < b.property) return -1;
      if (a.property > b.property) return 1;
      return 0;
    }),
  ].map(({ property, propType, required, description, defaultValue, title }) => {
    if (title) {
      return (
        <tr>
          <td colSpan={4}>
            <SubTitle>{title}</SubTitle>
            <Text>These can be used directly on the component to avoid using inline styles</Text>
          </td>
        </tr>
      );
    }
    return (
      <tr key={property}>
        <td>
          {property}
          {required && !stylePropNames.includes(property) && <Red>*</Red>}
        </td>
        <td>{getPropTypes(property, propType)}</td>
        <td>{defaultValue}</td>
        <td>{description}</td>
      </tr>
    );
  });

  return (
    <Table>
      <thead>
        <tr>
          <Th>name</Th>
          <Th>type</Th>
          <Th>default</Th>
          <Th>description</Th>
        </tr>
      </thead>
      <tbody>{props}</tbody>
    </Table>
  );
};

export default TableComponent;
