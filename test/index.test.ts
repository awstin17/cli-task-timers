import { expect, test } from '@oclif/test'
const taskGather = require('../src/prompter')

import cmd = require('../src')


describe('TaskGatherFunction', () => {

  test.it('returns an array of tasks!', () => {
    expect(taskGather().then((res: any) => { return res })).to.be.an('array')
  })
})

// describe('TaskTimer', () => {
//   test
//     .stdout()
//     .do(() => cmd.run([]))
//     .it('runs hello', ctx => {
//       expect(ctx.stdout).to.contain('hello world')
//     })

//   test
//     .stdout()
//     .do(() => cmd.run(['--name', 'jeff']))
//     .it('runs hello --name jeff', ctx => {
//       expect(ctx.stdout).to.contain('hello jeff')
//     })
// })
