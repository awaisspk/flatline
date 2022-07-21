import { format, parseISO } from 'date-fns';

export const formatDate = (date: string) => {
  return format(parseISO(date), 'dd-mm-yyyy');
};

export const formatReadTime = (time: string) => {
  const newTime = time.split('~').join(' ');
  return `${newTime} read`;
};
