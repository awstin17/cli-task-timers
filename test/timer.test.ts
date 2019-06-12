import { expect } from '@oclif/test';
const timerFunction = require('../src/timer');

describe('timer function', () => {
    it('returns a promise', () => { // timer function needs to be asynchronous for tool to function properly
        expect(timerFunction('test')).to.be.a('promise');
    })
})