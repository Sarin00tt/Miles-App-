// Auth Logic
const authTrigger = document.getElementById('auth-trigger');
const authModal = document.getElementById('auth-modal');
authTrigger.onclick = () => authModal.style.display = 'flex';
document.getElementById('close-auth').onclick = () => authModal.style.display = 'none';

// File naming logic
document.getElementById('profile-pic').onchange = (e) => {
    document.getElementById('file-name').innerText = e.target.files[0].name;
};

// Chat Logic
const renderChat = () => {
    const chatOverlay = document.createElement('div');
    chatOverlay.className = 'chat-overlay visible';
    chatOverlay.innerHTML = `
        <div class="chat-container">
            <h2><span class="ping"></span>Live Connection</h2>
            <div id="chat-window"><p>Waiting for a lovable...</p></div>
            <div class="controls">
                <input type="text" id="msg" placeholder="Type a message...">
                <button id="send-btn">Send</button>
                <button id="skip-btn">Skip</button>
            </div>
            <p id="typing"></p>
        </div>`;
    document.body.appendChild(chatOverlay);

    const simulateTyping = () => {
        document.getElementById('typing').innerText = Math.random() > 0.5 ? "Noctramad is typing..." : "";
        setTimeout(simulateTyping, Math.random() * 3000 + 2000);
    };
    simulateTyping();

    document.getElementById('skip-btn').onclick = () => {
        chatOverlay.remove();
        renderChat();
    };
};

document.getElementById('online-btn').addEventListener('click', renderChat);
