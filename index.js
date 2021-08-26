let words = [
    {
        jumWord:"palpe",
        correctWord:"apple"
    },
    {
        jumWord:"onlem",
        correctWord:"melon"
    },
    {
        jumWord:"ugaav",
        correctWord:"guava"
    },
    {
        jumWord:"goman",
        correctWord:"mango"
    },
    {
        jumWord:"nipe",
        correctWord:"pine"
    },
    {
        jumWord:"ehpca",
        correctWord:"peach"
    },
    
]

let currentWord = 0;
let Score = 0;

function displayWord(){
    document.querySelector(".word").innerHTML = words[currentWord].jumWord.toUpperCase();
    document.querySelector(".score").innerHTML = Score;
}
displayWord();

function BtnFun(){
    let userEnt = document.querySelector(".entery").value
    
    if(userEnt.toUpperCase() === words[currentWord].correctWord.toUpperCase()){
        Score++;
    }
    if(currentWord === (words.length -1)){
        alert("Final Score : "+Score+"/"+words.length)
        currentWord = 0;
        Score =0;
    }else{
        currentWord++ ;
    }
    document.querySelector(".entery").value ="";
    displayWord();



}