// =========================
// COMMUNITY CHAT SIMULATION
// =========================

// DOM elements
const chatMessages = document.getElementById("chatMessages");
const messageField = document.getElementById("messageField");
const sendBtn = document.getElementById("sendBtn");
const channels = document.querySelectorAll(".channel");
let activeChannel = "phishing-alerts";

// Store sample messages for each channel
const messages = {
    "phishing-alerts": [
        { user: "CyberBot", text: "⚠️ New phishing SMS detected! Avoid fake FNB login links." },
        { user: "Anon42", text: "Thanks! Got that SMS this morning." }
    ],
    "malware-reports": [
        { user: "CyberBot", text: "🦠 Malware alert: Fake 'Adobe Update' spreading on Facebook." }
    ],
    "scam-watch": [
        { user: "CyberBot", text: "🚨 WhatsApp 'You won P5000' scam circulating again." }
    ],
    "darkweb-insights": [
        { user: "CyberBot", text: "👁 Dark web chatter increasing around Botswana SIM card swaps." }
    ],
    "beginners": [
        { user: "CyberBot", text: "Welcome beginners! Ask anything cybersecurity." }
    ],
    "advanced": [
        { user: "CyberBot", text: "Today’s topic: Packet sniffing & MITM attacks." }
    ],
    "expert-lounge": [
        { user: "CyberBot", text: "Discuss zero-days & exploit research here." }
    ],
    "quizzes": [
        { user: "CyberBot", text: "🔍 Quiz of the day: What is MFA and why is it strong?" }
    ],
    "introductions": [
        { user: "Anon999", text: "Hi everyone! Excited to learn cybersecurity :)" }
    ],
    "general-chat": [
        { user: "Anon43", text: "Did you see that big phishing campaign today?" }
    ],
    "memes": [
        { user: "CyberBot", text: "Send cybersecurity memes responsibly 🤣" }
    ],
    "tools-tips": [
        { user: "CyberBot", text: "Tip: Use VirusTotal to scan suspicious links/files." }
    ]
};

// Load messages for a channel
function loadChannel(channel) {
    chatMessages.innerHTML = "";
    activeChannel = channel;

    messages[channel].forEach(msg => {
        appendMessage(msg.user, msg.text);
    });
}

// Append message to chat
function appendMessage(user, text) {
    const message = document.createElement("div");
    message.classList.add("message");

    message.innerHTML = `
        <div class="avatar ${user === "Anonymous User" ? "user" : ""}"></div>
        <div class="message-content">
            <p class="username">${user}</p>
            <p class="text">${text}</p>
        </div>
    `;

    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Send user message
function sendMessage() {
    const text = messageField.value.trim();
    if (text === "") return;

    appendMessage("Anonymous User", text);
    messages[activeChannel].push({ user: "Anonymous User", text });

    messageField.value = "";
}

// Fake real-time CyberBot alerts
function fakeCyberBotAlerts() {
    const alerts = [
        "⚠️ New phishing link spreading on WhatsApp!",
        "🛑 Beware of free data giveaways—they're scams.",
        "🔐 Tip: Change your passwords every 60 days.",
        "🦠 Malware disguised as PDF invoices detected today.",
        "💡 Remember: No bank asks for your OTP via SMS."
    ];

    const randomAlert = alerts[Math.floor(Math.random() * alerts.length)];

    messages[activeChannel].push({ user: "CyberBot", text: randomAlert });
    appendMessage("CyberBot", randomAlert);
}

// Event listeners
sendBtn.addEventListener("click", sendMessage);
messageField.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});

// Channel switching
channels.forEach(channel => {
    channel.addEventListener("click", () => {
        document.querySelector(".channel.active").classList.remove("active");
        channel.classList.add("active");

        loadChannel(channel.textContent.replace("# ", ""));
    });
});

// Start fake alerts every 9–15 seconds
setInterval(fakeCyberBotAlerts, Math.random() * 6000 + 9000);

// Initial load
loadChannel(activeChannel);
