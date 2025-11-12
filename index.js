import { PrivateMessage } from './PrivateMessage.js';

const messages = [
    new PrivateMessage('Alice', 'Привет, как дела?', false, true),
    new PrivateMessage('Bob', 'Не забудь про встречу в 15:00', true, false)
];

messages.forEach(msg => msg.show());