export class ChatMessage {
    #sender;
    #content;
    #isRead;

    constructor(sender = '', content = '', isRead = false) {
        this.#sender = sender;
        this.#content = content;
        this.#isRead = isRead;
    }

    get sender() {
        return this.#sender;
    }
    set sender(value) {
        this.#sender = value;
    }

    get content() {
        return this.#content;
    }
    set content(value) {
        this.#content = value;
    }

    get isRead() {
        return this.#isRead;
    }
    set isRead(value) {
        this.#isRead = value;
    }

    #markAsRead() {
        this.#isRead = true;
    }

    markAsReadPublic() {
        this.#markAsRead();
    }

    show() {
        console.log(`From: ${this.#sender}, Message: "${this.#content}", Read: ${this.#isRead}`);
    }

    delete() {
        this.#sender = null;
        this.#content = null;
        this.#isRead = null;
    }

    copy() {
        return this;
    }

    static clone(msg) {
        return new ChatMessage(msg.sender, msg.content, msg.isRead);
    }
}
