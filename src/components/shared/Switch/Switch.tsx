import React, { useCallback, useState } from 'react';

import { ReactComponent as ToggleOn } from 'assets/toggle-on.svg';
import { ReactComponent as ToggleOff } from 'assets/toggle-off.svg';
import Styles from './Switch.module.scss';

interface ToggleProps<T> {
  readonly valueOn: T;
  readonly valueOff: T;
  readonly initialValue?: 'on' | 'off';
  readonly onChange: (value: T) => void;
  readonly children?: never;
}

export function Switch<T>({
  valueOn,
  valueOff,
  initialValue = 'on',
  onChange,
}: ToggleProps<T>) {
  const [value, setValue] = useState(
    initialValue === 'on' ? valueOn : valueOff,
  );

  const handleChange = useCallback(() => {
    const newValue = value === valueOn ? valueOff : valueOn;

    setValue(newValue);
    onChange(newValue);
  }, [onChange, value, valueOn, valueOff]);

  return (
    <button type="button" className={Styles.Component} onClick={handleChange}>
      {value === valueOn && <ToggleOn />}
      {value === valueOff && <ToggleOff />}
    </button>
  );
}
