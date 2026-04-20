const msgContainer = document.getElementById('messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

const responses = {
    "hi": "Hey Aryan! I've analyzed your dashboard. You have 3 deadlines due tomorrow. Want me to clear your evening for study?",
    "expenses": "Your spending this month is ₹1,920 out of a ₹5,000 budget — only 38% used. You're doing great! 💸",
    "deadlines": "You have 'OS Assignment' due on Apr 14 and 'DBMS Lab Report' on Apr 16. Focus on OS today!",
    "bills": "You have 4 bills pending, including Netflix (₹199). Should I schedule the payment for you?",
    "study": "I've blocked out 2pm to 4pm for your OS Lab work today. I'll silence your notifications then! 🧠",
    "default": "I'm on it! I'll update your Sync dashboard and keep everything organized for you."
};

function addMessage(text, sender) {
    const div = document.createElement('div');
    div.className = `message ${sender}`;
    div.textContent = text;
    msgContainer.appendChild(div);
    document.getElementById('chat-window').scrollTop = document.getElementById('chat-window').scrollHeight;
}

function handleResponse(text) {
    const input = text.toLowerCase();
    let reply = responses.default;

    if (input.includes("hi") || input.includes("hello")) reply = responses.hi;
    else if (input.includes("expense") || input.includes("spend") || input.includes("money")) reply = responses.expenses;
    else if (input.includes("deadline") || input.includes("task")) reply = responses.deadlines;
    else if (input.includes("bill") || input.includes("pay")) reply = responses.bills;
    else if (input.includes("study") || input.includes("plan")) reply = responses.study;

    setTimeout(() => addMessage(reply, 'bot'), 600);
}

sendBtn.addEventListener('click', () => {
    if (userInput.value.trim() !== "") {
        const text = userInput.value;
        addMessage(text, 'user');
        handleResponse(text);
        userInput.value = "";
    }
});

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendBtn.click();
});

// For the quick action buttons
function sendQuick(text) {
    addMessage(text, 'user');
    handleResponse(text);
}
