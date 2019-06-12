import cli from 'cli-ux'

async function gatherTasks() {
  let taskList: Array<any> = []
  let i = 0
  async function getTask(index: number) {
    taskList[index] = {}
    taskList[index].task = await cli.prompt('Task to complete')
    taskList[index].time = await cli.prompt(`How long will you "${taskList[index].task}" (in minutes)`)
    // The below tests if the time they have put in is actually a number or not. If not, reprompts.
    while (/[^0-9]/.test(taskList[index].time)) {
      taskList[index].time = await cli.prompt(`Time in minutes must be a whole number (no decimals!). How long will you "${taskList[i].task}"`)
    }   
  }

  while(taskList.length === 0 ? true : await cli.confirm('Add another task? (y/n)')) {
    await getTask(i)
    i++
  }
  // This console.log is here to give a space between prompts and the timers that come after
  console.log(' ')
  return taskList
}

module.exports = gatherTasks
