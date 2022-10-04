import { SegmentsProps } from './SegmentsProps';

export interface TicketsDataProps {
  carrier: string;
  price: number;
  segments: SegmentsProps[];
  stop: boolean;
}
