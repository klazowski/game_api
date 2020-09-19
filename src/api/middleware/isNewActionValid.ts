/* Simple validation. Just checking if all required fields are present. */
const isNewActionValid = (action: any): boolean => {
  if (action === undefined || action === null) return false;
  if (action.userId === undefined || action.userId === null) return false;
  if (action.gameId === undefined || action.gameId === null) return false;
  if (action.action === undefined || action.action === null) return false;

  return true;
};

export { isNewActionValid };
