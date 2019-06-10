import { expect } from '@oclif/test'
const alerts = require('../src/notifications');

describe('notifications export object', () => {
    it('has all the functions it needs to have', () => {
        expect(alerts).to.respondTo('displayFirstMessage');
        expect(alerts).to.respondTo('displayMiddleMessage');
        expect(alerts).to.respondTo('displayLastMessage');
        expect(alerts).to.respondTo('notify');
    })
})