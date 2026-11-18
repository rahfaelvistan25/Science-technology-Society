/**
 * QUIZ & INTERACTIVE ASSESSMENT ENGINE
 * Handles:
 * 1. 15 Multiple Choice Questions with instant grading & explanations
 * 2. 10 Identification Items with fuzzy matching & hint system
 * 3. Activity 1: Science vs Technology classifier mini-game
 */

// Assessment Data: 15 Multiple Choice Questions
const mcqData = [
  {
    id: 1,
    question: "What does the term historical antecedents refer to?",
    options: [
      "Future inventions and discoveries.",
      "Events and developments from the past that influenced the present.",
      "Modern technological applications only.",
      "Scientific theories that have not been tested."
    ],
    answer: 1, // index 1 = B
    explanation: "Historical antecedents are past events, ideas, inventions, and discoveries that laid the foundation for modern technologies."
  },
  {
    id: 2,
    question: "What is the primary purpose of science?",
    options: [
      "To manufacture machines.",
      "To create electronic devices.",
      "To understand the natural world through observation and investigation.",
      "To develop business products."
    ],
    answer: 2, // index 2 = C
    explanation: "Science systematically investigates the natural world to explain natural phenomena through observation, questions, and evidence."
  },
  {
    id: 3,
    question: "Which of the following best describes technology?",
    options: [
      "The study of historical events.",
      "The application of knowledge and skills to solve practical problems.",
      "The study of planets only.",
      "The process of memorizing information."
    ],
    answer: 1, // index 1 = B
    explanation: "Technology is the practical application of scientific knowledge and tools to solve human problems and enhance efficiency."
  },
  {
    id: 4,
    question: "Which early technological development helped humans cook food and stay warm?",
    options: [
      "Printing press.",
      "Electricity.",
      "Fire.",
      "Telephone."
    ],
    answer: 2, // index 2 = C
    explanation: "The controlled use of fire provided warmth, protection, lighting, easier digestion through cooking, and enabled metallurgy and pottery."
  },
  {
    id: 5,
    question: "What was one of the most important contributions of the Agricultural Revolution?",
    options: [
      "Development of smartphones.",
      "Establishment of permanent settlements through food production.",
      "Invention of airplanes.",
      "Development of computers."
    ],
    answer: 1, // index 1 = B
    explanation: "Farming and domestication replaced nomadism with settled communities, giving rise to cities, specialized labor, and civilizations."
  },
  {
    id: 6,
    question: "Which civilization developed the cuneiform writing system?",
    options: [
      "Ancient Greece.",
      "Mesopotamia.",
      "Ancient Rome.",
      "Ancient Egypt."
    ],
    answer: 1, // index 1 = B
    explanation: "The Sumerians of Mesopotamia created cuneiform script on clay tablets to record commerce, laws, and history."
  },
  {
    id: 7,
    question: "Which ancient civilization is famous for constructing the pyramids of Giza?",
    options: [
      "China.",
      "India.",
      "Egypt.",
      "Greece."
    ],
    answer: 2, // index 2 = C
    explanation: "Ancient Egypt engineered massive stone monuments including the Pyramids using sophisticated mathematics and organization."
  },
  {
    id: 8,
    question: "Who is associated with the Pythagorean theorem?",
    options: [
      "Archimedes.",
      "Pythagoras.",
      "Aristotle.",
      "Hippocrates."
    ],
    answer: 1, // index 1 = B
    explanation: "Pythagoras contributed foundational mathematical thinking, numerical relationships, and the right-triangle theorem ($a^2 + b^2 = c^2$)."
  },
  {
    id: 9,
    question: "Which civilization contributed significantly to the development of papermaking, the compass, and gunpowder?",
    options: [
      "Ancient China.",
      "Ancient Greece.",
      "Mesopotamia.",
      "Ancient Egypt."
    ],
    answer: 0, // index 0 = A
    explanation: "Ancient China pioneered the 'Four Great Inventions': Papermaking (Cai Lun, 105 CE), the Magnetic Compass, Gunpowder, and Printing."
  },
  {
    id: 10,
    question: "Which mathematical concept was an important contribution of ancient Indian mathematics?",
    options: [
      "Steam engine.",
      "Zero and the decimal place-value system.",
      "Printing press.",
      "Mechanical clock."
    ],
    answer: 1, // index 1 = B
    explanation: "Ancient Indian mathematicians developed zero as both a placeholder and number, along with the decimal place-value system."
  },
  {
    id: 11,
    question: "What is the relationship between science and technology?",
    options: [
      "They are completely unrelated.",
      "Science develops knowledge, while technology applies knowledge to practical problems.",
      "Science only studies history.",
      "Technology is always developed before scientific knowledge."
    ],
    answer: 1, // index 1 = B
    explanation: "Science understands the world; technology applies that understanding to solve human needs in a symbiotic cycle."
  },
  {
    id: 12,
    question: "What is an example of technology influencing society?",
    options: [
      "People observing the stars.",
      "Smartphones allowing instant communication.",
      "Scientists studying gravity.",
      "Researchers observing plants."
    ],
    answer: 1, // index 1 = B
    explanation: "Smartphones transform how people communicate, work, shop, and socialize, demonstrating technology shaping society."
  },
  {
    id: 13,
    question: "What is the digital divide?",
    options: [
      "The difference between ancient and modern computers.",
      "The unequal access to digital technologies and internet resources.",
      "The process of manufacturing computers.",
      "The development of programming languages."
    ],
    answer: 1, // index 1 = B
    explanation: "The digital divide refers to socioeconomic disparities in access to modern computers, smartphones, and high-speed internet."
  },
  {
    id: 14,
    question: "Which of the following is an example of responsible technology use?",
    options: [
      "Sharing passwords with strangers.",
      "Spreading unverified information.",
      "Protecting personal information and verifying online sources.",
      "Using AI to submit unverified information as original work."
    ],
    answer: 2, // index 2 = C
    explanation: "Responsible digital citizenship requires cybersecurity awareness, verifying information authenticity, and respecting data privacy."
  },
  {
    id: 15,
    question: "Why is studying the history of science and technology important?",
    options: [
      "It helps us understand how past discoveries influenced modern developments.",
      "It prevents future inventions.",
      "It eliminates the need for scientific research.",
      "It teaches us to avoid using modern technology."
    ],
    answer: 0, // index 0 = A
    explanation: "Understanding historical antecedents reveals how current inventions evolved and inspires future ethical problem-solving."
  }
];

// Assessment Data: 10 Identification Items
const identData = [
  {
    id: 1,
    prompt: "1. The systematic study of the natural world through observation and experimentation.",
    answers: ["science", "the science"],
    hint: "Starts with 'S'. Seeks explanations for how nature works."
  },
  {
    id: 2,
    prompt: "2. The practical application of knowledge to solve problems.",
    answers: ["technology"],
    hint: "Starts with 'T'. Translates knowledge into tools, machines, and processes."
  },
  {
    id: 3,
    prompt: "3. The early period characterized by the extensive use of stone tools.",
    answers: ["stone age", "the stone age", "paleolithic", "neolithic"],
    hint: "Prehistoric era named after the primary rock material early humans shaped."
  },
  {
    id: 4,
    prompt: "4. The process of transitioning from hunting and gathering to farming and animal domestication.",
    answers: ["agricultural revolution", "the agricultural revolution", "neolithic revolution", "agriculture"],
    hint: "A major transformation during the Neolithic period enabling settled communities."
  },
  {
    id: 5,
    prompt: "5. One of the earliest known writing systems developed by the Sumerians.",
    answers: ["cuneiform", "cuneiform writing", "cuneiform script"],
    hint: "Wedge-shaped impressions made with reed styluses on soft clay tablets."
  },
  {
    id: 6,
    prompt: "6. The ancient civilization located between the Tigris and Euphrates rivers.",
    answers: ["mesopotamia", "mesopotamian civilization", "sumer"],
    hint: "Greek for 'land between rivers', corresponding largely to modern Iraq."
  },
  {
    id: 7,
    prompt: "7. The Greek mathematician associated with the famous theorem involving right triangles.",
    answers: ["pythagoras"],
    hint: "Famous for a² + b² = c²."
  },
  {
    id: 8,
    prompt: "8. The ancient civilization associated with the development of zero and the decimal place-value system.",
    answers: ["ancient india", "india", "indian civilization"],
    hint: "South Asian civilization that gave the world the Hindu-Arabic numeral system."
  },
  {
    id: 9,
    prompt: "9. The process of creating new solutions, ideas, or products to address human needs.",
    answers: ["innovation", "technological innovation", "invention"],
    hint: "Starts with 'I'. Creative problem-solving that advances civilization."
  },
  {
    id: 10,
    prompt: "10. The unequal access to digital devices, internet connectivity, and digital resources.",
    answers: ["digital divide", "the digital divide"],
    hint: "A two-word sociological term for disparities in technological access."
  }
];

// Activity 1 Data: 10 Classifier Items
const classifierData = [
  { id: 1, text: "Studying how gravity works", answer: "Science", explanation: "Investigates fundamental natural forces and laws." },
  { id: 2, text: "Developing a smartphone", answer: "Technology", explanation: "Applies electrical engineering & computer science to build a communication device." },
  { id: 3, text: "Investigating how plants grow", answer: "Science", explanation: "Examines botanical biological processes and photosynthesis." },
  { id: 4, text: "Creating a medical imaging machine", answer: "Technology", explanation: "Applies physics and engineering principles to manufacture MRI/CT scanners." },
  { id: 5, text: "Studying the movement of planets", answer: "Science", explanation: "Observes astronomical orbits and celestial mechanics." },
  { id: 6, text: "Developing an irrigation system", answer: "Technology", explanation: "Constructs civil canals and hydraulics to manage agricultural water." },
  { id: 7, text: "Researching how electricity works", answer: "Science", explanation: "Analyzes charge behavior, electromagnetism, and atomic structure." },
  { id: 8, text: "Designing an electric vehicle", answer: "Technology", explanation: "Applies electrochemical and mechanical systems for transportation." },
  { id: 9, text: "Studying the spread of diseases", answer: "Science", explanation: "Epidemiological research into pathology and contagion transmission." },
  { id: 10, text: "Developing a vaccine", answer: "Both", explanation: "Combines biological scientific discovery (antigens) with biotechnology manufacturing." }
];

// MCQ Engine Implementation
function renderMCQ() {
  const container = document.getElementById("mcq-questions-wrapper");
  if (!container) return;

  container.innerHTML = mcqData.map((q, idx) => {
    return `
      <div class="quiz-question-card" id="mcq-card-${q.id}" data-id="${q.id}">
        <div class="quiz-q-num">Question ${idx + 1} of ${mcqData.length}</div>
        <div class="quiz-q-text">${q.question}</div>
        <div class="quiz-options-list">
          ${q.options.map((opt, optIdx) => {
            const letter = String.fromCharCode(65 + optIdx);
            return `
              <button type="button" class="quiz-option-btn" onclick="selectMCQOption(${q.id}, ${optIdx})">
                <span class="opt-letter">${letter}</span>
                <span>${opt}</span>
              </button>
            `;
          }).join('')}
        </div>
        <div class="quiz-feedback-box" id="mcq-feedback-${q.id}"></div>
      </div>
    `;
  }).join('');
}

const userMCQAnswers = {};

window.selectMCQOption = function(qid, optIndex) {
  const qObj = mcqData.find(q => q.id === qid);
  if (!qObj) return;

  userMCQAnswers[qid] = optIndex;
  const card = document.getElementById(`mcq-card-${qid}`);
  const buttons = card.querySelectorAll(".quiz-option-btn");
  const feedback = document.getElementById(`mcq-feedback-${qid}`);

  buttons.forEach((btn, idx) => {
    btn.classList.remove("selected", "correct", "incorrect");
    if (idx === qObj.answer) {
      btn.classList.add("correct");
    } else if (idx === optIndex) {
      btn.classList.add("incorrect");
    }
  });

  feedback.classList.remove("show", "success", "fail");
  if (optIndex === qObj.answer) {
    card.classList.remove("answered-wrong");
    card.classList.add("answered-correct");
    feedback.classList.add("show", "success");
    feedback.innerHTML = `<strong>Correct!</strong> ${qObj.explanation}`;
  } else {
    card.classList.remove("answered-correct");
    card.classList.add("answered-wrong");
    feedback.classList.add("show", "fail");
    feedback.innerHTML = `<strong>Incorrect.</strong> The correct answer is <strong>${String.fromCharCode(65 + qObj.answer)}</strong>. ${qObj.explanation}`;
  }

  updateMCQScore();
};

function updateMCQScore() {
  const total = mcqData.length;
  let correct = 0;
  Object.keys(userMCQAnswers).forEach(qid => {
    const qObj = mcqData.find(q => q.id === parseInt(qid));
    if (qObj && userMCQAnswers[qid] === qObj.answer) {
      correct++;
    }
  });
  const answeredCount = Object.keys(userMCQAnswers).length;
  const badge = document.getElementById("mcq-live-score");
  if (badge) {
    badge.innerText = `Score: ${correct} / ${total} (${answeredCount} Answered)`;
  }
}

window.resetMCQ = function() {
  Object.keys(userMCQAnswers).forEach(k => delete userMCQAnswers[k]);
  renderMCQ();
  updateMCQScore();
};

// Identification Engine Implementation
function renderIdentification() {
  const container = document.getElementById("ident-questions-wrapper");
  if (!container) return;

  container.innerHTML = identData.map(item => {
    return `
      <div class="ident-item" id="ident-item-${item.id}">
        <div class="ident-question">${item.prompt}</div>
        <div class="ident-input-row">
          <input type="text" class="ident-input" id="ident-input-${item.id}" placeholder="Type your answer here..." onkeydown="if(event.key === 'Enter') checkIdentAnswer(${item.id})">
          <button type="button" class="btn-ident-check" onclick="checkIdentAnswer(${item.id})">Check</button>
          <button type="button" class="btn-ident-hint" onclick="toggleIdentHint(${item.id})">Hint</button>
        </div>
        <div class="ident-feedback" id="ident-feedback-${item.id}"></div>
      </div>
    `;
  }).join('');
}

window.checkIdentAnswer = function(id) {
  const item = identData.find(d => d.id === id);
  if (!item) return;

  const input = document.getElementById(`ident-input-${id}`);
  const feedback = document.getElementById(`ident-feedback-${id}`);
  const val = input.value.trim().toLowerCase();

  if (!val) {
    feedback.style.display = "block";
    feedback.style.color = "var(--danger)";
    feedback.innerText = "Please enter an answer before checking.";
    return;
  }

  const isCorrect = item.answers.some(ans => ans.toLowerCase() === val || (val.length > 3 && ans.toLowerCase().includes(val)));
  feedback.style.display = "block";

  if (isCorrect) {
    feedback.style.color = "var(--success)";
    feedback.innerHTML = `<strong>Correct!</strong> Standard term: <em>${item.answers[0].toUpperCase()}</em>`;
    input.style.borderColor = "var(--success)";
  } else {
    feedback.style.color = "var(--danger)";
    feedback.innerHTML = `<strong>Not quite.</strong> Expected: <em>${item.answers[0].toUpperCase()}</em>. Try again or review topic!`;
    input.style.borderColor = "var(--danger)";
  }
};

window.toggleIdentHint = function(id) {
  const item = identData.find(d => d.id === id);
  if (!item) return;
  const feedback = document.getElementById(`ident-feedback-${id}`);
  feedback.style.display = "block";
  feedback.style.color = "var(--accent)";
  feedback.innerHTML = `<strong>Hint:</strong> ${item.hint}`;
};

// Activity 1 Classifier Implementation
function renderClassifier() {
  const container = document.getElementById("classifier-items-wrapper");
  if (!container) return;

  container.innerHTML = classifierData.map(item => {
    return `
      <div class="classifier-card" id="class-card-${item.id}">
        <div class="classifier-scenario"><strong>${item.id}.</strong> ${item.text}</div>
        <div class="classifier-btn-group">
          <button type="button" class="classifier-btn" onclick="classifyItem(${item.id}, 'Science')">Science</button>
          <button type="button" class="classifier-btn" onclick="classifyItem(${item.id}, 'Technology')">Technology</button>
          <button type="button" class="classifier-btn" onclick="classifyItem(${item.id}, 'Both')">Both</button>
        </div>
        <div class="classifier-feedback" id="class-feedback-${item.id}" style="display:none; font-size:0.8rem; margin-top:0.4rem;"></div>
      </div>
    `;
  }).join('');
}

window.classifyItem = function(id, selected) {
  const item = classifierData.find(d => d.id === id);
  if (!item) return;

  const card = document.getElementById(`class-card-${id}`);
  const buttons = card.querySelectorAll(".classifier-btn");
  const feedback = document.getElementById(`class-feedback-${id}`);

  buttons.forEach(btn => {
    btn.classList.remove("active-correct", "active-wrong");
    if (btn.innerText === item.answer) {
      btn.classList.add("active-correct");
    } else if (btn.innerText === selected) {
      btn.classList.add("active-wrong");
    }
  });

  feedback.style.display = "block";
  if (selected.toLowerCase() === item.answer.toLowerCase()) {
    feedback.style.color = "var(--success)";
    feedback.innerHTML = `Correct! ${item.explanation}`;
  } else {
    feedback.style.color = "var(--danger)";
    feedback.innerHTML = `Incorrect. It's categorized as <strong>${item.answer}</strong>: ${item.explanation}`;
  }
};

// Initialize All Assessments on DOM Loaded
document.addEventListener("DOMContentLoaded", () => {
  renderMCQ();
  renderIdentification();
  renderClassifier();
});
