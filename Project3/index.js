const setOfWords =[
    "My name is Yogesh Rathod I am a software engineer",
    "Hope you are havung fun this is the simple gane you can make",
    "If you want souce code then link will be provided to you soon So you can also create your own verson of this challenges"
]

const msg = document.getElementById('msg');
const typeWords =document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime,endTime;

const playGame =()=>{
    let randonNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerText =setOfWords[randonNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}

const endPlay = () =>{
 let date = new Date();
 endTime = date.getTime();
 let totalTime = ((endTime-startTime)/1000);
 let totalStr = typeWords.value;
 let wordCount = wordCounter(totalStr);
 let speed = Math.round((wordCount/totalTime)*60);
 let finalMsg = `You typed speed is ${speed} words per minutes, `;
finalMsg += CompareWords(msg.innerText,totalStr);

 msg.innerText= finalMsg;
}

const CompareWords =(str1,str2)=>{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt =0;

    // ArrayName then function then it will take whole function with value and index no. of that array
    words1.forEach(function (item,index) {
        if(item == words2[index]){
            cnt++;
        }
    });
    let errorWords = (words1.length-cnt);
    return `${cnt} correct word out of ${words1.length} words and the total number of errors are ${errorWords}.`;
}

const wordCounter = (str) =>{
   let response = str.split(" ").length;
   console.log(response);
   return response;
}

btn.addEventListener('click',function(){
    // console.log(this);
    if(this.innerText == 'Start'){
        typeWords.disabled = false ;
        playGame();
    }else if (this.innerText == 'Done'){
        typeWords.disabled = true ;
        btn.innerText ="start";
        endPlay();
    }
});








