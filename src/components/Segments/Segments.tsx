import React from 'react';

import { SegmentsProps } from '../interfaces/SegmentsProps';

import segment from './Segments.module.scss';

interface SegmentsItemProps {
  segments: SegmentsProps[];
}

const Segments: React.FC<SegmentsItemProps> = ({ segments }) => {
  const endDur = new Date(segments[0].date);
  endDur.setHours(endDur.getHours() + Math.floor(segments[1].duration / 60));
  endDur.setMinutes(endDur.getMinutes() + Math.ceil(((segments[1].duration % 60) * 60) / 100));

  const endOrigin = new Date(segments[0].date);
  endOrigin.setHours(endOrigin.getHours() + Math.floor(segments[0].duration / 60));
  endOrigin.setMinutes(endOrigin.getMinutes() + Math.ceil(((segments[0].duration % 60) * 60) / 100));

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
                  {new Date(item.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} -
                  {endOrigin.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
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
