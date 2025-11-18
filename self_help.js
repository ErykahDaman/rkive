// LexiGuard Self-Help & Cybersecurity Resources JavaScript

// Motivational Quotes
const quotes = [
  "The best defense against cyber threats is continuous learning and vigilance. 🛡️",
  "Every security expert was once a beginner who refused to give up. 💪",
  "In cybersecurity, paranoia is just good thinking. Stay curious, stay secure. 🔍",
  "Your network's security is only as strong as your weakest link - make every link strong. ⛓️",
  "The hacker mindset: If you can't break it, you don't understand it well enough. 🧠",
  "Privacy is not about hiding something; it's about protecting everything. 🔒",
  "Today's vulnerability is tomorrow's exploit. Keep learning, keep patching. ⚡",
  "In the world of cybersecurity, the learning never stops - and that's the beauty of it. 📚",
  "Think like an attacker, defend like a guardian. 🏰",
  "Security is not a product, but a process - and you're part of that process. ⚙️",
  "Knowledge is the ultimate firewall against cyber threats. 🔥",
  "Every line of secure code is a brick in the wall protecting our digital future. 🧱",
  "Cybersecurity is a team sport - we're all responsible for our digital safety. 🤝",
  "The price of security is eternal vigilance and continuous education. 👁️",
  "Your password is the key to your digital kingdom - make it unbreakable. 🗝️"
];

// Comprehensive Books Database
const books = [
  {
    title: "The Art of Invisibility",
    author: "Kevin Mitnick",
    description: "Learn from the world's most famous hacker how to protect your privacy and security in the digital age. Essential reading for understanding modern surveillance and protection techniques.",
    category: "Privacy & Security",
    level: "Beginner-Intermediate"
  },
  {
    title: "Tribe of Hackers",
    author: "Marcus J. Carey & Jennifer Jin",
    description: "Insights and advice from 70+ cybersecurity professionals on building a career in security. Real-world perspectives on breaking into the industry.",
    category: "Career Development",
    level: "All Levels"
  },
  {
    title: "The Cybersecurity Playbook",
    author: "Allison Cerra",
    description: "Essential strategies for building and maintaining a strong security program in any organization. Practical frameworks and methodologies.",
    category: "Strategy & Management",
    level: "Intermediate-Advanced"
  },
  {
    title: "Ghost in the Wires",
    author: "Kevin Mitnick",
    description: "The thrilling memoir of the world's most wanted computer hacker and his journey to redemption. Inspirational and educational.",
    category: "Biography & Inspiration",
    level: "All Levels"
  },
  {
    title: "Security Engineering",
    author: "Ross Anderson",
    description: "A comprehensive guide to building dependable distributed systems and security architecture. The bible of security engineering.",
    category: "Technical Deep-dive",
    level: "Advanced"
  },
  {
    title: "The Phoenix Project",
    author: "Gene Kim, Kevin Behr, George Spafford",
    description: "A novel about IT, DevOps, and helping your business win through security and efficiency. Learn through storytelling.",
    category: "DevSecOps",
    level: "Intermediate"
  },
  {
    title: "Sandworm",
    author: "Andy Greenberg",
    description: "The gripping story of cyberwar and how it's reshaping global conflict. Real accounts of the most dangerous hacking group.",
    category: "Cyber Warfare",
    level: "All Levels"
  },
  {
    title: "Click Here to Kill Everybody",
    author: "Bruce Schneier",
    description: "Security and survival in a hyper-connected world - essential reading for understanding IoT security and digital society risks.",
    category: "Digital Society",
    level: "Beginner-Intermediate"
  },
  {
    title: "Hacking: The Art of Exploitation",
    author: "Jon Erickson",
    description: "Hands-on introduction to hacking, programming, and network security. Learn by doing with practical examples.",
    category: "Ethical Hacking",
    level: "Intermediate-Advanced"
  },
  {
    title: "The Web Application Hacker's Handbook",
    author: "Dafydd Stuttard & Marcus Pinto",
    description: "The definitive guide to discovering and exploiting security flaws in web applications. Industry standard reference.",
    category: "Web Security",
    level: "Advanced"
  },
  {
    title: "Social Engineering: The Science of Human Hacking",
    author: "Christopher Hadnagy",
    description: "Understanding the human element of security breaches. Learn to recognize and defend against manipulation.",
    category: "Social Engineering",
    level: "All Levels"
  },
  {
    title: "Practical Malware Analysis",
    author: "Michael Sikorski & Andrew Honig",
    description: "Hands-on guide to dissecting malicious software. Essential for malware analysts and incident responders.",
    category: "Malware Analysis",
    level: "Advanced"
  }
];

// Audiobooks Database
const audiobooks = [
  {
    title: "The Art of Invisibility",
    author: "Kevin Mitnick",
    narrator: "Ray Porter",
    duration: "7 hours 32 minutes",
    description: "Perfect for commuters - learn privacy protection techniques while traveling.",
    platform: "Audible, Apple Books"
  },
  {
    title: "Ghost in the Wires",
    author: "Kevin Mitnick",
    narrator: "Ray Porter",
    duration: "14 hours 21 minutes",
    description: "Thrilling narration of the most famous hacker's autobiography.",
    platform: "Audible, Google Play"
  },
  {
    title: "Countdown to Zero Day",
    author: "Kim Zetter",
    narrator: "Joe Ochman",
    duration: "15 hours 49 minutes",
    description: "The story of Stuxnet and the dawn of cyber warfare.",
    platform: "Audible"
  },
  {
    title: "Future Crimes",
    author: "Marc Goodman",
    narrator: "Robertson Dean",
    duration: "15 hours 30 minutes",
    description: "Eye-opening look at digital threats and how to protect yourself.",
    platform: "Audible, Libro.fm"
  },
  {
    title: "The Code Book",
    author: "Simon Singh",
    narrator: "Richard Davidson",
    duration: "12 hours 50 minutes",
    description: "The fascinating history of cryptography from ancient times to quantum computing.",
    platform: "Audible, Apple Books"
  },
  {
    title: "Click Here to Kill Everybody",
    author: "Bruce Schneier",
    narrator: "Dan John Miller",
    duration: "8 hours 13 minutes",
    description: "Critical examination of security in our interconnected world.",
    platform: "Audible, Scribd"
  }
];

// Websites Database
const websites = [
  {
    title: "OWASP (Open Web Application Security Project)",
    url: "https://owasp.org",
    description: "Free and open community focused on improving software security. Essential resources including Top 10 vulnerabilities.",
    category: "Learning & Standards",
    icon: "🌐"
  },
  {
    title: "Krebs on Security",
    url: "https://krebsonsecurity.com",
    description: "In-depth security news and investigation by renowned cybersecurity journalist Brian Krebs.",
    category: "News & Analysis",
    icon: "📰"
  },
  {
    title: "HackTheBox",
    url: "https://www.hackthebox.com",
    description: "Hands-on penetration testing labs and challenges. Practice real-world hacking in a legal, safe environment.",
    category: "Practice Platform",
    icon: "🎯"
  },
  {
    title: "TryHackMe",
    url: "https://tryhackme.com",
    description: "Beginner-friendly cybersecurity training with guided learning paths and interactive rooms.",
    category: "Learning Platform",
    icon: "🎓"
  },
  {
    title: "SANS Reading Room",
    url: "https://www.sans.org/reading-room",
    description: "Free white papers and research on cutting-edge security topics. Over 3,000 papers available.",
    category: "Research Repository",
    icon: "📚"
  },
  {
    title: "NIST Cybersecurity Framework",
    url: "https://www.nist.gov/cyberframework",
    description: "Industry-standard framework for improving cybersecurity posture. Essential for organizational security.",
    category: "Framework & Standards",
    icon: "🏛️"
  },
  {
    title: "Cybrary",
    url: "https://www.cybrary.it",
    description: "Free and paid cybersecurity training courses covering everything from basics to advanced topics.",
    category: "Online Courses",
    icon: "🎓"
  },
  {
    title: "The Hacker News",
    url: "https://thehackernews.com",
    description: "Latest cybersecurity news, vulnerabilities, and threat intelligence. Updated multiple times daily.",
    category: "News & Alerts",
    icon: "📡"
  },
  {
    title: "Have I Been Pwned",
    url: "https://haveibeenpwned.com",
    description: "Check if your email or password has been compromised in a data breach. Essential privacy tool.",
    category: "Security Tool",
    icon: "🔍"
  },
  {
    title: "Exploit Database",
    url: "https://www.exploit-db.com",
    description: "Archive of exploits and vulnerable software. Essential for penetration testers and security researchers.",
    category: "Security Research",
    icon: "🔬"
  },
  {
    title: "Botswana CERT (Computer Emergency Response Team)",
    url: "https://www.bocra.org.bw",
    description: "Official Botswana cybersecurity incident response and advisory center.",
    category: "Local Resource",
    icon: "🇧🇼"
  },
  {
    title: "PortSwigger Web Security Academy",
    url: "https://portswigger.net/web-security",
    description: "Free online training for web application security testing. Creators of Burp Suite.",
    category: "Web Security",
    icon: "🕸️"
  }
];

// Apps Database
const apps = [
  {
    title: "1Password",
    description: "Premium password manager with excellent security. Family and business plans available. Stores passwords, documents, and 2FA codes securely.",
    category: "Password Manager",
    platforms: "iOS, Android, Windows, Mac, Linux",
    price: "Paid (Free trial)",
    icon: "🔑"
  },
  {
    title: "Bitwarden",
    description: "Open-source password manager with free tier. Excellent for individuals and teams. Strong encryption and cross-platform sync.",
    category: "Password Manager",
    platforms: "iOS, Android, Windows, Mac, Linux, Web",
    price: "Free & Paid",
    icon: "🔐"
  },
  {
    title: "Authy",
    description: "Two-factor authentication app with cloud backup. More secure than SMS for 2FA. Works with most major services.",
    category: "2FA Authenticator",
    platforms: "iOS, Android, Windows, Mac",
    price: "Free",
    icon: "🔒"
  },
  {
    title: "ProtonVPN",
    description: "Privacy-focused VPN from Swiss company. No-logs policy, strong encryption. Free tier available with unlimited data.",
    category: "VPN",
    platforms: "iOS, Android, Windows, Mac, Linux",
    price: "Free & Paid",
    icon: "🛡️"
  },
  {
    title: "Signal",
    description: "End-to-end encrypted messaging and calls. More secure than WhatsApp. Recommended by security experts worldwide.",
    category: "Secure Messaging",
    platforms: "iOS, Android, Windows, Mac, Linux",
    price: "Free",
    icon: "💬"
  },
  {
    title: "Malwarebytes Mobile Security",
    description: "Comprehensive mobile security including malware scanning, privacy audit, and safe browsing.",
    category: "Antivirus & Security",
    platforms: "iOS, Android",
    price: "Free & Paid",
    icon: "🦠"
  },
  {
    title: "DuckDuckGo Privacy Browser",
    description: "Privacy-focused browser that blocks trackers and provides encrypted connections. No search history stored.",
    category: "Private Browser",
    platforms: "iOS, Android, Windows, Mac",
    price: "Free",
    icon: "🦆"
  },
  {
    title: "NetGuard",
    description: "No-root firewall for Android. Control which apps can access the internet. Monitor network activity.",
    category: "Firewall",
    platforms: "Android",
    price: "Free & Paid",
    icon: "🔥"
  },
  {
    title: "Cryptomator",
    description: "Encrypt your cloud storage. Works with Dropbox, Google Drive, OneDrive. Client-side encryption for maximum privacy.",
    category: "Encryption",
    platforms: "iOS, Android, Windows, Mac, Linux",
    price: "Free (Desktop) & Paid (Mobile)",
    icon: "🔐"
  },
  {
    title: "Haven: Keep Watch",
    description: "Turn old Android phone into security device. Motion, sound, and light detection. Created by Edward Snowden's team.",
    category: "Security Monitoring",
    platforms: "Android",
    price: "Free",
    icon: "📹"
  },
  {
    title: "Fing Network Scanner",
    description: "Discover devices on your network. Find intruders and check network security. Essential for home network security.",
    category: "Network Tool",
    platforms: "iOS, Android",
    price: "Free & Paid",
    icon: "📡"
  },
  {
    title: "Privacy Pro SmartVPN",
    description: "DuckDuckGo's VPN service. No-logs, no tracking. Simple and effective privacy protection.",
    category: "VPN",
    platforms: "iOS, Android",
    price: "Paid",
    icon: "🔒"
  }
];

// Skills to track
const skills = [
  "Network Security Fundamentals",
  "Ethical Hacking & Penetration Testing",
  "Incident Response & Digital Forensics",
  "Risk Assessment & Management",
  "Cryptography & PKI",
  "Security Architecture & Design",
  "Compliance & Governance (GDPR, ISO 27001)",
  "Cloud Security (AWS, Azure, GCP)",
  "Programming for Security (Python, Bash)",
  "Social Engineering Awareness",
  "Web Application Security (OWASP Top 10)",
  "Mobile Security (iOS/Android)",
  "Malware Analysis & Reverse Engineering",
  "Security Operations Center (SOC) Skills",
  "Threat Intelligence & Hunting"
];

// Podcasts Database
const podcasts = [
  {
    title: "Darknet Diaries",
    host: "Jack Rhysider",
    description: "True stories from the dark side of the internet. Hacking, cybercrime, and digital espionage. Engaging storytelling with technical depth.",
    episodes: "140+ episodes",
    frequency: "Bi-weekly",
    icon: "🎙️"
  },
  {
    title: "Security Now",
    host: "Steve Gibson & Leo Laporte",
    description: "Weekly deep-dive into security news, vulnerabilities, and concepts. One of the longest-running security podcasts.",
    episodes: "900+ episodes",
    frequency: "Weekly",
    icon: "🎧"
  },
  {
    title: "CyberWire Daily",
    host: "Dave Bittner",
    description: "Daily cybersecurity news briefing. Stay current with threats and industry developments in under 30 minutes.",
    episodes: "Daily",
    frequency: "Daily",
    icon: "📻"
  },
  {
    title: "Malicious Life",
    host: "Ran Levi",
    description: "Stories of cybersecurity history and the people behind major incidents. Educational and entertaining.",
    episodes: "150+ episodes",
    frequency: "Weekly",
    icon: "🎙️"
  },
  {
    title: "Smashing Security",
    host: "Graham Cluley & Carole Theriault",
    description: "Award-winning podcast discussing latest security news with humor and insight.",
    episodes: "350+ episodes",
    frequency: "Weekly",
    icon: "🎧"
  },
  {
    title: "The Privacy, Security, & OSINT Show",
    host: "Michael Bazzell",
    description: "Privacy protection techniques and open-source intelligence. Practical advice for personal security.",
    episodes: "300+ episodes",
    frequency: "Weekly",
    icon: "🔒"
  },
  {
    title: "Risky Business",
    host: "Patrick Gray",
    description: "Information security news and analysis. Feature interviews with industry experts.",
    episodes: "700+ episodes",
    frequency: "Weekly",
    icon: "📡"
  },
  {
    title: "Hacking Humans",
    host: "Dave Bittner & Joe Carrigan",
    description: "Social engineering and human factors in cybersecurity. Understanding psychological manipulation.",
    episodes: "250+ episodes",
    frequency: "Weekly",
    icon: "🧠"
  }
];

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
  displayQuote();
  populateBooks();
  populateAudiobooks();
  populateWebsites();
  populateApps();
  populatePodcasts();
  initializeSkillTracker();
});

// Display random quote
function displayQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('dailyQuote').textContent = randomQuote;
}

// Get new quote
function newQuote() {
  displayQuote();
}

// Tab switching
function showTab(tabName) {
  // Hide all tabs
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Remove active from all buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Show selected tab
  document.getElementById(tabName).classList.add('active');
  
  // Add active to clicked button
  event.target.classList.add('active');
}

// Populate books
function populateBooks() {
  const container = document.getElementById('booksContainer');
  container.innerHTML = books.map(book => `
    <div class="col-md-6 col-lg-4 mb-4">
      <div class="book-card">
        <span class="category">${book.category}</span>
        <h4>${book.title}</h4>
        <p class="author">by ${book.author}</p>
        <p style="color: #b19cd9; font-size: 0.9rem;">${book.description}</p>
        <p style="color: #34d399; font-size: 0.85rem; margin-top: 10px;">📊 Level: ${book.level}</p>
      </div>
    </div>
  `).join('');
}

// Populate audiobooks
function populateAudiobooks() {
  const container = document.getElementById('audiobooksContainer');
  container.innerHTML = audiobooks.map(book => `
    <div class="col-md-6 mb-4">
      <div class="card-cyber">
        <h4 style="color: #e0b0ff; margin-bottom: 10px;">🎧 ${book.title}</h4>
        <p style="color: #b19cd9; font-style: italic; margin-bottom: 5px;">by ${book.author}</p>
        <p style="color: #b19cd9; font-size: 0.9rem; margin-bottom: 10px;">${book.description}</p>
        <div style="display: flex; gap: 15px; flex-wrap: wrap; margin-top: 15px;">
          <span style="color: #34d399; font-size: 0.85rem;">⏱️ ${book.duration}</span>
          <span style="color: #34d399; font-size: 0.85rem;">🎤 ${book.narrator}</span>
        </div>
        <p style="color: #8a2be2; font-size: 0.85rem; margin-top: 10px;">📱 ${book.platform}</p>
      </div>
    </div>
  `).join('');
}

// Populate websites
function populateWebsites() {
  const container = document.getElementById('websitesContainer');
  container.innerHTML = websites.map(site => `
    <div class="resource-card">
      <div class="icon">${site.icon}</div>
      <h4>${site.title}</h4>
      <p style="color: #b19cd9; margin-bottom: 10px;">${site.description}</p>
      <a href="${site.url}" target="_blank" style="color: #8a2be2; text-decoration: none; font-weight: 600;">
        Visit Website →
      </a>
      <span class="resource-type">${site.category}</span>
    </div>
  `).join('');
}

// Populate apps
function populateApps() {
  const container = document.getElementById('appsContainer');
  container.innerHTML = apps.map(app => `
    <div class="col-md-6 col-lg-4 mb-4">
      <div class="card-cyber" style="height: 100%;">
        <div style="font-size: 2.5rem; margin-bottom: 15px;">${app.icon}</div>
        <h4 style="color: #e0b0ff; margin-bottom: 10px;">${app.title}</h4>
        <p style="color: #b19cd9; font-size: 0.9rem; margin-bottom: 15px;">${app.description}</p>
        <div style="margin-top: auto;">
          <p style="color: #34d399; font-size: 0.85rem; margin-bottom: 5px;">
            <strong>Category:</strong> ${app.category}
          </p>
          <p style="color: #34d399; font-size: 0.85rem; margin-bottom: 5px;">
            <strong>Platforms:</strong> ${app.platforms}
          </p>
          <p style="color: #8a2be2; font-size: 0.85rem; font-weight: 600;">
            💰 ${app.price}
          </p>
        </div>
      </div>
    </div>
  `).join('');
}

// Populate podcasts
function populatePodcasts() {
  const container = document.getElementById('podcastsContainer');
  container.innerHTML = podcasts.map(podcast => `
    <div class="col-md-6 mb-4">
      <div class="card-cyber">
        <div style="font-size: 2.5rem; margin-bottom: 15px;">${podcast.icon}</div>
        <h4 style="color: #e0b0ff; margin-bottom: 10px;">${podcast.title}</h4>
        <p style="color: #b19cd9; font-style: italic; margin-bottom: 10px;">
          <strong>Host:</strong> ${podcast.host}
        </p>
        <p style="color: #b19cd9; font-size: 0.9rem; margin-bottom: 15px;">${podcast.description}</p>
        <div style="display: flex; gap: 15px; flex-wrap: wrap; margin-top: 15px;">
          <span style="color: #34d399; font-size: 0.85rem;">📚 ${podcast.episodes}</span>
          <span style="color: #34d399; font-size: 0.85rem;">📅 ${podcast.frequency}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// Initialize skill tracker
function initializeSkillTracker() {
  const container = document.getElementById('skillTracker');
  container.innerHTML = skills.map((skill, index) => {
    const progress = localStorage.getItem(`skill_${index}`) || 0;
    return `
      <div class="skill-item">
        <div class="skill-header">
          <span class="skill-name">${skill}</span>
          <span class="skill-percentage">${progress}%</span>
        </div>
        <div class="skill-bar">
          <div class="skill-progress" style="width: ${progress}%;"></div>
        </div>
        <div class="skill-controls">
          <button onclick="updateSkill(${index}, 10)" class="skill-btn">+10%</button>
          <button onclick="updateSkill(${index}, 25)" class="skill-btn">+25%</button>
          <button onclick="updateSkill(${index}, -10)" class="skill-btn">-10%</button>
          <button onclick="updateSkill(${index}, 0, true)" class="skill-btn">Reset</button>
        </div>
      </div>
    `;
  }).join('');
}

// Update skill progress
function updateSkill(skillIndex, change, reset = false) {
  if (reset) {
    localStorage.setItem(`skill_${skillIndex}`, 0);
  } else {
    const currentProgress = parseInt(localStorage.getItem(`skill_${skillIndex}`) || 0);
    const newProgress = Math.max(0, Math.min(100, currentProgress + change));
    localStorage.setItem(`skill_${skillIndex}`, newProgress);
  }
  initializeSkillTracker();
}

// Reset all progress
function resetProgress() {
  if (confirm('Are you sure you want to reset all skill progress? This action cannot be undone.')) {
    skills.forEach((_, index) => {
      localStorage.removeItem(`skill_${index}`);
    });
    initializeSkillTracker();
    alert('All skill progress has been reset!');
  }
}
