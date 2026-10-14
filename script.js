const questions = [
  {
    topic: "SECURITY FUNDAMENTALS",
    prompt: "What is an information security asset?",
    options: [
      "Only a computer owned by a company",
      "Any resource that has value to a person or organization",
      "A type of malware",
      "A password used by an administrator",
    ],
    answer: 1,
    explanation: "An asset is any valuable resource, such as information, hardware, software, accounts, services, or people.",
  },
  {
    topic: "THE CIA TRIAD",
    prompt: "Which three principles make up the information security triad?",
    options: [
      "Authentication, authorization, and backup",
      "Confidentiality, integrity, and availability",
      "Threats, vulnerabilities, and attacks",
      "Privacy, passwords, and updates",
    ],
    answer: 1,
    explanation: "The three principles are confidentiality, integrity, and availability (CIA).",
  },
  {
    topic: "SECURITY RISK",
    prompt: "What is a vulnerability in information security?",
    options: [
      "A weakness that could be exploited",
      "A copy of data used for recovery",
      "A person authorized to access a system",
      "An event that always causes damage",
    ],
    answer: 0,
    explanation: "A vulnerability is a weakness, such as a weak password or outdated software, that a threat may exploit.",
  },
  {
    topic: "SOCIAL ENGINEERING",
    prompt: "What is social engineering?",
    options: [
      "Encrypting information with a secret key",
      "Manipulating people to obtain information or access",
      "Installing updates on a computer",
      "Giving every employee administrator access",
    ],
    answer: 1,
    explanation: "Social engineering manipulates people, for example by impersonating bank staff or requesting an SMS code.",
  },
  {
    topic: "PHISHING",
    prompt: "Which is a common warning sign of a phishing message?",
    options: [
      "An unexpected prize, urgent threat, or suspicious web address",
      "A request to verify the sender independently",
      "A familiar address with no request for sensitive information",
      "A routine message that contains no links",
    ],
    answer: 0,
    explanation: "Phishing commonly uses urgency, unexpected prizes, suspicious domains, or requests for passwords and codes.",
  },
  {
    topic: "MALWARE",
    prompt: "What does ransomware typically do?",
    options: [
      "Secretly records a user's activity",
      "Spreads automatically across networks",
      "Blocks or encrypts files and demands payment",
      "Pretends to be a legitimate program but does nothing harmful",
    ],
    answer: 2,
    explanation: "Ransomware blocks or encrypts files and demands payment to restore access.",
  },
  {
    topic: "ACCOUNT SECURITY",
    prompt: "What is the purpose of two-factor authentication (2FA)?",
    options: [
      "To replace every password with a username",
      "To require another proof of identity in addition to the password",
      "To give users access to every account",
      "To make a backup of the user's files",
    ],
    answer: 1,
    explanation: "2FA adds another identity check, such as a temporary code, authenticator app, physical key, or biometrics.",
  },
  {
    topic: "DATA PROTECTION",
    prompt: "What is the difference between encryption and hashing?",
    options: [
      "Encryption uses a key to make data readable again; hashing produces a result used to represent data",
      "Hashing is a backup method; encryption is a type of malware",
      "They both store passwords as plain text",
      "Encryption is only used for images; hashing is only used for websites",
    ],
    answer: 0,
    explanation: "Encryption protects data so it can be understood with the right key. Hashing produces a resulting value; passwords should not be stored in plain text.",
  },
  {
    topic: "ACCESS CONTROL",
    prompt: "What does the principle of least privilege mean?",
    options: [
      "Everyone should receive administrator access",
      "Users should share one account to simplify access",
      "Each person should have only the permissions needed for their role",
      "Permissions should never be reviewed",
    ],
    answer: 2,
    explanation: "Least privilege limits each person's access to only what they need to perform their responsibilities.",
  },
  {
    topic: "INCIDENT RESPONSE",
    prompt: "According to the course, what should happen after identifying a security incident?",
    options: [
      "Ignore it unless a customer complains",
      "Identify, communicate, contain, correct, analyze, and prevent recurrence",
      "Delete all backups immediately",
      "Publish all affected users' passwords",
    ],
    answer: 1,
    explanation: "The incident response sequence is to identify, communicate, contain, correct, analyze, and prevent repetition.",
  },
  {
    topic: "SECURITY RISK",
    prompt: "What does risk mean in information security?",
    options: [
      "A guaranteed attack that has already caused damage",
      "The possibility that a threat will exploit a vulnerability and cause harm",
      "Any valuable information stored by a company",
      "A security update that has not been installed",
    ],
    answer: 1,
    explanation: "Risk is the possibility that a threat will exploit a vulnerability and cause harm.",
  },
  {
    topic: "SECURITY RISK",
    prompt: "Which example best shows a threat exploiting a vulnerability?",
    options: [
      "A backup copy is stored safely",
      "A user changes a strong password",
      "An attacker uses the password '123456' to break into an account",
      "A company installs a security update",
    ],
    answer: 2,
    explanation: "An attacker is a threat, the weak password is a vulnerability, and the account intrusion is the resulting harm.",
  },
  {
    topic: "MALWARE",
    prompt: "Which type of malware can spread automatically across networks?",
    options: [
      "Worm",
      "Spyware",
      "Trojan",
      "Ransomware",
    ],
    answer: 0,
    explanation: "A worm can spread automatically through networks.",
  },
  {
    topic: "MALWARE",
    prompt: "What is a Trojan in cybersecurity?",
    options: [
      "A tool that makes regular backups",
      "Malware that secretly records a user's activity",
      "A program that only infects image files",
      "Malware that appears legitimate but performs a malicious action",
    ],
    answer: 3,
    explanation: "A Trojan disguises itself as legitimate software while carrying out a malicious action.",
  },
  {
    topic: "MALWARE",
    prompt: "Which type of malware spies on a user's activities?",
    options: [
      "Worm",
      "Spyware",
      "Ransomware",
      "Backup software",
    ],
    answer: 1,
    explanation: "Spyware is designed to spy on a user's activities.",
  },
  {
    topic: "PASSWORD SECURITY",
    prompt: "Which is the safest password practice?",
    options: [
      "Reuse one memorable password for every service",
      "Use your name and birth year",
      "Use long, different passwords for each service",
      "Choose a short sequence such as '123456'",
    ],
    answer: 2,
    explanation: "Use long, unique passwords and avoid personal information or simple sequences.",
  },
  {
    topic: "BACKUPS",
    prompt: "Why should you keep backups of important data?",
    options: [
      "To recover data after accidental deletion, equipment failure, or ransomware",
      "To make every user an administrator",
      "To prevent all phishing messages",
      "To replace software updates",
    ],
    answer: 0,
    explanation: "Backups help recover information after accidental deletion, equipment failure, ransomware, or file corruption.",
  },
  {
    topic: "SOFTWARE UPDATES",
    prompt: "Why can an outdated program be unsafe even if it still works?",
    options: [
      "It automatically deletes every backup",
      "Known vulnerabilities may remain unpatched",
      "It cannot store any information",
      "It turns every user into an administrator",
    ],
    answer: 1,
    explanation: "Working normally does not mean a program is secure; updates can fix known vulnerabilities.",
  },
  {
    topic: "WEB SECURITY",
    prompt: "Where should a developer keep a secret key used by a web application?",
    options: [
      "In visible text on the web page",
      "In the browser's HTML comments",
      "In a public JavaScript file",
      "On the back end, not in code sent to the browser",
    ],
    answer: 3,
    explanation: "Anything delivered to a browser can potentially be viewed, so secret keys must not be placed in front-end code.",
  },
  {
    topic: "AUTHENTICATION & AUTHORIZATION",
    prompt: "A teacher signs in and can enter grades, while a student can only view their own. Which statement is correct?",
    options: [
      "Signing in is authorization; permission to enter grades is authentication",
      "Both signing in and permissions are backups",
      "Signing in is authentication; permissions define authorization",
      "Students and teachers should always have identical permissions",
    ],
    answer: 2,
    explanation: "Authentication identifies the user. Authorization determines what that user is allowed to do.",
  },
];

const quizContent = document.querySelector("#quiz-content");
const results = document.querySelector("#results");
const questionCounter = document.querySelector("#question-counter");
const scoreCounter = document.querySelector("#score-counter strong");
const progressTrack = document.querySelector(".progress-track");
const progressFill = document.querySelector("#progress-fill");
const questionTopic = document.querySelector("#question-topic");
const questionText = document.querySelector("#question-text");
const answerList = document.querySelector("#answer-list");
const feedback = document.querySelector("#feedback");
const feedbackTitle = document.querySelector("#feedback-title");
const feedbackExplanation = document.querySelector("#feedback-explanation");
const nextButton = document.querySelector("#next-button");
const restartButton = document.querySelector("#restart-button");
const finalScore = document.querySelector("#final-score");
const resultHeading = document.querySelector("#result-heading");
const resultCopy = document.querySelector("#result-copy");

let currentQuestion = 0;
let score = 0;
let answered = false;

function renderQuestion() {
  const question = questions[currentQuestion];
  const questionNumber = currentQuestion + 1;

  questionCounter.innerHTML = `QUESTION ${String(questionNumber).padStart(2, "0")} <span class="counter-muted">/ ${questions.length}</span>`;
  scoreCounter.textContent = String(score);
  questionTopic.textContent = question.topic;
  questionText.textContent = question.prompt;
  answerList.replaceChildren();
  feedback.hidden = true;
  feedback.classList.remove("is-incorrect");
  nextButton.hidden = true;
  answered = false;

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer-option";
    button.type = "button";
    button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${option}</span>`;
    button.addEventListener("click", () => selectAnswer(index));
    answerList.append(button);
  });

  progressTrack.setAttribute("aria-valuenow", String(currentQuestion));
  progressFill.style.width = `${(currentQuestion / questions.length) * 100}%`;
}

function selectAnswer(selectedIndex) {
  if (answered) return;

  answered = true;
  const question = questions[currentQuestion];
  const isCorrect = selectedIndex === question.answer;
  const buttons = answerList.querySelectorAll("button");

  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === question.answer) button.classList.add("is-correct");
    if (index === selectedIndex && !isCorrect) button.classList.add("is-wrong");
  });

  if (isCorrect) score += 1;
  scoreCounter.textContent = String(score);
  feedbackTitle.textContent = isCorrect ? "Correct!" : "Not quite.";
  feedbackExplanation.textContent = question.explanation;
  feedback.classList.toggle("is-incorrect", !isCorrect);
  feedback.hidden = false;
  nextButton.textContent = currentQuestion === questions.length - 1
    ? "See your results"
    : "Next question";
  nextButton.append(document.createTextNode(" →"));
  nextButton.hidden = false;
  nextButton.focus();
}

function showResults() {
  quizContent.hidden = true;
  results.hidden = false;
  finalScore.textContent = String(score);

  if (score === questions.length) {
    resultHeading.textContent = "Perfect score!";
    resultCopy.textContent = "Excellent work! You mastered all the course topics.";
  } else if (score >= 7) {
    resultHeading.textContent = "Great job!";
    resultCopy.textContent = "You know your stuff. Review any missed topics and try again for a perfect score.";
  } else {
    resultHeading.textContent = "Good effort!";
    resultCopy.textContent = "Review the course materials and give it another try. You can play as many times as you like.";
  }
  restartButton.focus();
}

function advance() {
  if (currentQuestion === questions.length - 1) {
    progressTrack.setAttribute("aria-valuenow", String(questions.length));
    progressFill.style.width = "100%";
    showResults();
    return;
  }

  currentQuestion += 1;
  renderQuestion();
  answerList.querySelector("button")?.focus();
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  results.hidden = true;
  quizContent.hidden = false;
  renderQuestion();
  answerList.querySelector("button")?.focus();
}

nextButton.addEventListener("click", advance);
restartButton.addEventListener("click", restartQuiz);

renderQuestion();
