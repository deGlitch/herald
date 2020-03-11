import { createPanelUpdateRabbitTopicName, createRedisPanelId } from '../helper/index';
import { expect } from 'chai';

describe('createPanelUpdateRabbitTopicName function', () => {
    it('should return a valid id', () => {
        expect(createPanelUpdateRabbitTopicName('a','b')).to.be.equal('a-b')
    })
})

describe('createRedisPanelId function', () => {
    it('should return a valid id', () => {
        expect(createRedisPanelId('a','b')).to.be.equal('a-b')
    })
})