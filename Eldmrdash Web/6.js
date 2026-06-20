function checkAnswers() {
    const questions = document.querySelectorAll('.question');
    let allAnswered = true;

    questions.forEach(question => {
        const selectedOption = question.querySelector('input[type="radio"]:checked');
        if (!selectedOption) {
            allAnswered = false;
            question.style.border = '2px solid red'; // Highlight unanswered questions
        } else {
            question.style.border = ''; // Reset border if answered
        }
    });

    if (!allAnswered) {
        alert('Please answer all questions before submitting.');
        return;
    }

    // If all questions are answered, proceed with checking answers and displaying result
    displayResult();
}

function displayResult() {
    const correctAnswers = {
        q1: 'Physical Bullying',
        q2: 'Emotional Distress',
        q3: 'Encouraging Open Communication'
    };
    let score = 0;

    for (const [key, value] of Object.entries(correctAnswers)) {
        const selectedOption = document.querySelector(`input[name="${key}"]:checked`);
        if (selectedOption && selectedOption.value === value) {
            score++;
        }
    }

    const resultElement = document.getElementById('result');
    const resultMessage = document.getElementById('result-message');
    const restartButton = document.getElementById('restart-button');
    const backButton = document.getElementById('back-button');

    resultMessage.textContent = `You scored ${score} out of ${Object.keys(correctAnswers).length}.`;
    resultElement.style.display = 'block';
    restartButton.style.display = 'inline-block';
    backButton.style.display = 'inline-block';
    document.getElementById('quiz-form').style.display = 'none'; // Hide the form after submission
}

function restartQuiz() {
    // Reload the page to reset the quiz
    window.location.reload();
}

function goBack() {
    // Navigate to the previous page
    window.history.back();
}
