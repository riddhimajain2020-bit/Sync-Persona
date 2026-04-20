/**
 * ARYAN PERSONA BOT - LOGIC ENGINE
 * Designed for: https://dulcet-cheesecake-b7bddd.netlify.app/
 */

const input = document.getElementById('user-input');
const history = document.getElementById('history');

// 1. DATA BANK: Keywords grouped by category
const responseData = {
    greetings: {
        keywords: ["hi", "hello", "hey", "hola", "yo", "good morning", "good evening"],
        reply: "Hey! Aryan here. Ready to stay 'in sync' with my student life?"
    },
    identity: {
        keywords: ["who are you", "your name", "tell me about yourself", "who is aryan"],
        reply: "I'm Aryan, a CS student. I'm a builder who uses AI to simplify the chaos of college."
    },
    origin: {
        keywords: ["where", "from", "live", "location", "country"],
        reply: "I'm a student developer based in India, coding my way through university."
    },
    sync_concept: {
        keywords: ["what is sync", "sync up", "how does it work", "define sync", "agentic ai"],
        reply: "SYNC is my AI-powered personal manager. It's one system that handles study plans, money, and time so I don't have to."
    },
    goals: {
        keywords: ["goal", "aim", "future", "career", "want to be", "vision"],
        reply: "My goal is to graduate stress-free and build tools that solve real-world problems. SYNC is the first step."
    },
    money: {
        keywords: ["money", "cash", "expense", "budget", "spend", "bills", "financial", "broke"],
        reply: "I use SYNC to track every penny. It gives me a 'warning' before I overspend on coffee or snacks."
    },
    studies: {
        keywords: ["study", "exam", "homework", "class", "grades", "test", "deadline", "notes"],
        reply: "SYNC organizes my study schedule. It looks at my deadlines and plans my sessions automatically."
    },
    pain_points: {
        keywords: ["pain", "problem", "hate", "struggle", "mess", "clutter", "too many apps"],
        reply: "I hate 'App Fatigue'—switching between 5 apps for 5 tasks is a mess. SYNC puts it all in one place."
    },
    technology: {
        keywords: ["tech", "code", "language", "stack", "build", "javascript", "react"],
        reply: "I love the MERN stack! I'm always looking for ways to integrate AI into clean, terminal-style web apps."
    },
    help: {
        keywords: ["help", "commands", "what can i ask", "options"],
        reply: "You can ask me about: My identity, SYNC (AI Assistant), Goals, Money management, or Study tips!"
    }
};

// 2. LOGIC: The processing engine
function getBotResponse(userInput) {
    const cleanInput = userInput.toLowerCase().trim();

    // Loop through our data bank to find a keyword match
    for (const category in responseData) {
        const item = responseData[category];
        // Check if any keyword from the list exists in the user's input
        if (item.keywords.some(keyword => cleanInput.includes(keyword))) {
            return item.reply;
        }
    }

    // Default response if no keywords match
    return "That's an interesting question! I'm still training my SYNC agent on that, but ask me about my studies or how I manage money.";
}

// 3. UI: Handling the input and terminal display
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && input.value.trim() !== "") {
        const userText = input.value;

        // Create User Line
        const userDiv = document.createElement('div');
        userDiv.className = 'line';
        userDiv.innerHTML = `<span class="user-label">➜ ~/persona</span> <span class="user-msg">${userText}</span>`;
        history.appendChild(userDiv);

        // Clear input
        input.value = "";

        // Scroll to bottom
        history.scrollTop = history.scrollHeight;

        // Artificial delay for "Bot Thinking" effect
        setTimeout(() => {
            const botResponse = getBotResponse(userText);
            const botDiv = document.createElement('div');
            botDiv.className = 'line';
            botDiv.innerHTML = `<span class="bot-label">Aryan:</span> <span>${botResponse}</span>`;
            history.appendChild(botDiv);
            history.scrollTop = history.scrollHeight;
        }, 400);
    }
});
