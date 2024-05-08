import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        this.fuel -= 10;
        this.fuel = this.fuel;
    }
    fuelIncrease() {
        this.fuel = 25;
    }
}
class Opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        this.fuel -= 10;
        this.fuel = this.fuel;
    }
}
async function startGame() {
    let player1 = await inquirer.prompt({
        name: "player",
        type: "input",
        message: "Please enter your name:"
    });
    console.log(player1.player);
    let player2 = await inquirer.prompt({
        name: "select",
        type: "list",
        message: "Please select your opponent:",
        choices: ["Skeleton", "Assassin", "Zombie"]
    });
    let p1 = new Player(player1.player);
    let op = new Opponent(player2.select.toLowerCase());
    console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.green(op.name)}`);
    while (true) {
        let ask = await inquirer.prompt({
            name: "option",
            type: "list",
            message: "Please select an option:",
            choices: ["Attack", "Drink potion", "Run for your life.."]
        });
        if (ask.option === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${op.name} fuel is ${op.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.italic.red("You lose. Better luck next time."));
                    break;
                }
            }
            else {
                class Player {
                    constructor(name) {
                        this.fuel = 100;
                        this.name = name;
                    }
                    fuelDecrease() {
                        this.fuel -= 10;
                        this.fuel = Math.max(this.fuel, 0);
                    }
                    fuelIncrease() {
                        this.fuel = 100;
                    }
                }
                class Opponent {
                    constructor(name) {
                        this.fuel = 100;
                        this.name = name;
                    }
                    fuelDecrease() {
                        this.fuel -= 10;
                        this.fuel = Math.max(this.fuel, 0);
                    }
                }
                async function startGame() {
                    let player1 = await inquirer.prompt({
                        name: "player",
                        type: "input",
                        message: "Please enter your name:"
                    });
                    console.log(player1.player);
                    let player2 = await inquirer.prompt({
                        name: "select",
                        type: "list",
                        message: "Please select your opponent:",
                        choices: ["Skeleton", "Assassin", "Zombie"]
                    });
                    let p1 = new Player(player1.player);
                    let op = new Opponent(player2.select.toLowerCase());
                    console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.green(op.name)}`);
                    while (true) {
                        let ask = await inquirer.prompt({
                            name: "option",
                            type: "list",
                            message: "Please select an option:",
                            choices: ["Attack", "Drink potion", "Run for your life.."]
                        });
                        if (ask.option === "Attack") {
                            let num = Math.floor(Math.random() * 2);
                            if (num > 0) {
                                p1.fuelDecrease();
                                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                                console.log(chalk.bold.green(`${op.name} fuel is ${op.fuel}`));
                                if (p1.fuel <= 0) {
                                    console.log(chalk.bold.italic.red("You lose. Better luck next time."));
                                    break;
                                }
                            }
                            else {
                                op.fuelDecrease();
                                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                                console.log(chalk.bold.green(`${op.name} fuel is ${op.fuel}`));
                                if (op.fuel <= 0) {
                                    console.log(chalk.bold.italic.green("You win!"));
                                    break;
                                }
                            }
                        }
                        else if (ask.option === "Drink potion") {
                            p1.fuelIncrease();
                            console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                        }
                        else if (ask.option === "Run for your life..") {
                            console.log(chalk.bold.green.italic("You lose, better luck next time."));
                            break;
                        }
                    }
                }
            }
            if (num <= 0) {
                op.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${op.name} fuel is ${op.fuel}`));
                if (op.fuel <= 0) {
                    console.log(chalk.bold.italic.green("You win!"));
                    break;
                }
            }
        }
        else if (ask.option === "Drink potion") {
            p1.fuelIncrease();
            console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        }
        else if (ask.option === "Run for your life..") {
            console.log(chalk.bold.green.italic("You loose, better luck next time."));
            break;
        }
    }
}
startGame();
