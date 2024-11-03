// Select button and joke output elements
const jokeBtn = document.getElementById('get-joke-btn');
const jokeOutput = document.getElementById('joke-output');

// Fetch and display a joke
async function fetchJoke() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await response.json();
        jokeOutput.textContent = `${data.setup} - ${data.punchline}`;
    } catch (error) {
        jokeOutput.textContent = 'Oops! Something went wrong. Try again later.';
        console.error('Error fetching joke:', error);
    }
}

// Add event listener for button click
jokeBtn.addEventListener('click', fetchJoke);
