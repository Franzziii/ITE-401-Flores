// Store last submitted survey results
let lastSurveyData = null;

document.getElementById('surveyForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    let surveyResults = {};
    for (let i = 1; i <= 10; i++) {
        let question = document.querySelector(`input[name="q${i}"]:checked`);
        surveyResults[`Question ${i}`] = question ? question.value : 'Not answered';
    }

    lastSurveyData = surveyResults; // Store the last survey result

    updateSummary(); // Update the summary display

    alert('Survey Submitted! Your previous responses are saved.');
    this.reset(); // Reset the form after submission
});

// Function to display the last survey summary
function showSummary() {
    if (!lastSurveyData) {
        alert("No survey submitted yet.");
        return;
    }

    let summary = "Previous Survey Summary:\n";
    for (let question in lastSurveyData) {
        summary += `${question}: ${lastSurveyData[question]}\n`;
    }
    alert(summary);
}

// Function to update the summary on the webpage
function updateSummary() {
    let summaryText = document.getElementById("summaryText");
    if (!lastSurveyData) {
        summaryText.textContent = "No survey submitted yet.";
        return;
    }

    let summaryDisplay = "";
    for (let question in lastSurveyData) {
        summaryDisplay += `${question}: ${lastSurveyData[question]}\n`;
    }

    summaryText.textContent = summaryDisplay;
}
