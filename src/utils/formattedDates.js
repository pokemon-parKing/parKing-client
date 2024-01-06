import { DateTime } from 'luxon';

export const formattedDays = () => {
  return [...Array(7)].map((_, index) =>
    DateTime.local()
      .startOf('day')
      .plus({ days: index })
      .toFormat('MM-dd-yy'))
}