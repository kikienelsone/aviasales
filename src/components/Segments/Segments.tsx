import React from 'react';

import { SegmentsProps } from '../interfaces/SegmentsProps';

import segment from './Segments.module.scss';
import { date } from './ConvertDate';

interface SegmentsItemProps {
  segments: SegmentsProps[];
}

const Segments: React.FC<SegmentsItemProps> = ({ segments }) => {
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
                <p>{date(item.date, item.duration)}</p>
              </li>
              <li className={segment.item}>
                <p className={segment.duration}>duration</p>
                {Math.floor(item.duration / 60)}h {Math.ceil(((item.duration % 60) * 60) / 100)}m
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
