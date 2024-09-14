
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('dark-mode-toggle');
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('dark-mode')) {
            toggleButton.textContent = 'Light Mode';
            toggleButton.classList.remove('dark-mode');
            toggleButton.classList.add('light-mode');
        } else {
            toggleButton.textContent = 'Dark Mode';
            toggleButton.classList.remove('light-mode');
            toggleButton.classList.add('dark-mode');
        }
    });

    const options = document.querySelectorAll('.option');
    let isAnswered = false;

    function setInitialColors() {
        options.forEach(opt => {
            opt.style.backgroundColor = document.body.classList.contains('dark-mode') ? '#444' : '#f0f0f0';
            opt.style.color = document.body.classList.contains('dark-mode') ? '#fff' : '#000';
        });
    }

    setInitialColors();

    options.forEach(option => {
        option.addEventListener('click', function() {
            if (isAnswered) return;
            isAnswered = true;

            const isCorrect = this.getAttribute('data-correct') === 'true';
            options.forEach(opt => {
                const optIsCorrect = opt.getAttribute('data-correct') === 'true';
                if (optIsCorrect) {
                    opt.style.backgroundColor = 'green';
                    opt.style.color = 'white';
                } else if (opt === this && !isCorrect) {
                    opt.style.backgroundColor = 'red';
                    opt.style.color = 'white';
                } else {
                    opt.style.backgroundColor = document.body.classList.contains('dark-mode') ? '#333' : '#ddd';
                    opt.style.color = document.body.classList.contains('dark-mode') ? '#aaa' : '#666';
                }
            });

            const explanation = document.querySelector('.explanation');
            explanation.style.display = 'block';
        });
    });

    // Re-apply colors when switching between light and dark modes
    toggleButton.addEventListener('click', setInitialColors);
});

