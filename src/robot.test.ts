import {
  createRobot,
  moveRobotForward,
  moveRobotBackward,
  rotateRobotClockwise,
  rotateRobotCounterClockwise,
} from "./robot";
import { runSimulation } from "./simulator";

describe("Robot Simulator", () => {
  describe("Robot", () => {
    it("should create a robot with the correct position and direction", () => {
      const robot = createRobot(1, 2, "North");
      expect(robot.x).toBe(1);
      expect(robot.y).toBe(2);
      expect(robot.direction).toBe("North");
    });

    it("should move the robot forward correctly", () => {
      const robot = createRobot(1, 2, "North");
      const newRobot = moveRobotForward(robot, 5, 5);
      expect(newRobot.x).toBe(1);
      expect(newRobot.y).toBe(1);
      expect(newRobot.direction).toBe("North");
    });

    it("should move the robot backward correctly", () => {
      const robot = createRobot(1, 2, "North");
      const newRobot = moveRobotBackward(robot, 5, 5);
      expect(newRobot.x).toBe(1);
      expect(newRobot.y).toBe(3);
      expect(newRobot.direction).toBe("North");
    });

    it("should rotate the robot clockwise correctly", () => {
      const robot = createRobot(1, 2, "North");
      const newRobot = rotateRobotClockwise(robot);
      expect(newRobot.x).toBe(1);
      expect(newRobot.y).toBe(2);
      expect(newRobot.direction).toBe("East");
    });

    it("should rotate the robot counterclockwise correctly", () => {
      const robot = createRobot(1, 2, "North");
      const newRobot = rotateRobotCounterClockwise(robot);
      expect(newRobot.x).toBe(1);
      expect(newRobot.y).toBe(2);
      expect(newRobot.direction).toBe("West");
    });
  });

  describe("Simulator", () => {
    describe("runSimulation", () => {
      it("should run the simulation correctly", () => {
        const finalPosition = runSimulation(5, 5, 1, 2, [1, 2, 3, 0, 1, 1]);
        expect(finalPosition).toEqual([3, 2]);
      });
    });
  });
});
