import { isPositionInsideTable } from "./table";
import {
  createRobot,
  moveRobotForward,
  moveRobotBackward,
  rotateRobotClockwise,
  rotateRobotCounterClockwise,
  Robot,
} from "./robot";

export type Command = 0 | 1 | 2 | 3 | 4;

const commandHandlers: Record<
  Command,
  (robot: Robot, tableWidth: number, tableHeight: number) => Robot
> = {
  0: (robot: Robot, _tableWidth: number, _tableHeight: number) => robot,
  1: moveRobotForward,
  2: moveRobotBackward,
  3: rotateRobotClockwise,
  4: rotateRobotCounterClockwise,
};

export const runSimulation = (
  tableWidth: number,
  tableHeight: number,
  robotX: number,
  robotY: number,
  commands: Command[]
): [number, number] => {
  let robot = createRobot(robotX, robotY, "North");

  for (const command of commands) {
    const commandHandler = commandHandlers[command];
    if (!commandHandler) {
      throw new Error(`Unknown command: ${command}`);
    }
    robot = commandHandler(robot, tableWidth, tableHeight);
  }

  if (isPositionInsideTable(robot.x, robot.y, tableWidth, tableHeight)) {
    return [robot.x, robot.y];
  } else {
    return [-1, -1];
  }
};
