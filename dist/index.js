import inquirer from "inquirer";
import { pool } from "./db/connection.js";
await pool.connect();
function startApp() {
    inquirer
        .prompt([
        {
            type: "list",
            name: "Menu",
            message: "What would you like to do?",
            choices: [
                "view all departments",
                "view all roles",
                "view all employees",
                "add a department",
                "add a role",
                "add an employee",
                "update an employee role",
                "quit",
            ],
        },
    ])
        .then(async (answers) => {
        console.log(answers.Menu);
        if (answers.Menu == "view all departments") {
            await getDepartments();
            startApp();
        }
        if (answers.Menu == "view all roles") {
            await getRoles();
            startApp();
        }
        if (answers.Menu == "view all employees") {
            await getEmployees();
            startApp();
        }
        if (answers.Menu == "add a department") {
            await addDepartment();
        }
        if (answers.Menu == "add a role") {
            console.log("Click to add new role, run function to continue");
        }
        if (answers.Menu == "add an employee") {
            console.log("Click to add new employee, run function to continue");
        }
        if (answers.Menu == "update an employee role") {
            console.log("Click to update an employee's role, run function to continue");
        }
        if (answers.Menu == "quit") {
            process.exit();
        }
    });
}
const getDepartments = async () => {
    const results = await pool.query("SELECT id, name FROM department;");
    let data = results.rows;
    console.log("Data: ", data);
    console.table(data);
};
const getRoles = async () => {
    const results = await pool.query("SELECT * FROM role;");
    let data = results.rows;
    console.log("Data: ", data);
    console.table(data);
};
const getEmployees = async () => {
    const results = await pool.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, CONCAT_WS(' ', manager.first_name, manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN employee manager ON employee.manager_id = manager.id");
    let data = results.rows;
    console.log("Data: ", data);
    console.table(data);
};
const addDepartment = async () => {
    inquirer
        .prompt([
        {
            type: "input",
            name: "department",
            message: "What department would you like to add?",
        },
    ])
        .then(async (answers) => {
        await pool.query("INSERT INTO department (name) VALUES ($1);", [
            answers.department,
        ]);
    })
        .then(() => startApp());
};
startApp();
