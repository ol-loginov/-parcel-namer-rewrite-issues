import {Message} from './lib';

new Message().say('standalone')

global.Message = Message

