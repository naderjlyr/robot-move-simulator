import readline from "readline";
import { runSimulation, Command } from "./simulator";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function promptUser(question: string): Promise<string> {
  return new Promise<string>((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}

export async function getInput(): Promise<
  [number, number, number, number, Command[]]
> {
  const tableDimensionsInput = await promptUser(
    "Enter table width and height: "
  );
  const [tableWidth, tableHeight] = tableDimensionsInput.split(" ").map(Number);

  if (isNaN(tableWidth) || isNaN(tableHeight)) {
    console.error("Invalid table dimensions - please enter two numbers.");
    return getInput();
  }

  const robotPositionInput = await promptUser("Enter robot position: ");
  const [robotX, robotY] = robotPositionInput.split(" ").map(Number);

  if (isNaN(robotX) || isNaN(robotY)) {
    console.error("Invalid robot position - please enter two numbers.");
    return getInput();
  }

  const commandsInput = await promptUser("Enter commands: ");
  const commands = commandsInput
    .split(" ")
    .map(Number)
    .filter(
      (command) => !isNaN(command) && command >= 0 && command <= 4
    ) as Command[];

  if (commands.length !== commandsInput.split(" ").length) {
    console.error("Invalid command - please enter a number between 0 and 4.");
    return getInput();
  }

  return [tableWidth, tableHeight, robotX, robotY, commands];
}

export async function main() {
  try {
    const [tableWidth, tableHeight, robotX, robotY, commands] =
      await getInput();

    const finalPosition = runSimulation(
      tableWidth,
      tableHeight,
      robotX,
      robotY,
      commands
    );

    console.log(`Final position: ${finalPosition}`);
  } catch (error) {
    console.error(`Simulation failed: ${(error as Error).message}`);
  } finally {
    rl.close();
  }
}

main();
