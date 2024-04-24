const questions = [
    {
        //index---0
        question:" A Supervisor is a central component of",
        answers:[
        {  text:"Software",correct:false },
        { text:"Operating System",correct:true },
        { text:"Device Driver",correct:false },
        { text:"Utilities",correct:false },
        ]
    },
    {
        //index---1
        question:"The 3 principal components of system software are:",
        answers:[
        {text:"OS, Utilities, Device Driver",correct:true},
        {text:"OS, Hardware, Software",correct:false},
        {text:"Device Driver,software",correct:false},
        {text:"Utilities,OS,Hardware",correct:false},
        ]
    },
    {
        //imdex-----2
        question:"The component of an system software which enhance existing functions in a computer is called",
        answers:[
        {text:"Software",correct:false},
        {text:"Operating System",correct:false},
        {text:"Device Driver",correct:false},
        {text:"Utilities",correct:true},
        ]
    },
    {
        //index----3
        question:" Which of the following is an example of Server Operating System",
        answers:[
        {text:"Linux",correct:true},
        {text:"Ubuntu",correct:false},
        {text:"Windows",correct:false},
        {text:"Mac OS",correct:false},
        ]
    }
];
// ID_S-like-->question,answer-button-next-btn.....in ...HTML file
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;
               function startQuiz(){
                currentQuestionIndex=0;
                score=0;
                nextButton.innerHTML="Next";
                showQuestion();
               }
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1;                    //display questiom AND question NO..
    questionElement.innerHTML=questionNo +"."+ currentQuestion.question;//h2--HTML"question
     
    //Totaly Display-question and Answer

    currentQuestion.answers.forEach(answer=>{        //Go for ANS
        const button=document.createElement("botton");    ///save it in BUTTON
        button.innerHTML=answer.text;            //text--1,2,3,4
        button.classList.add("btn");         
        answerButtons.appendChild(button);        //display button 
            if(answer.correct){
                button.dataset.correct=answer.correct;
            }
            button.addEventListener("click",selectAnswer)
    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classlist.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classlist.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML='Youu scored ${score}out of ${questions.length}!';
    nextButton.innerHTML="play Again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();
