const getSlots = async (date: string) =>
  await fetch(
    `https://draliatest.azurewebsites.net/api/availability/GetWeeklySlots/${date}`,
  ).then(res => res.json());
export default getSlots;
