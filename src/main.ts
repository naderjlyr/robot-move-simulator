import readline from "readline";
import { runSimulation, Command } from "./simulator";
import { messages } from "./messages";
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
  console.log(messages.welcomeMessage);
  console.log(messages.tableDimensionsPrompt);
  const tableDimensionsInput = await promptUser("Table dimensions: ");
  const [tableWidth, tableHeight] = tableDimensionsInput.split(",").map(Number);

  if (isNaN(tableWidth) || isNaN(tableHeight)) {
    console.error(messages.invalidTableDimensions);
    return getInput();
  }

  console.log(
    messages.tableDimensionsSet
      .replace("{tableWidth}", tableWidth.toString())
      .replace("{tableHeight}", tableHeight.toString())
  );
  console.log(messages.robotPositionPrompt);
  const robotPositionInput = await promptUser("Initial position: ");
  const [robotX, robotY] = robotPositionInput.split(",").map(Number);

  if (isNaN(robotX) || isNaN(robotY)) {
    console.error(messages.invalidRobotPosition);
    return getInput();
  }

  console.log(
    messages.robotPlaced
      .replace("{robotX}", robotX.toString())
      .replace("{robotY}", robotY.toString())
  );
  console.log(messages.commandsPrompt);
  console.log(messages.validCommands);
  const commandsInput = await promptUser("Commands: ");
  const commands = commandsInput
    .split(",")
    .map(Number)
    .filter(
      (command) => !isNaN(command) && command >= 0 && command <= 4
    ) as Command[];

  if (commands.length !== commandsInput.split(",").length) {
    console.error(messages.invalidCommand);
    return getInput();
  }

  console.log(
    messages.commandsGiven.replace("{numCommands}", commands.length.toString())
  );
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
