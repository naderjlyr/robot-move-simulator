import { isPositionInsideTable } from "./table";

export type Direction = "North" | "East" | "South" | "West";

export interface Robot {
  x: number;
  y: number;
  direction: Direction;
}

const moveFunctions: Record<Direction, (robot: Robot) => Robot> = {
  North: (robot: Robot) => ({ ...robot, y: robot.y - 1 }),
  East: (robot: Robot) => ({ ...robot, x: robot.x + 1 }),
  South: (robot: Robot) => ({ ...robot, y: robot.y + 1 }),
  West: (robot: Robot) => ({ ...robot, x: robot.x - 1 }),
};

export const createRobot = (
  x: number,
  y: number,
  direction: Direction = "North"
): Robot => {
  return { x, y, direction };
};

export const moveRobotForward = (
  robot: Robot,
  tableWidth: number,
  tableHeight: number
): Robot => {
  const movedRobot = moveFunctions[robot.direction](robot);
  return isPositionInsideTable(
    movedRobot.x,
    movedRobot.y,
    tableWidth,
    tableHeight
  )
    ? movedRobot
    : robot;
};

export const moveRobotBackward = (
  robot: Robot,
  tableWidth: number,
  tableHeight: number
): Robot => {
  const oppositeDirection: Record<Direction, Direction> = {
    North: "South",
    East: "West",
    South: "North",
    West: "East",
  };
  const movedRobot = moveFunctions[oppositeDirection[robot.direction]](robot);
  return isPositionInsideTable(
    movedRobot.x,
    movedRobot.y,
    tableWidth,
    tableHeight
  )
    ? movedRobot
    : robot;
};

export const rotateRobotClockwise = (robot: Robot): Robot => {
  const directionOrder: Direction[] = ["North", "East", "South", "West"];
  const currentDirectionIndex = directionOrder.indexOf(robot.direction);
  const newDirectionIndex = (currentDirectionIndex + 1) % directionOrder.length;
  return { ...robot, direction: directionOrder[newDirectionIndex] };
};

export const rotateRobotCounterClockwise = (robot: Robot): Robot => {
  const directionOrder: Direction[] = ["North", "East", "South", "West"];
  const currentDirectionIndex = directionOrder.indexOf(robot.direction);
  const newDirectionIndex =
    (currentDirectionIndex + directionOrder.length - 1) % directionOrder.length;
  return { ...robot, direction: directionOrder[newDirectionIndex] };
};
