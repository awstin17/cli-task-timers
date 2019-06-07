import { Command } from "@oclif/command";
import cli from "cli-ux";
const alerts = require('./notifications');

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

  startTimer(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time))
  }

  async startFirstTask(task: any, time: number) {
    alerts.displayFirstMessage(task, time)
    await this.startTimer(time);
  }

  async startRestOfTasks(tasks: Array<any>) {

    for (let j = 1; j < tasks.length; j++) {
      let { task, time } = tasks[j]; // Deconstructs current task object
      alerts.displayMiddleMessage(task, time); // Display notification to move to next task
      await this.startTimer(time); // Set timer for current task
    }

    alerts.displayLastMessage();

  }

  async run() { //Two step tool
    let tasks = await this.gatherTasks(); // 1) Gather tasks from user and time they want to spend on them
    await this.startFirstTask(tasks[0].task, tasks[0].time)
    await this.startRestOfTasks(tasks)
    this.exit();
  }
}

export = TaskTimer;
