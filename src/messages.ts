export const messages = {
  welcomeMessage: "Welcome to the Robot Simulator.",
  tableDimensionsPrompt: "Enter the dimensions of the table (e.g. '5,5'):",
  invalidTableDimensions:
    "Invalid table dimensions - please enter two numbers separated by a comma.",
  tableDimensionsSet: "Table dimensions set to {tableWidth}x{tableHeight}.",
  robotPositionPrompt: "Enter the initial position of the robot (e.g. '1,2'):",
  invalidRobotPosition:
    "Invalid robot position - please enter two numbers separated by a comma.",
  robotPlaced: "Robot placed at ({robotX}, {robotY}).",
  commandsPrompt: "Enter the commands to move the robot (e.g. '1,2,3'):",
  validCommands:
    "Valid commands are 0 (no move), 1 (move forward), 2 (move backward), 3 (rotate clockwise), and 4 (rotate counterclockwise).",
  invalidCommand: "Invalid command - please enter a number between 0 and 4.",
  commandsGiven: "Received {numCommands} commands.",
};
