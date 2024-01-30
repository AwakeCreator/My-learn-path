// Initialize variables for the quiz
let score = 0;
let currentQuestion = 0;

const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Rome", "Berlin"],
    correctAnswer: 0
  },
  {
    question: "What is the largest planet in the solar system?",
    choices: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 2
  },
  // Add more questions here
];

// Function to display the next question
function nextQuestion() {
  // Get the current question object from the array
  const currentQuestionObject = questions[currentQuestion];

  // Update the question text
  const questionElement = document.getElementById("question");
  questionElement.textContent = currentQuestionObject.question;

  // Clear the previous choices
  const choicesElement = document.getElementById("choices");
  while (choicesElement.firstChild) {
    choicesElement.removeChild(choicesElement.firstChild);
  }

  // Add the new choices
  for (let i = 0; i < currentQuestionObject.choices.length; i++) {
    // Create a new button for each choice
    const button = document.createElement("button");
    button.textContent = currentQuestionObject.choices[i];
    button.value = i;

    // Add a click event listener to the button to check the answer
    button.addEventListener("click", checkAnswer);

    // Add the button to the choices element
    choicesElement.appendChild(button);
  }
}

// Function to check if the selected answer is correct
function checkAnswer(event) {
  // Get the selected answer
  const selectedAnswer = event.target.value;

  // Check if the selected answer is correct
  if (selectedAnswer == questions[currentQuestion].correctAnswer) {
    // Update the score if the answer is correct
    score++;
  }

  // Move to the next question
  currentQuestion++;

  // Check if there are more questions
  if (currentQuestion < questions.length) {
    // Display the next question if there are more questions
    nextQuestion();
  } else {
    // Display the final score if there are no more questions
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = "Your final score is: " + score;
  }
}

// Start the quiz by displaying the first question
nextQuestion();
