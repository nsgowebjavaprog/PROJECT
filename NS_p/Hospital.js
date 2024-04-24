let slide=document.querySelectorAll(".patientReview");
let connectBtn=document.querySelectorAll(".connectBtn");
let count = 0; 

slide.forEach(function(slides, index){
    slides.style.left=`${index*100}%`
})

function myFun(){
    slide.forEach(function(curVal){
        curVal.style.transform=`translateX(-${count*100}%)`
    })
}
setInterval(function(){
    count++;
    if(count==slide.length){
        count=0;
    }
    myFun()
},1000)

// card.forEach(function(cards){
//     cards.addEventListener("click",function(){
//         console.log(cards);

//         document.querySelector(".content"),innerHTML=`
//         <img src=${cards.firstElementChild.src} alt="">
//         <div class="contentText">
//             <H1>AlEXA ZOAN</H1>
//             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut mollitia, error quo nobis ea, optio eius rerum officia ab ipsum voluptatem. Voluptatem perspiciatis reprehenderit facere maiores, sit in molestias vitae?</p>
//         </div>
//         `
//     })
// })
connectBtn.addEventListener("click",function(){
    let email=document.getElementById("email");
    let pass=document.getElementById("pass");

    if(email.value == "" && pass.value == ""){
        alert("enter Details")
    }else{
        alert("You logged-In")
    }
})