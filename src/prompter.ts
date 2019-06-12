import cli from 'cli-ux'

async function gatherTasks() {
  let taskList: Array<any> = []
  let i = 0
  async function getTask(index: number) {
    taskList[index] = {}
    taskList[index].task = await cli.prompt('Task to complete')
    taskList[index].time = await cli.prompt(`How long will you "${taskList[index].task}" (in minutes)`)
    // The below tests if the time they have put in is actually a number or not. If not, reprompts.
    // while (/[^0-9]/.test(taskList[index].time)) {
    //   taskList[index].time = await cli.prompt(`Time (in minutes) must be a number. How long will you "${taskList[i].task}"`)
    // }   
  }
  await getTask(i)
  i++
  while(await cli.confirm('Add another task? (y/n)')) {
    await getTask(i)
    i++
  }
  return taskList
}

module.exports = gatherTasks
