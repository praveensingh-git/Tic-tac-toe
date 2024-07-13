let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");

let turn0 = true;

let winptrn = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 6],
  [6, 7, 8],
];

const resetGame=()=>{
    turn0=true;
    enableBox();
    msgContainer.classList.add("hide")
    
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.innerText = "x";
    
    
    if (turn0 === true) {
      box.innerText = "0";
      turn0 = false;
      
    } else {
      turn0 = true;
      box.innerText = "X";
    }
    box.disabled = true; //disables box click
    checkWinner();
  });
});

const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true;
        
    }
}
const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    for(let box of boxes){
       disableBox();
        
    }
}

const checkWinner = () => {
  for (let pattern of winptrn) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    // );

    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText

    if (pos1val!="" && pos2val!="" && pos3val!=""){
        if(pos1val==pos2val && pos2val==pos3val){
           
            showWinner(pos1val);

    }
  }
}
};

resetbtn.addEventListener("click",resetGame)


