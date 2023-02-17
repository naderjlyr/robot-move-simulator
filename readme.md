# Robot Simulator

This is a command-line application written in TypeScript that simulates the movement of a robot on a table. The robot can be commanded to move and rotate using a set of input commands, and the simulator prints the final position of the robot.

## Installation

To run the robot simulator, you'll need to have Node.js and npm installed on your machine. Here are the steps to install and run the simulator:

1. Clone the repository to your local machine.
2. Open a terminal and navigate to the root directory of the project.
3. Run the command `npm install` to install the required dependencies.
4. Run the command `npm start` to start the simulator.

## Usage

To use the robot simulator, follow the instructions on the screen to provide the required input values. The simulator will take the following inputs:

1. **Table Dimensions:** The width and height of the table, separated by a space.
2. **Robot Position:** The initial position of the robot on the table, as the x and y coordinates separated by a space, and the direction it is facing.
3. **Commands:** A sequence of commands that the robot should execute, separated by a space.

Once the input values are provided, the simulator will execute the commands and print the final position of the robot on the table.

### Input Examples

Here are some examples of input values that you could use with the robot simulator:

#### Example 1

Table dimensions: `5 5`

Robot position: `1 2 East`

Commands: `1 2 3 0 1 1`

Expected output: `3 3`

#### Example 2

Table dimensions: `4 4`

Robot position: `3 3 West`

Commands: `1 1 1 4 2 4 4 4 0 0`

Expected output: `-1 -1`

#### Example 3

Table dimensions: `6 6`

Robot position: `0 0 North`

Commands: `3 3 1 1 3 3 1 1 3 3 1 1`

Expected output: `2 2`

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvement, please open an issue or a pull request on GitHub.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
