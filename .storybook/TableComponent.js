import React from 'react';
import styled from 'styled-components';

import { outlines } from '../src/utils/system';
import { palette, colors } from '../src/utils/theme';

import { basePropTypes, gridPropTypes } from '../src/Box';

const stylePropTypes = { ...basePropTypes, ...gridPropTypes, ...outlines.propTypes };
const stylePropNames = Object.keys(stylePropTypes).map(d => d);

const sorter = (a, b) => {
  if (a.property < b.property) return -1;
  if (a.property > b.property) return 1;
  return 0;
};

const getPropTypes = (property, propType, description) => {
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

  if (property === 'size') {
    if (description === 'sizesAllPropTypes') {
      type = `oneOf: 'xs', 'sm', 'md', 'lg', 'xl'`;
    } else {
      type = `oneOf: 'sm', 'md', 'lg'`;
    }
  }

  if (property === 'level') {
    type = 'oneOf: 1, 2, 3, 4, 5, 6';
  }

  if (property === 'variant') {
    type = `oneOf: '${[...Object.keys(palette), ...Object.keys(colors)].join("', '")}'`;
  }

  if (property === 'as' && propType === 'other') {
    type = `oneOf: 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'`;
  }
  if (description) {
    console.log(property, description);
  }
  if (property === 'type' && description === 'buttonTypes') {
    type = `oneOf: 'button', 'submit', 'reset'`;
  }

  return type;
};

const splitProps = props => {
  const componentProps = props.filter(d => !stylePropNames.includes(d.property));
  let componentStyles = props.filter(d => stylePropNames.includes(d.property));

  if (componentStyles.length < 3) {
    componentStyles = Object.keys(basePropTypes).map(d => {
      const prop = basePropTypes[d];

      return {
        property: d,
        propType: 'string|number|array',
        required: false,
        description: '',
      };
    });
  }

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
    ...componentProps.sort(sorter),
    { title: 'Style Props' },
    ...componentStyles.sort(sorter),
  ].map(({ property, propType, required, description, defaultValue, title }) => {
    if (title) {
      return (
        <tr key={title}>
          <td colSpan={4}>
            <SubTitle>{title}</SubTitle>
            <Text>These can be used directly on the component to avoid using inline styles</Text>
          </td>
        </tr>
      );
    }

    return (
      <tr key={property}>
        <td width="150">
          {property}
          {required && !stylePropNames.includes(property) && <Red>*</Red>}
        </td>
        <td>{getPropTypes(property, propType, description)}</td>
        <td>{defaultValue}</td>
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
        </tr>
      </thead>
      <tbody>{props}</tbody>
    </Table>
  );
};

export default TableComponent;
