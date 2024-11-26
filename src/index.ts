import inquirer from "inquirer";
function startApp (){
inquirer
	.prompt([
	{
        type: "list",
        name: "Menu",
        message: "What would you like to do?",
        choices:["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]

    }	
	])
	.then((answers) => {
		console.log(answers.Menu)
        if (answers.Menu == "view all departments") {
            console.log("View all deparntments selected, run function to continue")
        }

        if (answers.Menu == "view all roles") {
					console.log(
						"View all roles selected, run function to continue");}

        if (answers.Menu == "view all employees") {
					console.log("View all employees selected, run function to continue");

				}
        if (answers.Menu == "add a department") {
					console.log("Click to add new derpartment, run function to continue");

				} 
        if (answers.Menu == "add a role") {
					console.log("Click to add new role, run function to continue");

				} 
        if (answers.Menu == "add an employee") {
					console.log("Click to add new employee, run function to continue");

				} 
        if (answers.Menu == "update an employee role") {
					console.log(
						"Click to update an employee's role, run function to continue"
					);
				}                             
	});
}
startApp()