import cli from "cli-ux";

async function gatherTasks() {
    let taskList: Array<any> = [];

    for (let i = 0; true; i++) {
        taskList[i] = {}
        taskList[i].task = await cli.prompt("Task to complete");
        taskList[i].time = await cli.prompt(`How long will you "${taskList[i].task}" (in minutes)`);

        // The below tests if the time they have put in is actually a number or not. If not, reprompts.
        while (/[^0-9]/.test(taskList[i].time)) {
            taskList[i].time = await cli.prompt(`Time (in minutes) must be a number. How long will you "${taskList[i].task}"`);
        }

        if ((await cli.confirm("Add another task? (y/n)")) === false) { break; }
    }

    return taskList;
}

module.exports = gatherTasks;