:root {
    --bg-gradient: linear-gradient(180deg, #12121c 0%, #1a1a2e 100%);
    --card-bg: rgba(255, 255, 255, 0.05);
    --accent-purple: #9d50bb;
    --accent-blue: #6e7aff;
    --text-main: #ffffff;
    --text-dim: #94a3b8;
    --sync-teal: #00f2fe;
}

body {
    margin: 0;
    font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    background: var(--bg-gradient);
    color: var(--text-main);
    display: flex;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
}

.app-container {
    width: 100%;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    position: relative;
}

header { margin-bottom: 20px; }
.logo { font-size: 24px; font-weight: 800; color: var(--accent-blue); margin-bottom: 20px; }
.sub-header { font-size: 12px; color: var(--text-dim); letter-spacing: 1px; margin-bottom: 5px; }
h1 { font-size: 28px; margin: 0; font-weight: 700; }
.tagline { color: var(--text-dim); font-size: 14px; line-height: 1.4; }

/* Chat Window */
#chat-window {
    flex-grow: 1;
    overflow-y: auto;
    background: var(--card-bg);
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 15px;
    margin-bottom: 15px;
}

.bot-profile {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.avatar {
    width: 40px; height: 40px;
    background: linear-gradient(135deg, #6e7aff, #9d50bb);
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
}

.name { display: block; font-weight: 600; }
.status { font-size: 11px; color: #4ade80; }
.badge { margin-left: auto; font-size: 10px; background: rgba(255,255,255,0.1); padding: 4px 8px; border-radius: 10px; color: var(--text-dim); }

/* Messages */
.message {
    max-width: 80%;
    padding: 12px 16px;
    border-radius: 18px;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 1.5;
}

.bot { background: rgba(255,255,255,0.08); align-self: flex-start; border-bottom-left-radius: 4px; }
.user { background: var(--accent-purple); align-self: flex-end; margin-left: auto; border-bottom-right-radius: 4px; }

/* Quick Actions */
.quick-actions {
    display: flex;
    gap: 8px;
    overflow-x: auto;
    padding-bottom: 15px;
}

.quick-actions button {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    color: var(--text-dim);
    padding: 8px 16px;
    border-radius: 20px;
    white-space: nowrap;
    cursor: pointer;
    font-size: 12px;
}

/* Input */
.input-container {
    display: flex;
    gap: 10px;
    background: rgba(255,255,255,0.05);
    padding: 10px;
    border-radius: 100px;
    margin-bottom: 80px;
}

input {
    background: transparent;
    border: none;
    color: white;
    flex-grow: 1;
    padding-left: 15px;
    outline: none;
}

#send-btn {
    background: var(--accent-blue);
    border: none;
    color: white;
    width: 35px; height: 35px;
    border-radius: 50%;
    cursor: pointer;
}

/* Nav Bar */
.bottom-nav {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 70px;
    background: #0a0a12;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #222;
}

.nav-item { display: flex; flex-direction: column; align-items: center; font-size: 10px; color: var(--text-dim); }
.nav-item.active { color: var(--accent-purple); }
