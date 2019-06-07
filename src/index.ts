import { Command } from "@oclif/command";
import cli from "cli-ux";
const alerts = require('./notifications');
let { notify, generateFirstMessage, generateMiddleMessage, generateLastMessage } = alerts

class TaskTimer extends Command {

  async gatherTasks() {
    let taskList: Array<any> = [];

    for (let i = 0; true; i++) {
      taskList[i] = {}
      taskList[i].task = await cli.prompt("Task to complete");
      taskList[i].time = await cli.prompt("Time you will allot to this task");

      if ((await cli.confirm("Add another task? (y/n)")) == false) {
        break;
      }
    }

    return taskList;
  }

  async startTimers(tasks: any) {

    function setTimer(time: number) {
      return new Promise((resolve) => setTimeout(resolve, time))
    }

    alerts.notify(alerts.generateFirstMessage(tasks[0].task, tasks[0].time));

    for (let j = 0; j < tasks.length; j++) {
      let { task, time } = tasks[j]; // Deconstructs current task object
      alerts.notify(alerts.generateMiddleMessage(task, time)); // Display notification to move to next task
      await setTimer(time) // Set timer for current task
    }

    alerts.notify(alerts.generateLastMessage())
  }

  async run() { //Two step tool
    let tasks = await this.gatherTasks(); // 1) Gather tasks from user and time they want to spend on them
    await this.startTimers(tasks); // 2) Start timer loop and get to work!

  }
}

export = TaskTimer;
