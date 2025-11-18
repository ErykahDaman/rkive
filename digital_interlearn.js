// Digital Etiquette Course JavaScript

// Course state management
let courseState = {
  completedChapters: [],
  currentChapter: 1,
  totalChapters: 8,
  gameScore: 0,
  gameTotal: 12,
  currentScenario: 0
};

// Quiz answers (correct answers)
const quizAnswers = {
  chapter2: {
    q2_1: 'b', // Responsible and respectful digital communication
    q2_2: 'b', // Future employers and schools can see your online behavior
    q2_3: 'c'  // Treat others online as you would in person
  }
};

// Game scenarios
const scenarios = [
  {
    id: 1,
    text: "You see a friend posted a photo on Instagram that you think is embarrassing. What should you do?",
    optionA: "Comment publicly pointing out why it's embarrassing",
    optionB: "Send them a private message if you're genuinely concerned",
    correct: 'B',
    explanation: "Private concerns should be addressed privately. Public comments can embarrass your friend and damage your relationship. A private message shows respect and care."
  },
  {
    id: 2,
    text: "Someone posts a political opinion you strongly disagree with in a Facebook group. How do you respond?",
    optionA: "Post an angry comment calling them out immediately",
    optionB: "Respond respectfully with facts, or scroll past if you can't be civil",
    correct: 'B',
    explanation: "Digital etiquette means engaging respectfully or not at all. Angry responses escalate conflicts and damage your reputation. Respectful dialogue or disengagement are mature choices."
  },
  {
    id: 3,
    text: "You receive an email from your professor. How should you reply?",
    optionA: "Use proper greeting, clear subject line, and professional tone",
    optionB: "Reply with 'ok' or 'thx' to save time",
    correct: 'A',
    explanation: "Professional communication requires proper formatting and tone. Professors, employers, and colleagues expect respectful, complete responses that reflect well on you."
  },
  {
    id: 4,
    text: "Your friend shares exciting personal news in a group chat. What's the appropriate response?",
    optionA: "Immediately share their news on your social media",
    optionB: "Congratulate them in the chat and let them share publicly",
    correct: 'B',
    explanation: "Respect others' privacy and right to share their own news. What's shared privately should stay private unless given explicit permission to share publicly."
  },
  {
    id: 5,
    text: "You're in a heated text argument with someone. What's the best approach?",
    optionA: "Keep texting until you win the argument",
    optionB: "Suggest talking in person or taking a break to cool down",
    correct: 'B',
    explanation: "Text arguments often escalate due to misunderstanding tone. Taking a break or moving to face-to-face communication allows for better resolution and prevents saying things you'll regret."
  },
  {
    id: 6,
    text: "You see someone being bullied in the comments section. What should you do?",
    optionA: "Report the bullying and offer support to the victim privately",
    optionB: "Join the argument to defend the victim publicly",
    correct: 'A',
    explanation: "Report harmful content and support victims privately. Public arguments often escalate bullying. Reporting and private support are more effective and safer responses."
  },
  {
    id: 7,
    text: "You're tagged in a photo you don't like. What's the appropriate action?",
    optionA: "Angrily comment on the photo demanding it be removed",
    optionB: "Politely ask the person to untag you or remove the photo",
    correct: 'B',
    explanation: "Polite, private requests respect both your needs and the other person's feelings. Angry public responses damage relationships and your own reputation."
  },
  {
    id: 8,
    text: "Someone sends you a chain message saying to forward it to 10 people. What do you do?",
    optionA: "Forward it to avoid bad luck or to help someone",
    optionB: "Delete it and don't forward chain messages",
    correct: 'B',
    explanation: "Chain messages spread misinformation and spam. Good digital etiquette means not contributing to digital clutter or potential scams, regardless of the message content."
  },
  {
    id: 9,
    text: "You want to share a funny meme about a current event. What should you consider first?",
    optionA: "Whether it could offend or hurt anyone",
    optionB: "How many likes it will get",
    correct: 'A',
    explanation: "Always consider the impact of your posts on others. Humor at someone's expense or about sensitive topics can hurt people and damage your reputation, regardless of likes."
  },
  {
    id: 10,
    text: "You're added to a group chat you're not interested in. What's the polite way to handle it?",
    optionA: "Ignore all messages and never respond",
    optionB: "Politely excuse yourself from the conversation",
    correct: 'B',
    explanation: "Politely excusing yourself shows respect for others and clear communication about your boundaries. Ghosting can seem rude and leave others wondering."
  },
  {
    id: 11,
    text: "You notice someone posted false information online. How should you correct them?",
    optionA: "Publicly shame them for spreading misinformation",
    optionB: "Politely provide correct information with credible sources",
    correct: 'B',
    explanation: "Correcting misinformation is important, but do it respectfully with evidence. Shaming makes people defensive and less likely to accept correction. Kindness and facts are more effective."
  },
  {
    id: 12,
    text: "You're messaging during dinner with family. What's the appropriate behavior?",
    optionA: "Put your phone away and engage with people present",
    optionB: "Continue messaging since it's important to stay connected",
    correct: 'A',
    explanation: "Digital etiquette includes knowing when to disconnect. Being present with people physically with you shows respect and strengthens real-world relationships."
  }
];

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  initializeCourse();
  initializeGame();
  setupEventListeners();
});

// Initialize course
function initializeCourse() {
  updateProgress();
  loadChapter(1);
}

// Setup event listeners
function setupEventListeners() {
  // Chapter navigation clicks
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
  const quizForm = document.getElementById('quiz-chapter-2');
  if (quizForm) {
    quizForm.addEventListener('submit', function(e) {
      e.preventDefault();
      checkQuizAnswers(2);
    });
  }
}

// Load specific chapter
function loadChapter(chapterNum) {
  // Hide all chapters
  document.querySelectorAll('.chapter-content').forEach(chapter => {
    chapter.style.display = 'none';
  });

  // Show selected chapter
  const selectedChapter = document.getElementById(`chapter-${chapterNum}`);
  if (selectedChapter) {
    selectedChapter.style.display = 'block';
    courseState.currentChapter = chapterNum;

    // Update sidebar
    document.querySelectorAll('.chapter-item').forEach(item => {
      item.classList.remove('active');
      if (parseInt(item.dataset.chapter) === chapterNum) {
        item.classList.add('active');
      }
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Complete a chapter
function completeChapter(chapterNum) {
  if (!courseState.completedChapters.includes(chapterNum)) {
    courseState.completedChapters.push(chapterNum);
    
    // Mark as completed
    const chapterItem = document.querySelector(`.chapter-item[data-chapter="${chapterNum}"]`);
    if (chapterItem) {
      chapterItem.classList.add('completed');
      const icon = chapterItem.querySelector('.chapter-icon');
      if (icon) {
        icon.textContent = '✓';
      }
    }

    // Unlock next chapter
    const nextChapterNum = chapterNum + 1;
    if (nextChapterNum <= courseState.totalChapters) {
      unlockChapter(nextChapterNum);
    }

    // Update progress
    updateProgress();
  }
}

// Unlock a chapter
function unlockChapter(chapterNum) {
  const chapterItem = document.querySelector(`.chapter-item[data-chapter="${chapterNum}"]`);
  if (chapterItem) {
    chapterItem.classList.remove('locked');
    const icon = chapterItem.querySelector('.chapter-icon');
    if (icon) {
      icon.textContent = '▶';
    }
  }
}

// Update progress bar
function updateProgress() {
  const completed = courseState.completedChapters.length;
  const total = courseState.totalChapters;
  const percentage = Math.round((completed / total) * 100);

  const progressBar = document.getElementById('courseProgress');
  const progressText = document.getElementById('progressText');

  if (progressBar) {
    progressBar.style.width = percentage + '%';
    progressBar.setAttribute('aria-valuenow', percentage);
    progressBar.textContent = percentage + '%';
  }

  if (progressText) {
    progressText.textContent = `${completed}/${total}`;
  }
}

// Check quiz answers
function checkQuizAnswers(chapterNum) {
  const form = document.getElementById(`quiz-chapter-${chapterNum}`);
  const feedback = document.getElementById(`feedback-chapter-${chapterNum}`);
  
  if (!form || !feedback) return;

  const answers = quizAnswers[`chapter${chapterNum}`];
  let correct = 0;
  let total = Object.keys(answers).length;

  // Check each answer
  for (let question in answers) {
    const selected = form.querySelector(`input[name="${question}"]:checked`);
    if (selected && selected.value === answers[question]) {
      correct++;
    }
  }

  // Show feedback
  const percentage = Math.round((correct / total) * 100);
  const passed = percentage >= 70;

  feedback.className = 'quiz-feedback show ' + (passed ? 'correct' : 'incorrect');
  
  if (passed) {
    feedback.innerHTML = `
      <strong style="color: #34d399;">✓ Great job!</strong>
      <p class="mb-0 mt-2">You got ${correct} out of ${total} questions correct (${percentage}%). You can now proceed to the next chapter!</p>
    `;
    completeChapter(chapterNum);
    
    // Enable next button
    setTimeout(() => {
      loadChapter(chapterNum + 1);
    }, 2000);
  } else {
    feedback.innerHTML = `
      <strong style="color: #f43f5e;">Try again!</strong>
      <p class="mb-0 mt-2">You got ${correct} out of ${total} questions correct (${percentage}%). Review the material and try again. You need 70% to pass.</p>
    `;
  }
}

// ===== GAME FUNCTIONS =====

// Initialize game
function initializeGame() {
  courseState.currentScenario = 0;
  courseState.gameScore = 0;
  loadScenario(0);
  updateGameStats();
}

// Load a scenario
function loadScenario(index) {
  if (index >= scenarios.length) {
    showGameComplete();
    return;
  }

  const scenario = scenarios[index];
  courseState.currentScenario = index;

  // Update scenario display
  document.getElementById('currentScenario').textContent = scenario.id;
  document.getElementById('scenarioNumber').textContent = scenario.id;
  document.getElementById('totalScenarios').textContent = scenarios.length;
  document.getElementById('scenarioText').textContent = scenario.text;
  document.getElementById('optionAText').textContent = scenario.optionA;
  document.getElementById('optionBText').textContent = scenario.optionB;

  // Reset buttons
  const optionA = document.getElementById('optionA');
  const optionB = document.getElementById('optionB');
  optionA.className = 'option-btn';
  optionB.className = 'option-btn';
  optionA.disabled = false;
  optionB.disabled = false;

  // Hide feedback
  document.getElementById('feedbackBox').classList.remove('show');
}

// Select an option
function selectOption(choice) {
  const scenario = scenarios[courseState.currentScenario];
  const isCorrect = choice === scenario.correct;
  
  const optionA = document.getElementById('optionA');
  const optionB = document.getElementById('optionB');
  const feedbackBox = document.getElementById('feedbackBox');

  // Disable buttons
  optionA.disabled = true;
  optionB.disabled = true;

  // Mark correct/incorrect
  if (choice === 'A') {
    optionA.classList.add(isCorrect ? 'correct' : 'incorrect');
  } else {
    optionB.classList.add(isCorrect ? 'correct' : 'incorrect');
  }

  // Always show correct answer
  if (scenario.correct === 'A') {
    optionA.classList.add('correct');
  } else {
    optionB.classList.add('correct');
  }

  // Update score
  if (isCorrect) {
    courseState.gameScore++;
  }
  updateGameStats();

  // Show feedback
  feedbackBox.className = 'feedback-box show ' + (isCorrect ? 'correct' : 'incorrect');
  document.getElementById('feedbackTitle').textContent = isCorrect ? '✓ Correct!' : '✗ Not quite right';
  document.getElementById('feedbackText').textContent = isCorrect 
    ? 'Great job! You chose the appropriate response.' 
    : 'That\'s not the best choice in this situation.';
  document.getElementById('explanationText').textContent = scenario.explanation;
}

// Next scenario
function nextScenario() {
  const nextIndex = courseState.currentScenario + 1;
  if (nextIndex < scenarios.length) {
    loadScenario(nextIndex);
  } else {
    showGameComplete();
  }
}

// Update game stats
function updateGameStats() {
  document.getElementById('gameScore').textContent = courseState.gameScore;
  document.getElementById('gameTotal').textContent = courseState.gameTotal;
  
  const percentage = courseState.currentScenario > 0 
    ? Math.round((courseState.gameScore / courseState.currentScenario) * 100) 
    : 0;
  document.getElementById('gamePercentage').textContent = percentage;
}

// Show game complete
function showGameComplete() {
  const percentage = Math.round((courseState.gameScore / scenarios.length) * 100);
  const feedbackBox = document.getElementById('feedbackBox');
  
  feedbackBox.className = 'feedback-box show correct';
  document.getElementById('feedbackTitle').textContent = '🎉 Game Complete!';
  document.getElementById('feedbackText').textContent = 
    `You scored ${courseState.gameScore} out of ${scenarios.length} (${percentage}%)`;
  
  let message = '';
  if (percentage >= 90) {
    message = 'Outstanding! You have excellent digital etiquette skills!';
  } else if (percentage >= 70) {
    message = 'Great job! You understand digital etiquette well.';
  } else if (percentage >= 50) {
    message = 'Good effort! Review the course material to improve.';
  } else {
    message = 'Keep learning! Digital etiquette takes practice.';
  }
  
  document.getElementById('explanationText').textContent = message;
  document.getElementById('nextScenarioBtn').textContent = 'Play Again';
  document.getElementById('nextScenarioBtn').onclick = resetGame;
}

// Reset game
function resetGame() {
  courseState.currentScenario = 0;
  courseState.gameScore = 0;
  loadScenario(0);
  updateGameStats();
}
