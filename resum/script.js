document.addEventListener('DOMContentLoaded', () => {
    const analyzeBtn = document.getElementById('analyzeBtn');
    const resetBtn = document.getElementById('resetBtn');
    const inputForm = document.getElementById('inputForm');
    const resultsSection = document.getElementById('resultsSection');
    const btnText = document.querySelector('.btn-text');
    const loader = document.querySelector('.loader');
    const careerMatchesList = document.getElementById('careerMatches');
    const resumeMatchesList = document.getElementById('resumeMatches');

    analyzeBtn.addEventListener('click', () => {
        const skillsInput = document.getElementById('skills').value;
        const resumeInput = document.getElementById('resume').value;

        if (!skillsInput.trim() && !resumeInput.trim()) {
            alert('Please enter your skills or paste your resume text to analyze.');
            return;
        }

        // Show loader and disable button
        btnText.classList.add('hidden');
        loader.classList.remove('hidden');
        analyzeBtn.disabled = true;

        // Simulate AI analysis delay
        setTimeout(() => {
            // Hide loader and enable button
            btnText.classList.remove('hidden');
            loader.classList.add('hidden');
            analyzeBtn.disabled = false;

            // Hide input form, show results section
            inputForm.classList.add('hidden');
            resultsSection.classList.remove('hidden');

            // Generate results mapping based on the mock data
            populateResults();
        }, 2000);
    });

    resetBtn.addEventListener('click', () => {
        // Hide results, show input form again so the user can edit
        resultsSection.classList.add('hidden');
        inputForm.classList.remove('hidden');
    });

    function populateResults() {
        // Mock data for career matches
        const careers = [
            { name: "Software Engineer", score: "95%" },
            { name: "Product Manager", score: "88%" },
            { name: "Data Analyst", score: "78%" }
        ];

        // Mock data for resume health
        const healthMetrics = [
            { name: "Keyword Optimization", score: "High", isPurple: true },
            { name: "Action Verbs Usage", score: "Good", isPurple: true },
            { name: "Formatting Structure", score: "Excellent", isPurple: true }
        ];

        // Clear previous results
        careerMatchesList.innerHTML = '';
        resumeMatchesList.innerHTML = '';

        // Render career matches
        careers.forEach((career, index) => {
            const li = document.createElement('li');
            li.className = 'match-item';
            // Add slight staggered animation delay based on index
            li.style.animationDelay = `${index * 0.15}s`;
            li.innerHTML = `
                <span class="match-name">${career.name}</span>
                <span class="match-score">${career.score} MATCH</span>
            `;
            careerMatchesList.appendChild(li);
        });

        // Render resume health
        healthMetrics.forEach((metric, index) => {
            const li = document.createElement('li');
            li.className = 'match-item';
            li.style.animationDelay = `${index * 0.15 + 0.3}s`; // Start slightly after the first list
            li.innerHTML = `
                <span class="match-name">${metric.name}</span>
                <span class="match-score ${metric.isPurple ? 'purple' : ''}">${metric.score}</span>
            `;
            resumeMatchesList.appendChild(li);
        });
    }
});
