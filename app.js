const modal = document.getElementById('modal-container');
const main = document.getElementById('main-content');

// Helper to go home
const goHome = () => {
    location.reload();
};

// Sign Up
document.getElementById('auth-trigger').onclick = () => {
    modal.innerHTML = `
        <div class="auth-box">
            <h2>Sign Up</h2>
            <input type="file" id="pic-upload" accept="image/*" style="display:none">
            <label for="pic-upload" class="upload-label">Upload Photo</label>
            <input type="text" placeholder="Full Name">
            <input type="email" placeholder="Email">
            <input type="password" placeholder="Password">
            <input type="password" placeholder="4-Digit Code" maxlength="4" style="text-align:center;">
            <textarea placeholder="Bio" style="height:80px;"></textarea>
            <button class="modal-btn" onclick="modal.style.display='none'">Submit</button>
            <button class="modal-btn" style="border:none" onclick="modal.style.display='none'">Cancel</button>
        </div>`;
    modal.style.display = 'flex';
};

// Discover
document.getElementById('offline-btn').onclick = () => {
    modal.innerHTML = `
        <div class="auth-box">
            <h2>Select Distance</h2>
            <button class="modal-btn" onclick="renderOfflineCards(); modal.style.display='none'">Search Nearby</button>
            <button class="modal-btn" onclick="renderOfflineCards(); modal.style.display='none'">Search Everywhere</button>
            <button class="modal-btn" style="border:none" onclick="modal.style.display='none'">Back</button>
        </div>`;
    modal.style.display = 'flex';
};

// Refined Profile View
const renderOfflineCards = () => {
    main.innerHTML = `
        <div class="profile-card" style="width: 100%; height: 90vh; display: flex; flex-direction: column; padding: 20px;">
            <div style="flex-grow: 1; background: #e8e4db; border: 1px solid #dcdad0; border-radius: 5px; margin-bottom: 20px; display: flex; align-items: center; justify-content: center; color: #888;">
                [No Photo Provided]
            </div>
            <div style="padding: 10px;">
                <h2 style="text-align: left; margin: 0; font-size: 1.8rem;">Arthur, 28</h2>
                <p style="margin-top: 10px; font-size: 1rem; color: #555;">Professional model based in Kerala. Seeking genuine connections.</p>
                <button class="main-action" style="margin-top: 20px;" onclick="goHome()">Back to Home</button>
            </div>
        </div>`;
};

// Chat
function renderChat() {
    const existing = document.querySelector('.chat-overlay');
    if(existing) existing.remove();
    
    const chat = document.createElement('div');
    chat.className = 'chat-overlay';
    chat.innerHTML = `
        <button class="main-action" style="margin-bottom: 10px;" onclick="goHome()">← Back to Home</button>
        <div id="contact-name" style="font-weight:bold;">Waiting for a lovable...</div>
        <div id="status" style="height: 1rem; font-size: 0.8rem; color: #666; margin-bottom: 10px;"></div>
        <div id="chat-window"></div>
        <div style="display:flex; gap:5px;">
            <input type="text" placeholder="Message..." style="flex-grow:1; border:1px solid #2c2a26; padding:10px;">
            <button class="main-action" style="margin:0">Send</button>
            <button id="skip-btn" class="main-action" style="margin:0; background:darkred; color:white; border:none;">Skip</button>
        </div>`;
    document.body.appendChild(chat);

    setTimeout(() => {
        document.getElementById('contact-name').innerText = "Noctramad";
    }, 3000);

    const statusEl = document.getElementById('status');
    const simulateTyping = () => {
        if (document.getElementById('contact-name').innerText === "Noctramad") {
            const isTyping = Math.random() > 0.5;
            if (isTyping) {
                statusEl.innerText = "Noctramad is typing...";
                setTimeout(() => { statusEl.innerText = ""; }, Math.random() * 3000 + 2000);
            }
        }
        setTimeout(simulateTyping, Math.random() * 3000 + 5000);
    };
    simulateTyping();
    
    document.getElementById('skip-btn').onclick = renderChat;
}
document.getElementById('online-btn').onclick = renderChat;
