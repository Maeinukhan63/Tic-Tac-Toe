let boxes=document.querySelectorAll(".box");
let btn=document.querySelector(".reset-game");
let newbtn=document.querySelector(".new-game");
let msgcont=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");



let trueO =true;

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

];

const resetGame =()=>{
    trueO=true;
    enableBox();
msgcont.classList.add("hide")

}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("btn was clicked ");
        if(trueO){//player o
            box.innerText="O";
            trueO=false;
        }else{//player x
            box.innerText="X";
            trueO=true;
        }
        box.disabled=true;

        checkWinner();
    });
});

function disableBox(){
    for(box of boxes){
        box.disabled=true;
    }
}

function enableBox(){
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const ShowWinner=(winner)=>{
    msg.innerText=`Congratulations,winner is ${winner}`;
    msgcont.classList.remove("hide");
    disableBox();
}

const checkWinner= ()=>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
if(pos1Val === pos2Val && pos2Val === pos3Val){
    // console.log("winner",pos1Val);

    ShowWinner(pos1Val);
}
}

    }
}
 
newbtn.addEventListener("click",resetGame);
btn.addEventListener("click",resetGame);
