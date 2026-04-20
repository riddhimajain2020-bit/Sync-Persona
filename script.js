const chatHistory = document.getElementById('chat-history');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

const data = {
    "hi": "Good morning, Aryan! Your Sync dashboard is ready. You have 5 tasks today. 🚀",
    "expenses": "You've spent ₹1,920 this month (38% of your ₹5,000 budget). You still have ₹3,080 left. Looking good! 💰",
    "deadlines": "Urgent: OS Assignment submission is tomorrow (Apr 14). DBMS Lab is on Apr 16. Don't skip the OS lab code! 📅",
    "bills": "Upcoming: Netflix (₹199) is due tomorrow. Gym Membership (₹800) is due on Apr 18. 💳",
    "study": "I've planned your day: Algorithms at 9am, OS Lab at 2pm. Ready to get started? 🧠",
    "default": "I'm on it. I've synced that to your dashboard."
};

function addMessage(text, type) {
    const div = document.createElement('div');
    div.className = `msg ${type}-msg`;
    div.innerText = text;
    chatHistory.appendChild(div);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

function botLogic(input) {
    const msg = input.toLowerCase();
    let reply = data.default;

    if (msg.includes("hi") || msg.includes("hello")) reply = data.hi;
    else if (msg.includes("expense") || msg.includes("spend") || msg.includes("money")) reply = data.expenses;
    else if (msg.includes("deadline") || msg.includes("task")) reply = data.deadlines;
    else if (msg.includes("bill") || msg.includes("pay")) reply = data.bills;
    else if (msg.includes("study") || msg.includes("plan")) reply = data.study;

    setTimeout(() => addMessage(reply, 'bot'), 500);
}

sendBtn.onclick = () => {
    if (userInput.value) {
        addMessage(userInput.value, 'user');
        botLogic(userInput.value);
        userInput.value = "";
    }
};

function quickAsk(text) {
    addMessage(text, 'user');
    botLogic(text);
}

userInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendBtn.onclick(); });
