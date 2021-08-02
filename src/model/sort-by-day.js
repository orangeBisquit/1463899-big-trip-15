export const sortByDate = (events) => {
  const eventsByDay = events.slice().sort((a, b) => a.dateFrom - b.dateFrom);

  return eventsByDay;
};
