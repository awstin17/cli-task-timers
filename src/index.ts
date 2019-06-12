import { Command, flags } from '@oclif/command'
const packageVersion = require('../package.json').version
const alerts = require('./notifications') // imports modified node-notifier object
const gatherTasks = require('./prompter') // imports function that captures user input
const startTimer = require('./timer') // imports function that starts a timer

class TaskTimer extends Command {
  static flags = {
    version: flags.boolean({ char: 'v' }),
  }

  async timeTasks(tasks: Array<any>) {
    // First Task
    alerts.displayFirstMessage(tasks[0].task, tasks[0].time)
    await startTimer(tasks[0].task, tasks[0].time * 60000)

    // Middle tasks to last task
    for (let j = 1; j < tasks.length; j++) {
      alerts.displayMiddleMessage(tasks[j].task, tasks[j].time)
      await startTimer(tasks[j].task, tasks[j].time * 60000)
    }

    //Ending Message
    alerts.displayLastMessage()
  }

  async run() {
    const { flags } = this.parse(TaskTimer)
    // If user puts in version flag
    if (flags.version) {
      console.log(packageVersion)
    }
    // If not, run main timer function
    else {
      let tasks = await gatherTasks() // 1) Gather tasks from user and time they want to spend on them
      await this.timeTasks(tasks) // 2) Go through task list, display message, then start timer
    }

  }
}

export = TaskTimer
