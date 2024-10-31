let participantForm=document.getElementById("participant-form");
let participantInput=document.getElementById('participant-input');
let participantList=document.getElementById('participants-list');
let pickWinnerButton=document.getElementById("pick-winner-button");
let winnerDisplay=document.getElementById('winner-display');
let participants=[];

participantForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    const participantName=participantInput.value;

    if(participantName===''){
        console.log('not-ALLOWED')   

    } else{
        participants.push(participantName);
        updateParticipantsList();
        participantInput.value='';
    }

})

function updateParticipantsList(){
    participantList.innerHTML="";
    participants.forEach((participants)=>{
        const p=document.createElement('p');
        p.textContent=participants;
        p.style.color='blue'
        participantList.appendChild(p)

    }
)
}

pickWinnerButton.addEventListener('click',  ()=> {
    const randomIndex = Math.floor(Math.random() * participants.length)
    const winner = participants[randomIndex];
    winnerDisplay.textContent = winner
})
