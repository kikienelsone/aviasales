export const date = (startTime: string, duration: number) => {
  const startDate = new Date(startTime);
  const startDateObj = {
    hours: startDate.getUTCHours(),
    minutes: startDate.getUTCMinutes(),
  };
  const durationObj = {
    hours: Math.floor(duration / 60),
    minutes: Math.ceil(((duration % 60) * 60) / 100),
  };

  const endDate = {
    arriveMinutes: startDateObj.minutes + durationObj.minutes,
    arriveHours: startDateObj.hours + durationObj.hours,
  };

  const convertHours = endDate.arriveHours > 24 ? endDate.arriveHours - 24 : endDate.arriveHours;
  const convertMinutes = endDate.arriveMinutes > 60 ? endDate.arriveMinutes - 60 : endDate.arriveMinutes;
  return `${startDateObj.hours}:${startDateObj.minutes} - ${convertHours}:${convertMinutes}`;
};
