let questions = [];

// 200 smart student-focused questions
for (let i = 1; i <= 200; i++) {
  questions.push(`Q${i}: What is your plan or status for task ${i}?`);
}

let current = 0;
const messages = document.getElementById('messages');

function addMessage(text, sender) {
  const div = document.createElement('div');
  div.classList.add('message', sender);
  div.innerText = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function askQuestion() {
  if (current < questions.length) {
    setTimeout(() => {
      addMessage(questions[current], 'bot');
      current++;
    }, 500);
  } else {
    addMessage("You're all done! 🎉", 'bot');
  }
}

function sendMessage() {
  const input = document.getElementById('userInput');
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, 'user');
  input.value = '';

  askQuestion();
}

window.onload = () => {
  addMessage("Hey, I'm Sync AI 🤖 Let's plan your life.", 'bot');
  askQuestion();
};
