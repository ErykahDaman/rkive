// Digital Literacy Module JavaScript

// Course state
let courseState = {
  completedChapters: [],
  currentChapter: 1,
  totalChapters: 8
};

// Game state
let gameState = {
  totalScore: 0,
  gamesCompleted: 0,
  quizScore: 0,
  quizTotal: 0,
  currentQuiz: 0,
  scenarioScore: 0,
  scenarioTotal: 0,
  currentScenario: 0,
  deviceScore: 0,
  deviceTotal: 0,
  currentDevice: 0,
  safetyScore: 0,
  safetyTotal: 0,
  currentSafety: 0,
  matchingCompleted: false
};

// Quiz questions
const quizQuestions = [
  {
    question: "What should you do before downloading an app?",
    options: [
      "Download immediately if it's free",
      "Check reviews and permissions",
      "Ask friends on social media",
      "Download from any website"
    ],
    correct: 1,
    explanation: "Always check app reviews, ratings, and permissions before downloading. Only download from official app stores."
  },
  {
    question: "What makes a strong password?",
    options: [
      "Your name and birthday",
      "At least 12 characters with mixed types",
      "The same password for all accounts",
      "Simple words that are easy to remember"
    ],
    correct: 1,
    explanation: "Strong passwords should be at least 12 characters long and include uppercase, lowercase, numbers, and symbols."
  },
  {
    question: "How often should you back up important files?",
    options: [
      "Once a year",
      "Only when you remember",
      "Regularly (weekly/monthly)",
      "Never, it's not necessary"
    ],
    correct: 2,
    explanation: "Regular backups (weekly or monthly) protect your data from loss due to device failure or cyber attacks."
  },
  {
    question: "What is the safest way to connect to internet while traveling?",
    options: [
      "Use any free Wi-Fi available",
      "Use mobile data or trusted networks",
      "Connect to networks without passwords",
      "Share Wi-Fi passwords publicly"
    ],
    correct: 1,
    explanation: "Mobile data or verified trusted networks are safest. Avoid public Wi-Fi for sensitive activities."
  },
  {
    question: "What should you do if you receive a suspicious email?",
    options: [
      "Click all links to investigate",
      "Delete it immediately without opening",
      "Forward it to all your contacts",
      "Reply asking for more information"
    ],
    correct: 1,
    explanation: "Delete suspicious emails without opening attachments or clicking links. Report phishing attempts."
  },
  {
    question: "Which file format is commonly used for documents?",
    options: [".mp3", ".pdf", ".jpg", ".exe"],
    correct: 1,
    explanation: "PDF (.pdf) is a common document format. .mp3 is audio, .jpg is images, .exe is programs."
  },
  {
    question: "What does 'cloud storage' mean?",
    options: [
      "Storage in the sky",
      "Saving files on internet servers",
      "Storage that moves around",
      "A type of weather app"
    ],
    correct: 1,
    explanation: "Cloud storage means saving files on remote servers accessible via internet from any device."
  },
  {
    question: "When shopping online, what should you look for?",
    options: [
      "Lowest prices only",
      "HTTPS and secure payment methods",
      "No customer reviews",
      "Websites without contact info"
    ],
    correct: 1,
    explanation: "Look for HTTPS security, secure payment methods, good reviews, and legitimate contact information."
  },
  {
    question: "What is two-factor authentication (2FA)?",
    options: [
      "Using two passwords",
      "An extra security step beyond password",
      "Having two user accounts",
      "A type of antivirus"
    ],
    correct: 1,
    explanation: "2FA adds an extra security layer by requiring a second form of verification beyond your password."
  },
  {
    question: "How can you identify reliable information online?",
    options: [
      "If it's on social media, it's true",
      "Check multiple credible sources",
      "Believe everything you read",
      "Only trust information from friends"
    ],
    correct: 1,
    explanation: "Always verify information by checking multiple credible sources and fact-checking websites."
  }
];

// Scenario data
const scenarios = [
  {
    scenario: "You're setting up a new smartphone. A flashlight app asks for location, contacts, photos, and microphone access.",
    options: [
      "Allow all permissions - it must need them",
      "Only allow necessary permissions",
      "Deny all permissions completely",
      "Ask friends what they would do"
    ],
    correct: 1,
    explanation: "A flashlight app shouldn't need contacts, photos, or microphone. Only grant necessary permissions."
  },
  {
    scenario: "You receive a WhatsApp message from unknown number: 'Congratulations! You won P50,000! Click this link to claim.'",
    options: [
      "Click the link immediately",
      "Share the link with friends",
      "Delete the message and block the number",
      "Reply asking for more details"
    ],
    correct: 2,
    explanation: "This is a classic scam. Legitimate prizes don't come from unknown numbers. Delete and block."
  },
  {
    scenario: "Your computer is slow and a popup says 'Your computer is infected! Download CleanMyPC Pro now!'",
    options: [
      "Download the software immediately",
      "Close popup and run legitimate antivirus",
      "Click on the popup to learn more",
      "Restart computer and ignore it"
    ],
    correct: 1,
    explanation: "This is a scareware scam. Close the popup and use legitimate antivirus software to scan."
  },
  {
    scenario: "You want to buy something online. The website doesn't have HTTPS and asks for card details.",
    options: [
      "Enter card details to complete purchase",
      "Leave the website and find secure one",
      "Use someone else's card",
      "Call the website owner"
    ],
    correct: 1,
    explanation: "Never enter payment info on non-HTTPS sites. Look for the lock icon and 'https://' in URL."
  },
  {
    scenario: "Your friend tags you in an embarrassing photo on Facebook without asking.",
    options: [
      "Comment angrily on the photo",
      "Untag yourself and message them privately",
      "Share the photo to get revenge",
      "Report your friend to Facebook"
    ],
    correct: 1,
    explanation: "Handle it maturely - untag yourself and privately ask your friend to remove it."
  }
];

// Device challenges
const deviceChallenges = [
  {
    device: "Smartphone",
    question: "Your phone battery drains quickly. What should you do first?",
    options: [
      "Buy a new phone",
      "Check battery usage in settings",
      "Keep it plugged in always",
      "Turn off the phone"
    ],
    correct: 1,
    explanation: "Check Settings > Battery to see which apps use most power. Close unnecessary apps."
  },
  {
    device: "Computer",
    question: "You accidentally deleted an important file. What should you try?",
    options: [
      "Give up, it's gone forever",
      "Check the Recycle Bin/Trash",
      "Buy data recovery software immediately",
      "Restart the computer"
    ],
    correct: 1,
    explanation: "First check Recycle Bin (Windows) or Trash (Mac). Files stay there until permanently deleted."
  },
  {
    device: "Tablet",
    question: "Your tablet storage is full. What's the best solution?",
    options: [
      "Delete all photos immediately",
      "Move files to cloud storage or external drive",
      "Stop using the tablet",
      "Buy a new tablet"
    ],
    correct: 1,
    explanation: "Move old files to cloud storage (Google Drive, iCloud) or external storage to free space."
  },
  {
    device: "Smartphone",
    question: "An app keeps crashing. What should you try?",
    options: [
      "Uninstall and reinstall the app",
      "Throw away the phone",
      "Ignore it and use different app",
      "Call the phone manufacturer"
    ],
    correct: 0,
    explanation: "Try uninstalling and reinstalling the app, or check for updates in the app store."
  },
  {
    device: "Computer",
    question: "Your computer is very slow. What basic step helps?",
    options: [
      "Hit it to make it work faster",
      "Close unused programs and browser tabs",
      "Download a 'speed booster' program",
      "Leave it as is"
    ],
    correct: 1,
    explanation: "Close unnecessary programs and browser tabs. Too many open programs slow down your computer."
  }
];

// Safety scenarios
const safetyScenarios = [
  {
    scenario: "🚨 You receive an email claiming to be from your bank asking you to 'verify your account' by clicking a link.",
    options: [
      "Click the link and enter your details",
      "Call your bank using official number",
      "Reply to the email with your info",
      "Forward it to friends for advice"
    ],
    correct: 1,
    explanation: "Banks never ask for details via email. Call the bank directly using the number on their official website or your card."
  },
  {
    scenario: "🚨 A website offers a free download of expensive software. It seems too good to be true.",
    options: [
      "Download it - it's free!",
      "Don't download - likely malware",
      "Download and scan later",
      "Share with friends first"
    ],
    correct: 1,
    explanation: "If it seems too good to be true, it probably is. Free 'cracked' software often contains malware."
  },
  {
    scenario: "🚨 You're on public Wi-Fi. You need to check your bank balance.",
    options: [
      "Log in normally - Wi-Fi is Wi-Fi",
      "Wait until you're on secure network",
      "Use someone else's phone",
      "Shout your password to ask for help"
    ],
    correct: 1,
    explanation: "Never access banking or sensitive info on public Wi-Fi. Wait for secure network or use mobile data."
  },
  {
    scenario: "🚨 A pop-up says you won a prize and asks for your ID number and address to deliver it.",
    options: [
      "Provide all details to get prize",
      "Close popup - it's a scam",
      "Provide only ID number",
      "Call the police immediately"
    ],
    correct: 1,
    explanation: "Legitimate prizes never ask for personal details via popup. This is identity theft attempt."
  },
  {
    scenario: "🚨 Your friend's social media account sends you a strange message with a link.",
    options: [
      "Click the link - it's your friend",
      "Message them another way to verify",
      "Click and share with others",
      "Reply with your personal info"
    ],
    correct: 1,
    explanation: "Their account may be hacked. Verify via phone call or different platform before clicking links."
  }
];

// Drag and drop state
let draggedElement = null;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  initializeCourse();
  initializeGames();
  setupEventListeners();
  setupDragAndDrop();
});

function initializeCourse() {
  updateProgress();
  loadChapter(1);
}

function initializeGames() {
  updateMainDisplay();
  loadQuestion();
  loadScenario();
  loadDevice();
  loadSafety();
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

  // Next/Previous buttons
  document.querySelectorAll('.next-chapter').forEach(btn => {
    btn.addEventListener('click', function() {
      const nextChapter = parseInt(this.dataset.next);
      completeChapter(courseState.currentChapter);
      loadChapter(nextChapter);
    });
  });

  document.querySelectorAll('.prev-chapter').forEach(btn => {
    btn.addEventListener('click', function() {
      const prevChapter = parseInt(this.dataset.prev);
      loadChapter(prevChapter);
    });
  });
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

// ===== GAME 1: DRAG AND DROP =====

function setupDragAndDrop() {
  const dragItems = document.querySelectorAll('.drag-item');
  const dropZones = document.querySelectorAll('.drop-zone');

  dragItems.forEach(item => {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
  });

  dropZones.forEach(zone => {
    zone.addEventListener('dragover', handleDragOver);
    zone.addEventListener('drop', handleDrop);
    zone.addEventListener('dragleave', handleDragLeave);
  });
}

function handleDragStart(e) {
  draggedElement = e.target;
  e.target.style.opacity = '0.5';
}

function handleDragEnd(e) {
  e.target.style.opacity = '1';
}

function handleDragOver(e) {
  e.preventDefault();
  e.currentTarget.classList.add('hover');
}

function handleDragLeave(e) {
  e.currentTarget.classList.remove('hover');
}

function handleDrop(e) {
  e.preventDefault();
  e.currentTarget.classList.remove('hover');
  
  if (draggedElement) {
    e.currentTarget.appendChild(draggedElement);
  }
}

function checkMatches() {
  const dropZones = document.querySelectorAll('.drop-zone');
  let correct = 0;
  let total = dropZones.length;

  dropZones.forEach(zone => {
    const answer = zone.dataset.answer;
    const droppedItem = zone.querySelector('.drag-item');
    
    zone.classList.remove('correct', 'incorrect');
    
    if (droppedItem) {
      if (droppedItem.dataset.id === answer) {
        zone.classList.add('correct');
        correct++;
      } else {
        zone.classList.add('incorrect');
      }
    }
  });

  const feedback = document.getElementById('matchFeedback');
  const percentage = Math.round((correct / total) * 100);

  if (correct === total) {
    feedback.style.display = 'block';
    feedback.style.background = 'rgba(52, 211, 153, 0.2)';
    feedback.style.border = '2px solid #34d399';
    feedback.style.color = '#059669';
    feedback.innerHTML = `<strong>✅ Perfect!</strong><p>You matched all ${correct} terms correctly (${percentage}%)!</p>`;
    
    if (!gameState.matchingCompleted) {
      gameState.matchingCompleted = true;
      gameState.totalScore += 50;
      gameState.gamesCompleted++;
      updateMainDisplay();
    }
  } else {
    feedback.style.display = 'block';
    feedback.style.background = 'rgba(244, 63, 94, 0.2)';
    feedback.style.border = '2px solid #f43f5e';
    feedback.style.color = '#dc2626';
    feedback.innerHTML = `<strong>Try again!</strong><p>You got ${correct} out of ${total} correct (${percentage}%). Drag items to match all definitions.</p>`;
  }
}

function resetMatching() {
  const termsContainer = document.getElementById('dragTerms');
  const dropZones = document.querySelectorAll('.drop-zone');
  
  dropZones.forEach(zone => {
    zone.classList.remove('correct', 'incorrect', 'hover');
    const item = zone.querySelector('.drag-item');
    if (item) {
      termsContainer.appendChild(item);
    }
  });
  
  document.getElementById('matchFeedback').style.display = 'none';
}

// ===== GAME 2: QUIZ =====

function loadQuestion() {
  if (gameState.currentQuiz >= quizQuestions.length) {
    document.getElementById('questionText').textContent = '🎉 Quiz Complete!';
    document.getElementById('quizOptions').innerHTML = '';
    document.getElementById('nextQuizBtn').style.display = 'none';
    
    if (gameState.quizTotal > 0 && gameState.gamesCompleted < 5) {
      gameState.gamesCompleted++;
      updateMainDisplay();
    }
    return;
  }

  const question = quizQuestions[gameState.currentQuiz];
  document.getElementById('questionText').textContent = `Question ${gameState.currentQuiz + 1}: ${question.question}`;
  
  const optionsHtml = question.options.map((option, index) => 
    `<button class="option-btn" onclick="answerQuestion(${index})">${option}</button>`
  ).join('');
  
  document.getElementById('quizOptions').innerHTML = optionsHtml;
  document.getElementById('quizFeedback').style.display = 'none';
  document.getElementById('nextQuizBtn').style.display = 'none';
}

function answerQuestion(selected) {
  const question = quizQuestions[gameState.currentQuiz];
  const feedback = document.getElementById('quizFeedback');
  const buttons = document.querySelectorAll('#quizOptions .option-btn');
  
  gameState.quizTotal++;
  
  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === question.correct) {
      btn.classList.add('correct');
    } else if (index === selected && selected !== question.correct) {
      btn.classList.add('incorrect');
    }
  });

  if (selected === question.correct) {
    gameState.quizScore++;
    gameState.totalScore += 10;
    feedback.style.display = 'block';
    feedback.style.background = 'rgba(52, 211, 153, 0.2)';
    feedback.style.border = '2px solid #34d399';
    feedback.style.color = '#059669';
    feedback.innerHTML = `<strong>✅ Correct!</strong><p>${question.explanation}</p>`;
  } else {
    feedback.style.display = 'block';
    feedback.style.background = 'rgba(244, 63, 94, 0.2)';
    feedback.style.border = '2px solid #f43f5e';
    feedback.style.color = '#dc2626';
    feedback.innerHTML = `<strong>❌ Incorrect</strong><p>${question.explanation}</p>`;
  }

  document.getElementById('quizScore').textContent = gameState.quizScore;
  document.getElementById('quizTotal').textContent = gameState.quizTotal;
  document.getElementById('nextQuizBtn').style.display = 'block';
  updateMainDisplay();
}

function nextQuestion() {
  gameState.currentQuiz++;
  loadQuestion();
}

function resetQuiz() {
  gameState.currentQuiz = 0;
  gameState.quizScore = 0;
  gameState.quizTotal = 0;
  document.getElementById('quizScore').textContent = '0';
  document.getElementById('quizTotal').textContent = '0';
  loadQuestion();
}

// ===== GAME 3: SCENARIOS =====

function loadScenario() {
  if (gameState.currentScenario >= scenarios.length) {
    document.getElementById('scenarioText').textContent = '🎉 All scenarios completed!';
    document.getElementById('scenarioOptions').innerHTML = '';
    
    if (gameState.scenarioTotal > 0 && gameState.gamesCompleted < 5) {
      gameState.gamesCompleted++;
      updateMainDisplay();
    }
    return;
  }

  const scenario = scenarios[gameState.currentScenario];
  document.getElementById('scenarioText').textContent = scenario.scenario;
  
  const optionsHtml = scenario.options.map((option, index) =>
    `<button class="option-btn" onclick="answerScenario(${index})">${option}</button>`
  ).join('');
  
  document.getElementById('scenarioOptions').innerHTML = optionsHtml;
  document.getElementById('scenarioFeedback').style.display = 'none';
  document.getElementById('nextScenarioBtn').style.display = 'none';
}

function answerScenario(selected) {
  const scenario = scenarios[gameState.currentScenario];
  const feedback = document.getElementById('scenarioFeedback');
  const buttons = document.querySelectorAll('#scenarioOptions .option-btn');
  
  gameState.scenarioTotal++;
  
  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === scenario.correct) {
      btn.classList.add('correct');
    } else if (index === selected && selected !== scenario.correct) {
      btn.classList.add('incorrect');
    }
  });

  if (selected === scenario.correct) {
    gameState.scenarioScore++;
    gameState.totalScore += 15;
    feedback.style.display = 'block';
    feedback.style.background = 'rgba(52, 211, 153, 0.2)';
    feedback.style.border = '2px solid #34d399';
    feedback.style.color = '#059669';
    feedback.innerHTML = `<strong>✅ Great choice!</strong><p>${scenario.explanation}</p>`;
  } else {
    feedback.style.display = 'block';
    feedback.style.background = 'rgba(244, 63, 94, 0.2)';
    feedback.style.border = '2px solid #f43f5e';
    feedback.style.color = '#dc2626';
    feedback.innerHTML = `<strong>❌ Not the best choice</strong><p>${scenario.explanation}</p>`;
  }

  document.getElementById('scenarioScore').textContent = gameState.scenarioScore;
  document.getElementById('scenarioTotal').textContent = gameState.scenarioTotal;
  document.getElementById('nextScenarioBtn').style.display = 'block';
  updateMainDisplay();
}

function nextScenario() {
  gameState.currentScenario++;
  loadScenario();
}

function resetScenarios() {
  gameState.currentScenario = 0;
  gameState.scenarioScore = 0;
  gameState.scenarioTotal = 0;
  document.getElementById('scenarioScore').textContent = '0';
  document.getElementById('scenarioTotal').textContent = '0';
  loadScenario();
}

// ===== GAME 4: DEVICE CHALLENGES =====

function loadDevice() {
  if (gameState.currentDevice >= deviceChallenges.length) {
    document.getElementById('currentDevice').textContent = 'Complete!';
    document.getElementById('deviceQuestion').textContent = '🎉 All device challenges completed!';
    document.getElementById('deviceOptions').innerHTML = '';
    
    if (gameState.deviceTotal > 0 && gameState.gamesCompleted < 5) {
      gameState.gamesCompleted++;
      updateMainDisplay();
    }
    return;
  }

  const challenge = deviceChallenges[gameState.currentDevice];
  document.getElementById('currentDevice').textContent = challenge.device;
  document.getElementById('deviceQuestion').textContent = challenge.question;
  
  const optionsHtml = challenge.options.map((option, index) =>
    `<button class="option-btn" onclick="answerDevice(${index})">${option}</button>`
  ).join('');
  
  document.getElementById('deviceOptions').innerHTML = optionsHtml;
  document.getElementById('deviceFeedback').style.display = 'none';
  document.getElementById('nextDeviceBtn').style.display = 'none';
}

function answerDevice(selected) {
  const challenge = deviceChallenges[gameState.currentDevice];
  const feedback = document.getElementById('deviceFeedback');
  const buttons = document.querySelectorAll('#deviceOptions .option-btn');
  
  gameState.deviceTotal++;
  
  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === challenge.correct) {
      btn.classList.add('correct');
    } else if (index === selected && selected !== challenge.correct) {
      btn.classList.add('incorrect');
    }
  });

  if (selected === challenge.correct) {
    gameState.deviceScore++;
    gameState.totalScore += 12;
    feedback.style.display = 'block';
    feedback.style.background = 'rgba(52, 211, 153, 0.2)';
    feedback.style.border = '2px solid #34d399';
    feedback.style.color = '#059669';
    feedback.innerHTML = `<strong>✅ Correct!</strong><p>${challenge.explanation}</p>`;
  } else {
    feedback.style.display = 'block';
    feedback.style.background = 'rgba(244, 63, 94, 0.2)';
    feedback.style.border = '2px solid #f43f5e';
    feedback.style.color = '#dc2626';
    feedback.innerHTML = `<strong>❌ Not quite</strong><p>${challenge.explanation}</p>`;
  }

  document.getElementById('deviceScore').textContent = gameState.deviceScore;
  document.getElementById('deviceTotal').textContent = gameState.deviceTotal;
  document.getElementById('nextDeviceBtn').style.display = 'block';
  updateMainDisplay();
}

function nextDevice() {
  gameState.currentDevice++;
  loadDevice();
}

function resetDevice() {
  gameState.currentDevice = 0;
  gameState.deviceScore = 0;
  gameState.deviceTotal = 0;
  document.getElementById('deviceScore').textContent = '0';
  document.getElementById('deviceTotal').textContent = '0';
  loadDevice();
}

// ===== GAME 5: SAFETY =====

function loadSafety() {
  if (gameState.currentSafety >= safetyScenarios.length) {
    document.getElementById('safetyScenario').textContent = '🎉 Safety test complete!';
    document.getElementById('safetyOptions').innerHTML = '';
    
    if (gameState.safetyTotal > 0 && gameState.gamesCompleted < 5) {
      gameState.gamesCompleted++;
      updateMainDisplay();
    }
    return;
  }

  const scenario = safetyScenarios[gameState.currentSafety];
  document.getElementById('safetyScenario').textContent = scenario.scenario;
  
  const optionsHtml = scenario.options.map((option, index) =>
    `<button class="option-btn" onclick="answerSafety(${index})">${option}</button>`
  ).join('');
  
  document.getElementById('safetyOptions').innerHTML = optionsHtml;
  document.getElementById('safetyFeedback').style.display = 'none';
  document.getElementById('nextSafetyBtn').style.display = 'none';
}

function answerSafety(selected) {
  const scenario = safetyScenarios[gameState.currentSafety];
  const feedback = document.getElementById('safetyFeedback');
  const buttons = document.querySelectorAll('#safetyOptions .option-btn');
  
  gameState.safetyTotal++;
  
  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === scenario.correct) {
      btn.classList.add('correct');
    } else if (index === selected && selected !== scenario.correct) {
      btn.classList.add('incorrect');
    }
  });

  if (selected === scenario.correct) {
    gameState.safetyScore++;
    gameState.totalScore += 20;
    feedback.style.display = 'block';
    feedback.style.background = 'rgba(52, 211, 153, 0.2)';
    feedback.style.border = '2px solid #34d399';
    feedback.style.color = '#059669';
    feedback.innerHTML = `<strong>✅ Safe choice!</strong><p>${scenario.explanation}</p>`;
  } else {
    feedback.style.display = 'block';
    feedback.style.background = 'rgba(244, 63, 94, 0.2)';
    feedback.style.border = '2px solid #f43f5e';
    feedback.style.color = '#dc2626';
    feedback.innerHTML = `<strong>⚠️ Unsafe choice</strong><p>${scenario.explanation}</p>`;
  }
