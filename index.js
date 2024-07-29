import inquirer from "inquirer";
let todo_list = [];
let x;
let y;
console.log("Welcome to MY TODO LIST");
// to add in the list
function my_todo_list_1() {
    todo_list.push(x);
    console.log(todo_list);
}
//  to get user input
async function todo_list_response() {
    let todo_list_1 = await inquirer.prompt([
        {
            type: "input",
            name: "input_todolist",
            message: "Add Items/Tasks"
        }
    ])
        .then((answer) => {
        x = answer.input_todolist;
    });
    my_todo_list_1();
    confirmation_1();
}
// convert array into list form
function array_list() {
    console.log(`Your TODO list is as follows:`);
    let text = "";
    for (let i = 0; i < todo_list.length; i++) {
        text += todo_list[i];
        console.log(`${i + 1} ${todo_list[i]}`);
    }
}
// to delete an item
async function delete_1() {
    array_list();
    let del_1 = await inquirer.prompt([
        {
            type: 'number',
            name: "input_del",
            message: "Please select item/tasks number to delete from above list",
        }
    ]);
    todo_list.splice((del_1.input_del - 1), 1);
    array_list();
}
//  to add more items/tasks
async function confirmation_1() {
    let confirm = await inquirer.prompt([
        {
            type: "list",
            name: "input_confirmation",
            message: "Please select an action",
            choices: ["Add an item/task", "Delete an item/task", "EXIT"]
        }
    ])
        .then((answer) => {
        y = answer.input_confirmation;
    });
    if (y == "Add an item/task") {
        todo_list_response();
    }
    else if (y == "Delete an item/task") {
        delete_1();
    }
    else {
        array_list();
    }
}
todo_list_response();
