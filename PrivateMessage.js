import { ChatMessage } from './ChatMessage.js';

export class PrivateMessage extends ChatMessage {
    #isEncrypted;

    constructor(sender, content, isRead, isEncrypted = true) {
        super(sender, content, isRead);
        this.#isEncrypted = isEncrypted;
    }

    get isEncrypted() {
        return this.#isEncrypted;
    }
    set isEncrypted(value) {
        this.#isEncrypted = value;
    }

    show() {
        console.log(`From: ${this.sender}, Message: "${this.content}", Read: ${this.isRead}, Encrypted: ${this.#isEncrypted}`);
    }

    delete() {
        super.delete();
        this.#isEncrypted = null;
    }

    copy() {
        return this;
    }

    static clone(msg) {
        return new PrivateMessage(msg.sender, msg.content, msg.isRead, msg.isEncrypted);
    }
}