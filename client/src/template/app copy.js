class Chatbox {
    constructor() {
        this.state = false;
        this.messages = [];
    }

    init(args) {
        this.args = args;
        const { openButton, chatBox, sendButton } = this.args;

        if (openButton) {
            openButton.addEventListener('click', () => this.toggleState(chatBox));
        } else {
            console.error('Open button not found');
        }

        if (sendButton) {
            sendButton.addEventListener('click', () => this.onSendButton(chatBox));
        } else {
            console.error('Send button not found');
        }

        const node = chatBox ? chatBox.querySelector('input') : null;
        if (node) {
            node.addEventListener("keyup", ({ key }) => {
                if (key === "Enter") {
                    this.onSendButton(chatBox);
                }
            });
        } else {
            console.error('Input field not found');
        }
    }

    toggleState(chatBox) {
        if (!chatBox) {
            console.error('Chatbox element not found');
            return;
        }
        this.state = !this.state;

        // show or hide the box
        if (this.state) {
            chatBox.classList.add('chatbox--active');
        } else {
            chatBox.classList.remove('chatbox--active');
        }
    }

    onSendButton(chatBox) {
        if (!chatBox) {
            console.error('Chatbox element not found');
            return;
        }

        const textField = chatBox.querySelector('input');
        let text1 = textField.value;
        if (text1 === "") {
            return;
        }

        let msg1 = { name: "User", message: text1 };
        this.messages.push(msg1);

        fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            body: JSON.stringify({ message: text1 }),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(r => r.json())
            .then(r => {
                let msg2 = { name: "itachi", message: r.answer };
                this.messages.push(msg2);
                this.updateChatText(chatBox);
                textField.value = '';
            }).catch((error) => {
                console.error('Error:', error);
                this.updateChatText(chatBox);
                textField.value = '';
            });
    }

    updateChatText(chatBox) {
        if (!chatBox) {
            console.error('Chatbox element not found');
            return;
        }

        let html = '';
        this.messages.forEach(function (item) {
            if (item.name === "itachi") {
                html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>';
            } else {
                html += '<div class="messages__item messages__item--operator">' + item.message + '</div>';
            }
        });

        const chatmessage = chatBox.querySelector('.chatbox__messages div');
        if (chatmessage) {
            chatmessage.innerHTML = html;
        } else {
            console.error('Chat messages container not found');
        }
    }
}

// CommonJS export syntax
module.exports = Chatbox;

