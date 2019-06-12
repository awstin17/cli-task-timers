import { cli } from "cli-ux";

// This function handles actual timer functionality with the spinner that pops up in command line
function startTimer(task: string, time: number) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
    cli.action.start(`Timer Started for "${task}"`)
  })
    .then(() => cli.action.stop(`Done With "${task}"`))
}

module.exports = startTimer
