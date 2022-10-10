import React, { useEffect, useState } from 'react';

import { CheckBox } from '../CheckBox/CheckBox';
import { useAppDispatch } from '../../hook/hook';
import { getStops, setStops } from '../../store/FilterSlice';

import rotation from './Rotation.module.scss';

interface StopsInterface {
  name: string;
  id: number;
}

export const Rotation: React.FC = () => {
  const stops: StopsInterface[] = [
    { name: 'no stop', id: 0 },
    { name: 'one stop', id: 1 },
    { name: 'two stops', id: 2 },
    { name: 'three stops', id: 3 },
  ];
  const [check, setCheck] = useState(false);
  const [stopsData, setStopsData] = useState<number[]>([]);

  useEffect(() => {
    return stopsData.length === stops.length ? setCheck(true) : setCheck(false);
  }, [stops.length, stopsData]);
  const dispatch = useAppDispatch();

  function getStopsCheck({ id, isCheck }: { id: number; isCheck: boolean | ((prevState: boolean) => boolean) }) {
    setStopsData(isCheck ? (prev) => [...prev, id] : (prev) => prev.filter((item) => item !== id));
    dispatch(setStops(id));
    dispatch(getStops());
  }
  const handleCheck = (event: boolean | ((prevState: boolean) => boolean)) => {
    if (!event) {
      // dispatch(removeAllStops());
      setStopsData([]);
    }
    setCheck(event);
  };
  return (
    <div className={rotation.wrapper}>
      <h4 className={rotation.title}>Stops</h4>
      <label className={rotation.label}>
        <input
          className={rotation.input}
          type="checkbox"
          onChange={(event) => {
            handleCheck(event.target.checked);
          }}
          checked={check}
        />
        All stops
      </label>
      {stops.map((item) => (
        <div key={item.id} className={rotation.label}>
          <CheckBox
            id={item.id}
            name={item.name}
            parentCheck={check}
            getStopsCheck={getStopsCheck}
            childData={stopsData.length}
          />
        </div>
      ))}
    </div>
  );
};
