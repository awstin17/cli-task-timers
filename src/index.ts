import { Command } from "@oclif/command";
import cli from "cli-ux";
const notifier = require("node-notifier");

class TaskTimer extends Command {
  static description = "describe the command here";

  displayNotification(task: any, time: any) {
    notifier.notify(
      {
        title: "My awesome title",
        message: `Time to do ${task} Mr. User. You have ${time} seconds to do so`,
        sound: true, // Only Notification Center or Windows Toasters
        wait: false // Wait with callback, until user action is taken against notification
      },
      function(err: any, response: any) {
        // Response is response from notification
      }
    );
  }

  async gatherTasks() {
    let i = 0;
    let taskList: any = [];

    while (taskList) {
      taskList[i] = {};
      taskList[i].task = await cli.prompt("Task to complete");
      taskList[i].time = await cli.prompt("Time you will allot to this task");

      if ((await cli.confirm("Add another task? (y/n)")) == false) {
        break;
      }

      i++;
    }

    return taskList;
  }

  async startTimers(tasks: any) {
    for (let j = 0; j < tasks.length; j++) {
      await new Promise((resolve, reject) => {
        setTimeout(() => resolve(), tasks[j].time);
      });
      this.displayNotification(tasks[j].task, tasks[j].time);
    }
  }

  async run() {
    let tasks: any = await this.gatherTasks();
    this.startTimers(tasks);
  }
}

export = TaskTimer;
