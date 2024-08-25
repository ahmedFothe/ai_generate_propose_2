document.addEventListener('DOMContentLoaded', () => {
    const revealButton = document.getElementById('revealButton');
    const specialMessage = document.getElementById('specialMessage');

    revealButton.addEventListener('click', () => {
        specialMessage.classList.toggle('hidden');
        if (specialMessage.classList.contains('hidden')) {
            revealButton.textContent = 'Reveal Message';
        } else {
            revealButton.textContent = 'Hide Message';
        }
    });
});
