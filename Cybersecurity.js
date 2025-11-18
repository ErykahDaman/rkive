// Cybersecurity & Privacy Module JavaScript

// Course state
let courseState = {
  completedChapters: [],
  currentChapter: 1,
  totalChapters: 8
};

// Game statistics
let gameStats = {
  totalScore: 0,
  gamesCompleted: 0,
  passwordScore: 0,
  phishingScore: 0,
  phishingTotal: 0,
  settingsScore: 0,
  settingsTotal: 0,
  threatScore: 0,
  threatTotal: 0,
  passwordsTestedCount: 0,
  strongPasswordsCreated: 0
};

// Quiz answers
const quizAnswers = {
  chapter3: {
    q3_1: 'c', // 12 characters or more
    q3_2: 'b', // If one account is breached, others remain safe
    q3_3: 'b'  // Two forms of verification
  }
};

// Password testing
const commonPasswords = ['password', '123456', 'qwerty', 'abc123', 'password123', 'admin', 'welcome', '12345678', 'iloveyou', 'princess', 'rockyou'];

// Phishing scenarios
const phishingScenarios = [
  {
    content: `FROM: security@bankofbotswana-verify.com
SUBJECT: URGENT: Your Account Will Be Closed

Dear Customer,

Your account has suspicious activity. Click here immediately to verify:
http://bankofbotswana-verify.com/urgent-verify

Fail to verify within 24 hours will result in permanent closure.

Bank of Botswana Security`,
    isPhishing: true,
    explanation: "🚨 This is PHISHING! Red flags: suspicious domain (bankofbotswana-verify.com instead of official domain), urgent threats, poor grammar, and requesting immediate action."
  },
  {
    content: `FROM: notifications@facebook.com
SUBJECT: Your Weekly Activity Summary

Hi [Your Name],

Here's your activity summary for this week:
- 15 new friend requests
- 42 likes on your posts
- 8 comments

Manage your notifications: https://facebook.com/settings

The Facebook Team`,
    isPhishing: false,
    explanation: "✅ This appears LEGITIMATE! It's from the official Facebook domain, has no urgent requests, and links to the real Facebook settings page."
  },
  {
    content: `FROM: winner@lottery-botswana.org
SUBJECT: CONGRATULATIONS! You Won P2,000,000!

Dear Lucky Winner,

You have won P2,000,000 in the Botswana National Lottery!

To claim your prize:
1. Send copy of your ID
2. Bank details
3. Processing fee: P5,000

Contact us immediately: winner@lottery-botswana.org`,
    isPhishing: true,
    explanation: "🚨 Classic lottery SCAM! Red flags: unsolicited prize notification, requests for personal information and upfront payment, unofficial email domain."
  },
  {
    content: `FROM: support@mascom.bw
SUBJECT: Monthly Bill Statement - January 2025

Dear Customer,

Your monthly statement is ready for account ending in 1234.

Amount due: P156.50
Due date: 28 January 2025

View statement: https://mascom.bw/mybill
Pay online: https://mascom.bw/pay

Mascom Customer Service`,
    isPhishing: false,
    explanation: "✅ This looks LEGITIMATE! Official Mascom domain (.bw), realistic bill amount, proper links to official website, no urgent threats or requests for sensitive info."
  },
  {
    content: `WhatsApp message from unknown number:

'Hi! I'm Sarah from Orange Botswana. You've won a smartphone in our promotion! To claim, send P50 airtime to this number for processing. Limited time offer!'`,
    isPhishing: true,
    explanation: "🚨 WhatsApp SCAM! Red flags: unknown number claiming to be from a company, requests payment to claim 'prize', creates urgency with 'limited time'."
  }
];

// Settings scenarios
const settingsScenarios = [
  {
    scenario: "You're setting up a new WhatsApp account. Select ALL the privacy settings you should enable:",
    options: [
      { id: 'opt1', text: "Profile photo visible to: Everyone", correct: false },
      { id: 'opt2', text: "Profile photo visible to: My Contacts Only", correct: true },
      { id: 'opt3', text: "Last seen visible to: Everyone", correct: false },
      { id: 'opt4', text: "Last seen visible to: Nobody", correct: true },
      { id: 'opt5', text: "Read receipts: Enabled", correct: false },
      { id: 'opt6', text: "Read receipts: Disabled", correct: true }
    ],
    explanation: "Best privacy practice: Profile photo should be limited to contacts only, last seen should be set to nobody for maximum privacy, and read receipts can be disabled to prevent others from knowing when you read messages."
  },
  {
    scenario: "You're using public Wi-Fi at a café. Select ALL the security practices you should follow:",
    options: [
      { id: 'opt1', text: "Connect to any open network available", correct: false },
      { id: 'opt2', text: "Ask café staff for the official Wi-Fi name", correct: true },
      { id: 'opt3', text: "Use VPN when connected", correct: true },
      { id: 'opt4', text: "Access your mobile banking", correct: false },
      { id: 'opt5', text: "Avoid sensitive websites and transactions", correct: true },
      { id: 'opt6', text: "Turn off Wi-Fi auto-connect", correct: true }
    ],
    explanation: "On public Wi-Fi: Always verify the network name with staff, use a VPN for encryption, avoid sensitive activities like banking, and disable auto-connect to prevent connecting to malicious networks."
  },
  {
    scenario: "You're setting up a new smartphone. Select ALL the security features you should enable:",
    options: [
      { id: 'opt1', text: "Screen lock with PIN or biometrics", correct: true },
      { id: 'opt2', text: "Allow apps from unknown sources", correct: false },
      { id: 'opt3', text: "Enable automatic updates", correct: true },
      { id: 'opt4', text: "Grant all app permissions by default", correct: false },
      { id: 'opt5', text: "Enable Find My Device feature", correct: true },
      { id: 'opt6', text: "Install apps only from official stores", correct: true }
    ],
    explanation: "Essential mobile security: Use screen lock, enable automatic updates and Find My Device, only install apps from official stores, and carefully review app permissions—don't grant unnecessary access."
  }
];

// Threat scenarios
const threatScenarios = [
  {
    threat: "🚨 ALERT: Your phone shows a popup saying 'VIRUS DETECTED! Your phone is 85% damaged. Download CleanMaster Pro immediately to fix.' What do you do?",
    options: [
      { text: "Download the recommended app immediately", correct: false },
      { text: "Close the popup and run a legitimate antivirus scan", correct: true },
      { text: "Click 'Allow' to let it fix the problems", correct: false },
      { text: "Share the alert with friends to warn them", correct: false }
    ],
    explanation: "This is a FAKE virus alert (scareware)! Never download apps from suspicious popups. Close it immediately and use legitimate antivirus software if you're concerned. These fake alerts try to scare you into installing malware."
  },
  {
    threat: "🚨 SITUATION: You receive a call: 'This is FNB security. Someone tried to access your account. Please confirm your PIN to secure it.' What's your response?",
    options: [
      { text: "Provide your PIN to secure the account", correct: false },
      { text: "Hang up and call FNB directly using the official number", correct: true },
      { text: "Ask them to email you the details first", correct: false },
      { text: "Transfer money to a 'safe account' they provide", correct: false }
    ],
    explanation: "This is a social engineering attack! Banks NEVER ask for PINs, passwords, or OTPs over the phone. Always hang up and call the official number yourself. Never trust caller ID as it can be spoofed."
  },
  {
    threat: "🚨 WARNING: Your computer screen locks with: 'Your files are encrypted. Pay P10,000 in Bitcoin to unlock them.' What should you do?",
    options: [
      { text: "Pay the ransom immediately to get files back", correct: false },
      { text: "Disconnect from internet and seek professional help", correct: true },
      { text: "Try to negotiate a lower ransom price", correct: false },
      { text: "Restart computer hoping it will go away", correct: false }
    ],
    explanation: "This is RANSOMWARE! Never pay criminals—there's no guarantee they'll decrypt your files. Immediately disconnect from internet to prevent spread, seek professional cybersecurity help, and restore from backups if available."
  },
  {
    threat: "🚨 EMAIL: 'Your Amazon package couldn't be delivered. Update your payment info: amaz0n-delivery.com/update' What do you do?",
    options: [
      { text: "Click the link and update payment information", correct: false },
      { text: "Go directly to Amazon.com and check your account", correct: true },
      { text: "Reply to the email asking for more details", correct: false },
      { text: "Forward it to friends who shop on Amazon", correct: false }
    ],
    explanation: "This is a PHISHING email! The domain 'amaz0n-delivery.com' is fake (note the zero instead of 'o'). Never click links in suspicious emails. Always go directly to the official website by typing the URL yourself."
  },
  {
    threat: "🚨 SOCIAL MEDIA: Your friend's account messages you: 'I'm stuck abroad and lost my wallet. Can you send me P5,000? I'll pay you back tomorrow!' What's your move?",
    options: [
      { text: "Send the money immediately to help your friend", correct: false },
      { text: "Call your friend directly to verify it's really them", correct: true },
      { text: "Ask them security questions via message", correct: false },
      { text: "Send a smaller amount to be safe", correct: false }
    ],
    explanation: "This is account HIJACKING! Criminals hack accounts and message friends asking for money. Always verify through a different communication channel (phone call, video chat). If your friend was really in trouble, they'd call you."
  }
];

// Current indices
let currentPhishingIndex = 0;
let currentSettingsIndex = 0;
let currentThreatIndex = 0;
let selectedSettings = [];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  initializeCourse();
  initializeGames();
  setupEventListeners();
});

function initializeCourse() {
  updateProgress();
  loadChapter(1);
}

function initializeGames() {
  updateMainDisplay();
  loadNextPhishingScenario();
  loadNextSettingsScenario();
  loadNextThreatScenario();
}

function setupEventListeners() {
  // Chapter navigation
  document.querySelectorAll('.chapter-item').forEach(item => {
    item.addEventListener('click', function() {
      const chapterNum = parseInt(this.dataset.chapter);
      if (!this.classList.contains('locked')) {
        loadChapter(chapterNum);
      }
    });
  });

  // Next chapter buttons
  document.querySelectorAll('.next-chapter').forEach(btn => {
    btn.addEventListener('click', function() {
      const nextChapter = parseInt(this.dataset.next);
      completeChapter(courseState.currentChapter);
      loadChapter(nextChapter);
    });
  });

  // Previous chapter buttons
  document.querySelectorAll('.prev-chapter').forEach(btn => {
    btn.addEventListener('click', function() {
      const prevChapter = parseInt(this.dataset.prev);
      loadChapter(prevChapter);
    });
  });

  // Quiz submission
  const quizForm = document.getElementById('quiz-chapter-3');
  if (quizForm) {
    quizForm.addEventListener('submit', function(e) {
      e.preventDefault();
      checkQuizAnswers(3);
    });
  }
}

function loadChapter(chapterNum) {
  document.querySelectorAll('.chapter-content').forEach(chapter => {
    chapter.style.display = 'none';
  });

  const selectedChapter = document.getElementById(`chapter-${chapterNum}`);
  if (selectedChapter) {
    selectedChapter.style.display = 'block';
    courseState.currentChapter = chapterNum;

    document.querySelectorAll('.chapter-item').forEach(item => {
      item.classList.remove('active');
      if (parseInt(item.dataset.chapter) === chapterNum) {
        item.classList.add('active');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function completeChapter(chapterNum) {
  if (!courseState.completedChapters.includes(chapterNum)) {
    courseState.completedChapters.push(chapterNum);
    
    const chapterItem = document.querySelector(`.chapter-item[data-chapter="${chapterNum}"]`);
    if (chapterItem) {
      chapterItem.classList.add('completed');
      const icon = chapterItem.querySelector('.chapter-icon');
      if (icon) icon.textContent = '✓';
    }

    const nextChapterNum = chapterNum + 1;
    if (nextChapterNum <= courseState.totalChapters) {
      unlockChapter(nextChapterNum);
    }

    updateProgress();
  }
}

function unlockChapter(chapterNum) {
  const chapterItem = document.querySelector(`.chapter-item[data-chapter="${chapterNum}"]`);
  if (chapterItem) {
    chapterItem.classList.remove('locked');
    const icon = chapterItem.querySelector('.chapter-icon');
    if (icon) icon.textContent = '▶';
  }
}

function updateProgress() {
  const completed = courseState.completedChapters.length;
  const total = courseState.totalChapters;
  const percentage = Math.round((completed / total) * 100);

  const progressBar = document.getElementById('courseProgress');
  const progressText = document.getElementById('progressText');

  if (progressBar) {
    progressBar.style.width = percentage + '%';
    progressBar.textContent = percentage + '%';
  }

  if (progressText) {
    progressText.textContent = `${completed}/${total}`;
  }
}

function checkQuizAnswers(chapterNum) {
  const form = document.getElementById(`quiz-chapter-${chapterNum}`);
  const feedback = document.getElementById(`feedback-chapter-${chapterNum}`);
  
  if (!form || !feedback) return;

  const answers = quizAnswers[`chapter${chapterNum}`];
  let correct = 0;
  let total = Object.keys(answers).length;

  for (let question in answers) {
    const selected = form.querySelector(`input[name="${question}"]:checked`);
    if (selected && selected.value === answers[question]) {
      correct++;
    }
  }

  const percentage = Math.round((correct / total) * 100);
  const passed = percentage >= 70;

  feedback.className = 'quiz-feedback show ' + (passed ? 'correct' : 'incorrect');
  
  if (passed) {
    feedback.innerHTML = `
      <strong style="color: #34d399;">✓ Excellent!</strong>
      <p class="mb-0 mt-2">You got ${correct} out of ${total} correct (${percentage}%). Moving to next chapter...</p>
    `;
    completeChapter(chapterNum);
    setTimeout(() => loadChapter(chapterNum + 1), 2000);
  } else {
    feedback.innerHTML = `
      <strong style="color: #f43f5e;">Keep trying!</strong>
      <p class="mb-0 mt-2">You got ${correct} out of ${total} correct (${percentage}%). Review the material and try again. You need 70% to pass.</p>
    `;
  }
}

// ===== GAME 1: PASSWORD STRENGTH =====

function testPassword() {
  const password = document.getElementById('passwordInput').value;
  const resultDiv = document.getElementById('passwordResult');
  const strengthFill = document.getElementById('strengthFill');
  
  if (!password) {
    alert('Please enter a password to test!');
    return;
  }

  gameStats.passwordsTestedCount++;
  
  let score = 0;
  let feedback = [];
  let bonuses = [];

  // Length scoring
  if (password.length >= 12) {
    score += 25;
    bonuses.push('✅ Excellent length (12+ characters)');
  } else if (password.length >= 8) {
    score += 15;
    feedback.push('⚠️ Good, but consider 12+ characters');
  } else {
    score += 5;
    feedback.push('❌ Too short! Use at least 12 characters');
  }

  // Character variety
  if (/[a-z]/.test(password)) {
    score += 10;
    bonuses.push('✅ Contains lowercase letters');
  } else {
    feedback.push('❌ Add lowercase letters (a-z)');
  }
  
  if (/[A-Z]/.test(password)) {
    score += 10;
    bonuses.push('✅ Contains uppercase letters');
  } else {
    feedback.push('❌ Add uppercase letters (A-Z)');
  }
  
  if (/[0-9]/.test(password)) {
    score += 10;
    bonuses.push('✅ Contains numbers');
  } else {
    feedback.push('❌ Add numbers (0-9)');
  }
  
  if (/[^a-zA-Z0-9]/.test(password)) {
    score += 15;
    bonuses.push('✅ Contains special characters');
  } else {
    feedback.push('❌ Add special characters (!@#$%^&*)');
  }

  // Common password check
  if (commonPasswords.includes(password.toLowerCase())) {
    score -= 30;
    feedback.push('❌ This is a commonly used password!');
  }

  // Pattern detection
  if (/(.)\1{2,}/.test(password)) {
    score -= 10;
    feedback.push('⚠️ Avoid repeating characters (aaa, 111)');
  }

  if (/123|abc|qwe/i.test(password)) {
    score -= 15;
    feedback.push('⚠️ Avoid sequential patterns (123, abc)');
  }

  // Personal info detection
  if (/password|admin|user|name|birth|year|2024|2025/i.test(password)) {
    score -= 10;
    feedback.push('⚠️ Avoid common words and years');
  }

  score = Math.max(0, Math.min(100, score));

  // Determine strength
  let strength, color, advice;
  if (score >= 80) {
    strength = 'EXCELLENT';
    color = '#22c55e';
    advice = '🛡️ This is a very strong password!';
    if (gameStats.strongPasswordsCreated === 0) {
      gameStats.strongPasswordsCreated++;
      gameStats.totalScore += 50;
      gameStats.passwordScore = 50;
      updateMainDisplay();
    }
  } else if (score >= 60) {
    strength = 'GOOD';
    color = '#3b82f6';
    advice = '👍 Decent password, but could be stronger';
  } else if (score >= 40) {
    strength = 'FAIR';
    color = '#f59e0b';
    advice = '⚠️ This password needs improvement';
  } else {
    strength = 'WEAK';
    color = '#ef4444';
    advice = '❌ This password is too weak!';
  }

  // Update strength meter
  strengthFill.style.width = score + '%';
  strengthFill.style.background = color;

  // Display results
  let resultHTML = `
    <div style="color: ${color}; font-weight: bold; font-size: 20px; margin-bottom: 10px;">
      ${strength} - ${score}/100 points
    </div>
    <p style="font-size: 16px;"><strong>${advice}</strong></p>
  `;

  if (bonuses.length > 0) {
    resultHTML += '<div style="margin: 15px 0;"><strong>Strengths:</strong><ul style="margin: 5px 0;">';
    bonuses.forEach(bonus => {
      resultHTML += `<li>${bonus}</li>`;
    });
    resultHTML += '</ul></div>';
  }

  if (feedback.length > 0) {
    resultHTML += '<div style="margin: 15px 0;"><strong>Improvements:</strong><ul style="margin: 5px 0;">';
    feedback.forEach(item => {
      resultHTML += `<li>${item}</li>`;
    });
    resultHTML += '</ul></div>';
  }

  resultHTML += `<p style="font-size: 14px; color: #666; margin-top: 15px;">Passwords tested: ${gameStats.passwordsTestedCount}</p>`;

  resultDiv.innerHTML = resultHTML;
  resultDiv.style.display = 'block';

  if (gameStats.passwordsTestedCount === 1) {
    gameStats.totalScore += 10;
    updateMainDisplay();
  }
}

function showPasswordTips() {
  const tipsDiv = document.getElementById('passwordTips');
  if (tipsDiv.style.display === 'none') {
    tipsDiv.innerHTML = `
      <h5 style="color: #8a2be2; margin-bottom: 10px;">💡 Password Creation Tips</h5>
      <ul style="line-height: 1.8;">
        <li><strong>Use passphrases:</strong> "Coffee@Morning#Run!" is easier to remember than random characters</li>
        <li><strong>Substitute characters:</strong> Replace 'o' with '0', 'a' with '@', 'i' with '!'</li>
        <li><strong>Add randomness:</strong> Mix in numbers and symbols throughout</li>
        <li><strong>Make it meaningful to you only:</strong> Use phrases only you would know</li>
        <li><strong>Example:</strong> "MyDog!Loves2Run@7AM" (but create your own!)</li>
      </ul>
      <p style="background: #fff3cd; padding: 10px; border-radius: 5px; margin-top: 10px;">
        <strong>Pro Tip:</strong> Use a password manager like LastPass or 1Password to generate and securely store unique passwords for all your accounts!
      </p>
    `;
    tipsDiv.style.display = 'block';
  } else {
    tipsDiv.style.display = 'none';
  }
}

// ===== GAME 2: PHISHING DETECTIVE =====

function loadNextPhishingScenario() {
  if (currentPhishingIndex >= phishingScenarios.length) {
    document.getElementById('phishingScenario').innerHTML = 
      '<p style="color: #22c55e; font-weight: bold; font-size: 18px;">🎉 Completed! You\'ve analyzed all phishing scenarios!</p>';
    if (gameStats.phishingTotal > 0 && !gameStats.gamesCompleted.toString().includes('2')) {
      gameStats.gamesCompleted++;
      updateMainDisplay();
    }
    return;
  }

  const scenario = phishingScenarios[currentPhishingIndex];
  document.getElementById('phishingScenario').textContent = scenario.content;
  document.getElementById('phishingFeedback').style.display = 'none';
  
  // Enable buttons
  document.querySelectorAll('#phishingGame .option-btn').forEach(btn => {
    btn.disabled = false;
    btn.className = 'option-btn';
  });
}

function reportPhishing(userSaysPhishing) {
  const scenario = phishingScenarios[currentPhishingIndex];
  const correct = userSaysPhishing === scenario.isPhishing;
  const feedbackDiv = document.getElementById('phishingFeedback');
  
  gameStats.phishingTotal++;
  
  if (correct) {
    gameStats.phishingScore++;
    gameStats.totalScore += 20;
    feedbackDiv.innerHTML = `
      <div style="color: #22c55e; font-weight: bold; font-size: 18px; margin-bottom: 10px;">✅ Correct!</div>
      <p style="font-size: 16px;">${scenario.explanation}</p>
    `;
    feedbackDiv.style.border = '2px solid #22c55e';
    feedbackDiv.style.background = 'rgba(34, 197, 94, 0.1)';
  } else {
    feedbackDiv.innerHTML = `
      <div style="color: #ef4444; font-weight: bold; font-size: 18px; margin-bottom: 10px;">❌ Incorrect</div>
      <p style="font-size: 16px;">${scenario.explanation}</p>
    `;
    feedbackDiv.style.border = '2px solid #ef4444';
    feedbackDiv.style.background = 'rgba(239, 68, 68, 0.1)';
  }
  
  feedbackDiv.style.display = 'block';
  
  document.getElementById('phishingScore').textContent = gameStats.phishingScore;
  document.getElementById('phishingTotal').textContent = gameStats.phishingTotal;
  updateMainDisplay();
  
  // Disable buttons after selection
  document.querySelectorAll('#phishingGame .option-btn').forEach(btn => {
    btn.disabled = true;
  });
}

function nextPhishingScenario() {
  currentPhishingIndex++;
  loadNextPhishingScenario();
}

// ===== GAME 3: SECURITY SETTINGS =====

function loadNextSettingsScenario() {
  if (currentSettingsIndex >= settingsScenarios.length) {
    document.getElementById('settingsScenario').innerHTML = 
      '🎉 All scenarios completed! You\'ve mastered security settings!';
    document.getElementById('settingsOptions').innerHTML = '';
    if (gameStats.settingsTotal > 0 && !gameStats.gamesCompleted.toString().includes('3')) {
      gameStats.gamesCompleted++;
      updateMainDisplay();
    }
    return;
  }

  const scenario = settingsScenarios[currentSettingsIndex];
  selectedSettings = [];
  
  document.getElementById('settingsScenario').textContent = scenario.scenario;
  document.getElementById('settingsFeedback').style.display = 'none';
  
  let optionsHTML = '';
  scenario.options.forEach(option => {
    optionsHTML += `
      <div style="margin-bottom: 10px;">
        <label style="display: flex; align-items: center; padding: 12px; border: 2px solid #ddd; border-radius: 8px; cursor: pointer; background: white;">
          <input type="checkbox" value="${option.id}" onchange="toggleSetting('${option.id}')" style="margin-right: 10px; width: 20px; height: 20px;">
          <span style="color: #000; font-size: 15px;">${option.text}</span>
        </label>
      </div>
    `;
  });
  
  document.getElementById('settingsOptions').innerHTML = optionsHTML;
}

function toggleSetting(optionId) {
  if (selectedSettings.includes(optionId)) {
    selectedSettings = selectedSettings.filter(id => id !== optionId);
  } else {
    selectedSettings.push(optionId);
  }
}

function submitSettings() {
  const scenario = settingsScenarios[currentSettingsIndex];
  const correctOptions = scenario.options.filter(opt => opt.correct).map(opt => opt.id);
  
  gameStats.settingsTotal++;
  
  const correctSelected = correctOptions.filter(id => selectedSettings.includes(id)).length;
  const incorrectSelected = selectedSettings.filter(id => !correctOptions.includes(id)).length;
  const missedCorrect = correctOptions.filter(id => !selectedSettings.includes(id)).length;
  
  const score = correctSelected - incorrectSelected;
  const maxScore = correctOptions.length;
  const percentage = Math.round((correctSelected / maxScore) * 100);
  
  const feedbackDiv = document.getElementById('settingsFeedback');
  
  if (score === maxScore && incorrectSelected === 0) {
    gameStats.settingsScore++;
    gameStats.totalScore += 25;
    feedbackDiv.innerHTML = `
      <div style="color: #22c55e; font-weight: bold; font-size: 18px; margin-bottom: 10px;">✅ Perfect!</div>
      <p style="font-size: 16px;">You selected all the correct settings! ${scenario.explanation}</p>
    `;
    feedbackDiv.style.border = '2px solid #22c55e';
    feedbackDiv.style.background = 'rgba(34, 197, 94, 0.1)';
  } else {
    let message = `You got ${correctSelected} out of ${maxScore} correct settings (${percentage}%).`;
    if (incorrectSelected > 0) message += ` You selected ${incorrectSelected} incorrect setting(s).`;
    if (missedCorrect > 0) message += ` You missed ${missedCorrect} correct setting(s).`;
    
    feedbackDiv.innerHTML = `
      <div style="color: #ef4444; font-weight: bold; font-size: 18px; margin-bottom: 10px;">❌ Not quite right</div>
      <p style="font-size: 16px;">${message}</p>
      <p style="font-size: 15px; margin-top: 10px;"><strong>Explanation:</strong> ${scenario.explanation}</p>
    `;
    feedbackDiv.style.border = '2px solid #ef4444';
    feedbackDiv.style.background = 'rgba(239, 68, 68, 0.1)';
  }
  
  feedbackDiv.style.display = 'block';
  
  document.getElementById('settingsScore').textContent = gameStats.settingsScore;
  document.getElementById('settingsTotal').textContent = gameStats.settingsTotal;
  updateMainDisplay();
}

function nextSettingsScenario() {
  currentSettingsIndex++;
  loadNextSettingsScenario();
}

// ===== GAME 4: THREAT RESPONSE =====

function loadNextThreatScenario() {
  if (currentThreatIndex >= threatScenarios.length) {
    document.getElementById('threatScenario').innerHTML = 
      '<p style="color: #22c55e; font-weight: bold; font-size: 18px;">🎉 Excellent work! You\'ve handled all cyber threats!</p>';
    document.getElementById('threatOptions').innerHTML = '';
    if (gameStats.threatTotal > 0 && gameStats.gamesCompleted < 4) {
      gameStats.gamesCompleted = 4;
      updateMainDisplay();
    }
    return;
  }

  const scenario = threatScenarios[currentThreatIndex];
  
  document.getElementById('threatScenario').innerHTML = `
    <h5 style="color: #dc2626; font-weight: bold; margin-bottom: 15px;">Threat ${currentThreatIndex + 1} of ${threatScenarios.length}</h5>
    <p style="font-size: 16px; color: #000; line-height: 1.6;">${scenario.threat}</p>
  `;
  
  document.getElementById('threatFeedback').style.display = 'none';
  
  let optionsHTML = '';
  scenario.options.forEach((option, index) => {
    optionsHTML += `
      <button class="option-btn" onclick="selectThreatResponse(${index})" style="margin-bottom: 10px;">
        <strong>Option ${String.fromCharCode(65 + index)}:</strong> ${option.text}
      </button>
    `;
  });
  
  document.getElementById('threatOptions').innerHTML = optionsHTML;
}

function selectThreatResponse(optionIndex) {
  const scenario = threatScenarios[currentThreatIndex];
  const selected = scenario.options[optionIndex];
  const feedbackDiv = document.getElementById('threatFeedback');
  
  gameStats.threatTotal++;
  
  // Disable all buttons
  document.querySelectorAll('#threatOptions .option-btn').forEach((btn, idx) => {
    btn.disabled = true;
    if (scenario.options[idx].correct) {
      btn.classList.add('correct');
    } else if (idx === optionIndex && !selected.correct) {
      btn.classList.add('incorrect');
    }
  });
  
  if (selected.correct) {
    gameStats.threatScore++;
    gameStats.totalScore += 30;
    feedbackDiv.innerHTML = `
      <div style="color: #22c55e; font-weight: bold; font-size: 18px; margin-bottom: 10px;">✅ Correct Response!</div>
      <p style="font-size: 16px; color: #000;"><strong>Explanation:</strong> ${scenario.explanation}</p>
    `;
    feedbackDiv.style.border = '2px solid #22c55e';
    feedbackDiv.style.background = 'rgba(34, 197, 94, 0.1)';
  } else {
    feedbackDiv.innerHTML = `
      <div style="color: #ef4444; font-weight: bold; font-size: 18px; margin-bottom: 10px;">❌ Incorrect Response</div>
      <p style="font-size: 16px; color: #000;"><strong>Explanation:</strong> ${scenario.explanation}</p>
    `;
    feedbackDiv.style.border = '2px solid #ef4444';
    feedbackDiv.style.background = 'rgba(239, 68, 68, 0.1)';
  }
  
  feedbackDiv.style.display = 'block';
  
  document.getElementById('threatScore').textContent = gameStats.threatScore;
  document.getElementById('threatTotal').textContent = gameStats.threatTotal;
  updateMainDisplay();
}

function nextThreatScenario() {
  currentThreatIndex++;
  loadNextThreatScenario();
}

// ===== MAIN DISPLAY UPDATE =====

function updateMainDisplay() {
  document.getElementById('totalScore').textContent = gameStats.totalScore;
  document.getElementById('gamesCompleted').textContent = gameStats.gamesCompleted;
  
  // Update security level based on total score
  let level;
  if (gameStats.totalScore >= 300) {
    level = 'Cybersecurity Expert 🏆';
  } else if (gameStats.totalScore >= 200) {
    level = 'Advanced User 🛡️';
  } else if (gameStats.totalScore >= 100) {
    level = 'Intermediate User 🔒';
  } else if (gameStats.totalScore >= 50) {
    level = 'Learning User 📚';
  } else {
    level = 'Beginner 🌱';
  }
  
  document.getElementById('securityLevel').textContent = level;
}

// ===== RESET FUNCTION =====

function resetAllGames() {
  if (!confirm('Are you sure you want to reset all game progress? This cannot be undone.')) {
    return;
  }
  
  // Reset game stats
  gameStats = {
    totalScore: 0,
    gamesCompleted: 0,
    passwordScore: 0,
    phishingScore: 0,
    phishingTotal: 0,
    settingsScore: 0,
    settingsTotal: 0,
    threatScore: 0,
    threatTotal: 0,
    passwordsTestedCount: 0,
    strongPasswordsCreated: 0
  };
  
  // Reset game indices
  currentPhishingIndex = 0;
  currentSettingsIndex = 0;
  currentThreatIndex = 0;
  selectedSettings = [];
  
  // Clear displays
  document.getElementById('passwordInput').value = '';
  document.getElementById('passwordResult').style.display = 'none';
  document.getElementById('passwordTips').style.display = 'none';
  document.getElementById('strengthFill').style.width = '0%';
  
  document.getElementById('phishingScore').textContent = '0';
  document.getElementById('phishingTotal').textContent = '0';
  
  document.getElementById('settingsScore').textContent = '0';
  document.getElementById('settingsTotal').textContent = '0';
  
  document.getElementById('threatScore').textContent = '0';
  document.getElementById('threatTotal').textContent = '0';
  
  // Reload games
  updateMainDisplay();
  loadNextPhishingScenario();
  loadNextSettingsScenario();
  loadNextThreatScenario();
  
  alert('All games have been reset. Start fresh!');
}
