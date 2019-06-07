import cli from "cli-ux";

async function gatherTasks() {
    let taskList: Array<any> = [];

    for (let i = 0; true; i++) {
        taskList[i] = {}
        taskList[i].task = await cli.prompt("Task to complete");
        taskList[i].time = await cli.prompt("Time (in minutes) you will allot to this task") * 1000 * 60;

        if ((await cli.confirm("Add another task? (y/n)")) == false) {
            break;
        }
    }

    return taskList;
}

module.exports = gatherTasks;