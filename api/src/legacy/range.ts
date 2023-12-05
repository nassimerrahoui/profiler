/**
 * Exercice : code to refactor with Copilot
 */

export interface Range {
  startDate: Date;
  endDate: Date;
}

export const computeDateRange = (value: string): Range | null => {
  const endDate = new Date();
  const startDate = new Date();

  switch (value) {
    case '2':
      startDate.setMonth(startDate.getMonth() - 1);
      break;
    case '3':
      startDate.setMonth(startDate.getMonth() - 6);
      break;
    case '4':
      startDate.setFullYear(startDate.getFullYear() - 1);
      break;
    case '5':
      startDate.setFullYear(startDate.getFullYear() - 3);
      break;
    default:
      return null;
  }

  return {
    startDate,
    endDate,
  };
};
