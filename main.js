const bill=document.querySelector("img");
const input= document.querySelector("input");
const answer=document.querySelector(".answer");
const error= document.querySelector(".error");


const answers=["Tak!", "Nie :/", "Nie chcesz wiedzieć", "Może tak, może nie", "Nie znam na to odpowiedzi", "Napewno chcesz wiedzieć?",
"Koniecznie tak!", "Wykluczone!", "Przeczytaj horoskop na dzisiaj, a wszystkiego się dowiesz!", "Jeden rabin powie tak, drugi rabin powie nie", 
"Musisz pójść po poradę do prawnika!"]



const checkInput=()=>{
    bill.classList.remove("shake-animation");
    if(input.value===""){
        error.textContent="Musisz zadać pytanie!";
        answer.textContent="";
    }
    else if(!input.value.endsWith("?")){
        error.textContent="Pytanie musi skończyć się znakiem zapytania"
        answer.textContent="";
    }
    else{
        validation(input);
    }
}


const correctInput=()=>{
    answer.innerHTML= ` <span> Odpowiedź: </span> ${answers[Math.floor(Math.random() * answers.length)]}`;
    error.textContent="";
}


const validation=(input)=>{
    const regex=/^[a-zA-Z]{1,8}\s/;
    if(regex.test(input.value)){
        correctInput();
        error.textContent="";
    }
    else{
        error.textContent='Musisz poprawnie zadać pytanie!'
        answer.textContent="";
    }
}


bill.addEventListener("click",()=>{
    bill.classList.add("shake-animation");
    setTimeout(checkInput, 1000);
});