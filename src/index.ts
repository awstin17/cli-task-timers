import { Command } from "@oclif/command";
const alerts = require('./notifications');
const gatherTasks = require('./prompter');
const startTimer = require('./timer');

class TaskTimer extends Command {

  async startFirstTask(task: any, time: number) {
    alerts.displayFirstMessage(task, time)
    await startTimer(time * 60000);
  }

  async startRestOfTasks(tasks: Array<any>) {
    for (let j = 1; j < tasks.length; j++) {
      let { task, time } = tasks[j];
      alerts.displayMiddleMessage(task, time);
      await startTimer(time * 60000);
    }
    alerts.displayLastMessage();
  }

  async run() { //Two step tool
    let tasks = await gatherTasks(); // 1) Gather tasks from user and time they want to spend on them
    await this.startFirstTask(tasks[0].task, tasks[0].time)
    await this.startRestOfTasks(tasks)
  }
}

export = TaskTimer;
