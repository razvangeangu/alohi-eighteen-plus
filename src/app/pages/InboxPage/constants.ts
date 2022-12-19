import { Fax } from 'app/components/Table/types';

const generateRow = () =>
  ({
    status: 'success',
    from: `+447${Math.floor(Math.random() * 1000000000)}`,
    to: `+12${Math.floor(Math.random() * 1000000000)}`,
    start_time: '2020-03-27 11:29:21',
    pages: Math.floor(Math.random() * 30),
    cost: Math.random() * 12,
  } as Fax);

export const mockData: Partial<Fax>[] = Array(28)
  .fill(0)
  .map(() => generateRow());
