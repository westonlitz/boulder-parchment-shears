document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the form from submitting

        const userChoice = form.elements.choice.value;
        const computerChoice = getComputerChoice();
        const result = determineWinner(userChoice, computerChoice);

        alert(`You chose ${userChoice}, the computer chose ${computerChoice}. Result: ${result}`);
    });
});

function getComputerChoice() {
    const choices = ['boulder', 'parchment', 'shears'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(user, computer) {
    if (user === computer) {
        return 'It\'s a tie!';
    } else if (
        (user === 'boulder' && computer === 'shears') ||
        (user === 'parchment' && computer === 'boulder') ||
        (user === 'shears' && computer === 'parchment')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}