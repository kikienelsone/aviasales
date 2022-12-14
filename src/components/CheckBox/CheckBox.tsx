import React, { useEffect, useState } from 'react';
import { Checkbox } from 'antd';

import checkBox from './CheckBox.module.scss';
interface CheckBoxProps {
  name: string;
  getStopsCheck: (arg: GetStopsCheckProps) => void;
  parentCheck: boolean;
  childData: number;
  id: number;
}

interface GetStopsCheckProps {
  id: number;
  isCheck: boolean | ((prevState: boolean) => boolean);
}

export const CheckBox: React.FC<CheckBoxProps> = ({ name, getStopsCheck, parentCheck, childData, id }) => {
  const [check, setCheck] = useState(false);

  const isActive = (event: boolean | ((prevState: boolean) => boolean)) => {
    setCheck(event);
    getStopsCheck({
      id: id,
      isCheck: event,
    });
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    parentCheck ? !check && isActive(parentCheck) : check && childData < 1 && isActive(parentCheck);
  }, [parentCheck]);

  return (
    <label htmlFor="checkbox" className={checkBox.wrapper}>
      <Checkbox
        checked={check}
        onChange={(event) => {
          isActive(event.target.checked);
        }}
      >
        {name}
      </Checkbox>
    </label>
  );
};
