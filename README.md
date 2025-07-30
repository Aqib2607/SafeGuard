# 🛡️ Telegram SafeGuard

A free, privacy-first Chrome extension that protects Telegram Web users from malicious messages, blackmail attempts, and suspicious content shared by unknown senders.

---

## 📌 Overview

**Telegram SafeGuard** detects and blocks unwanted or harmful messages, images, or links sent by unknown users or dark web-affiliated Telegram channels. It helps protect vulnerable users—especially women and minors—from online blackmailing and sextortion attempts.

The extension runs entirely **client-side**, ensuring zero privacy compromise while offering powerful content filtering and a **community-driven abuse detection system**.

---

## ✨ Key Features

- 🔍 **Message Scanner** – Auto-detects and analyzes messages, links, and files from unknown Telegram users.
- 🚫 **Auto-Blocker Layer** – Harmful or explicit messages are automatically hidden or blurred.
- ⚠️ **Risk Indicator** – Warns the receiver if a sender is potentially a blackmailer.
- 👥 **Crowd-Sourced Protection** – If 3+ users block the same sender, all future messages from them are auto-flagged.
- 🔐 **No Tracking or Server Syncing** – 100% local; no data leaves your device.
- 💬 **Clean, Motivational UI** – Engaging design and a simple explanation encourage safer browsing.
- 🚀 **Enhanced UI/UX** - Attractive animations and a modern design for a seamless user experience.

---

## 📚 Why Use Telegram SafeGuard?

> 🚨 “One message can destroy someone’s life. One click can prevent it.”  
Telegram SafeGuard lets you:

- Protect yourself from unsolicited messages, sextortion, or trap links.
- Block & warn others through a shared (yet fully local) consensus system.
- Stay safe without giving up your privacy—no login, no account, no analytics.

---

## 📸 Screenshots/Visuals

See SafeGuard in action with these visual examples:

- **Blocking Malicious Messages**: A clear view of how SafeGuard identifies and blocks unwanted messages.
- **Smart Content Filtering**: Demonstrates the AI-powered filtering of explicit content and dangerous links.

---

## ❓ Frequently Asked Questions (FAQ)

- **What is Telegram SafeGuard?**
  Telegram SafeGuard is a Chrome extension designed to protect you from malicious messages and blackmail on Telegram Web by automatically blocking suspicious content.
- **How does it protect my privacy?**
  All processing and detection happen locally on your device. No data leaves your browser, ensuring your privacy is fully maintained.
- **Is it free to use?**
  Yes, Telegram SafeGuard is completely free and open-source.
- **How do I install the extension?**
  You can install it directly from the Chrome Web Store (link coming soon) or by loading it as an unpacked extension from our GitHub repository.

---

## 🌐 Browser Compatibility

Telegram SafeGuard is designed to work seamlessly with popular Chromium-based browsers, ensuring broad accessibility and protection.

- **Chrome**
- **Edge**
- **Brave**
- **Vivaldi**
- **Opera**

*Works on all Chromium-based browsers that support Chrome extensions.

---

## 🛠️ Tech Stack

| Component | Tech/Tool |
|-----------|-----------|
| Extension Framework | Chrome Manifest V3 |
| Code Editor | Visual Studio Code |
| AI Filtering | NSFW.js (TensorFlow.js) |
| Link Scanning | Regex + SafeBrowsing API (optional) |
| Storage | Chrome LocalStorage API |
| Styling | Tailwind CSS (CDN) |
| Version Control | Git + GitHub |

---

## 📂 Project Structure

SafeGram/
│
├── manifest.json # Chrome Extension config
├── content.js # DOM observer & filter logic
├── popup.html # UI interface when extension icon is clicked
├── style.css # Optional UI styling
├── icons/ # 16px, 48px, 128px icons
└── README.md # This file


---

## 🚧 Installation (Developer Mode)

1. Clone or download the repository:
   ```bash
   git clone https://github.com/yourusername/telegram-safeguard.git
Open Chrome and go to chrome://extensions/

Enable Developer Mode (top-right)

Click Load Unpacked

Select the project folder

Visit https://web.telegram.org and start browsing safely!

🎨 UI/UX Principles
Minimalist & Familiar: Friendly layout with a clean banner and icon.

Motivational Messaging: “Your block may save others” inspires community action.

Accessible: No setup required; works as soon as it's installed.

🔐 Privacy Notice
This extension stores all data locally on your browser.

No analytics, telemetry, or login is required.

Telegram SafeGuard does not read your private Telegram content or transmit any data externally.

For more details, please refer to our [Privacy Policy](#) and [Terms of Service](#).

🧠 Future Improvements
Multi-platform support (WhatsApp Web, Messenger, etc.)

Mobile integration via Telegram Bot

Optional online syncing (with opt-in only)

Language-specific content filters

Flag level visualization (e.g., risk meter)

📄 License
This project is licensed under the MIT License. It is 100% free and open-source.

🤝 Contributing
Want to help? PRs are welcome!
Or simply use the extension, report what looks harmful, and spread awareness.

🙏 Acknowledgments
NSFW.js for client-side image classification.

Google Safe Browsing API for optional URL threat checking.

Inspiration from real-life cases of online blackmail that deserve better protection solutions.

💬 Contact
Built with ❤️ by a CSE Engineer for a safer web.
Feel free to reach out via GitHub Issues or Telegram (optional)