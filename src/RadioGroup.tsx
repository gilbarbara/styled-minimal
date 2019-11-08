import * as React from 'react';

import { FormGroup } from './FormGroup';
import { Radio } from './Input';

import { NumberOrString, RadioGroupProps } from './types';

export class RadioGroup extends React.PureComponent<
  RadioGroupProps,
  { selectedValue: NumberOrString }
> {
  constructor(props: RadioGroupProps) {
    super(props);

    this.state = {
      selectedValue: props.value || props.defaultValue!,
    };
  }

  static defaultProps = {
    disabled: false,
    size: 'md',
    variant: 'primary',
  };

  componentDidUpdate(prevProps: RadioGroupProps) {
    const { value } = this.props;

    if (value && prevProps.value !== value) {
      this.update(value);
    }
  }

  update = (selectedValue: NumberOrString) => {
    this.setState({ selectedValue });
  };

  handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value, disabled, onChange } = this.props;
    const numericValue = Number(target.value);
    const currentValue = !Number.isNaN(numericValue) ? numericValue : target.value;

    if (onChange) {
      onChange(currentValue);
    }

    if (!value && !disabled) {
      this.update(currentValue);
    }
  };

  render() {
    const { selectedValue } = this.state;
    const {
      dark,
      defaultValue,
      disabled,
      inline,
      invert,
      name,
      onChange,
      options,
      size,
      value,
      variant,
      ...rest
    } = this.props;

    if (!options || !options.length) {
      return null;
    }

    return (
      <FormGroup {...rest} role="radiogroup">
        {options.map(d => (
          <Radio
            key={d.value}
            checked={d.value === selectedValue}
            dark={dark}
            disabled={disabled || d.disabled}
            inline={inline}
            invert={invert}
            label={d.label || d.value}
            name={name}
            onChange={this.handleChange}
            size={size}
            value={d.value}
            variant={d.variant || variant}
          />
        ))}
      </FormGroup>
    );
  }
}
