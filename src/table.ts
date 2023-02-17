export const isPositionInsideTable = (
  x: number,
  y: number,
  tableWidth: number,
  tableHeight: number
): boolean => {
  return x >= 0 && x < tableWidth && y >= 0 && y < tableHeight;
};
