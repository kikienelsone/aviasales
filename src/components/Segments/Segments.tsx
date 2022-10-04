import intlFormat from 'date-fns/intlFormat';
import React from 'react';
import { minutesToHours } from 'date-fns';

import { SegmentsProps } from '../interfaces/SegmentsProps';

import segment from './Segments.module.scss';

interface SegmentsItemProps {
  segments: SegmentsProps[];
}

const Segments: React.FC<SegmentsItemProps> = ({ segments }) => {
  const hours = (date: number) => {
    return minutesToHours(date);
  };

  const date = (day: string) => {
    const res = intlFormat(new Date(day), {
      hour: 'numeric',
      minute: 'numeric',
    });
    return res;
  };
  return (
    <div className={segment.wrapper}>
      <ul className={segment.list}>
        {segments.map((item) => {
          return (
            <>
              <li className={segment.item} key={Math.random() * 100}>
                <p className={segment.destination}>
                  {item.origin}-{item.destination}
                </p>
                <p>
                  {' '}
                  {date(item.date)} - {date(item.date) + hours(item.duration)}
                </p>
              </li>
              <li className={segment.item}>
                <p className={segment.duration}>duration</p>
                {hours(item.duration)} h.
              </li>
              <li className={segment.item}>
                <p className={segment.stops}>{item.stops.length ? item.stops.length : 'no'} stops</p>
                {item.stops.map((stop) => {
                  return <span key={Math.random() * 100}>{stop} </span>;
                })}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};
export default Segments;
