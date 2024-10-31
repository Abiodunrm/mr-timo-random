let participants = [] //Array to collect participants

//DOM Elements
let participantForm = document.getElementById('participant-form');
let participantInput = document.getElementById('participant-input');
let participantList = document.getElementById('participants-list');
let pickWinnerButton = document.getElementById('pick-winner-button');
let winnerDisplay = document.getElementById('winner-display');

//Listen to the form submission
participantForm.addEventListener('submit', addParticipant);

//listen winner button 
pickWinnerButton.addEventListener('click', pickRandomWinner);

//Function to add particpant
function addParticipant(event) {
    event.preventDefault();

    const participantName = participantInput.value
    if (participantName === "") {
        console.log('Not Allowed')
    } else {
        participants.push(participantName) //adding name to array
    updateParticipantsList();
    participantInput.value = ""; //Clear the input field
    }
    

    
}

//Function to update the div to show participants
function updateParticipantsList() {
    participantList.innerHTML = ""; //emptying the board
    participants.forEach((participant) => {
        const p = document.createElement("p");
        p.textContent = participant;
        participantList.appendChild(p);
    });
    
}

function pickRandomWinner () {
    const randomIndex = Math.floor(Math.random() * participants.length)
    const winner = participants[randomIndex];
    winnerDisplay.textContent = winner
}