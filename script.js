const socket=io('http://localhost:3000')
const MessageForm=document.getElementById('send-container')
const MessageContainer=document.getElementById('message-container')
const MessageInput=document.getElementById('message-input')
const name=prompt("What is your name");
appendMessage("you joined");
socket.emit('new-user',name);

socket.on('chat-message',data=>{
    const name12 = ` ${data.name}:${data.message}.`;
    appendMessage(name12);
})
socket.on('user-connected',name=>{
    const name13 = ` ${name} connected`;
    appendMessage(name13);
})
socket.on('user-disconnected',name=>{
    const name14 = ` ${name} disconnected`;
    appendMessage(name14);
})
MessageForm.addEventListener('submit',e=>{
    e.preventDefault();
    const message=MessageInput.value;
    const name14 = ` You:${message}.`;
    appendMessage(name14);
    socket.emit('Send-chat-message',message);
    MessageInput.value='';
})
function appendMessage(message)
{
    const messageElement=document.createElement('div');
    messageElement.innerText=message;
    MessageContainer.append(messageElement);

}