let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#btn");
let newgameBtn = document.querySelector("#mssg-btn");
let mssgContainer = document . querySelector(".mssg-container");
let mssg = document.querySelector("#mssg");

let turnO = true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const resetGame = () =>{
    turnO = true;
    enableBoxes();
    mssgContainer.classList.add("hide");
};

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        console.log("box click");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();

    });

});

const disabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) =>{
    mssg.innerText = `Congratulation 🎉 , Winner is ${winner}`;
    mssgContainer.classList.remove("hide");
    disabledBoxes();

}

const checkWinner =() =>{
    for(let pattern of winPattern){
        // console.log(pattern[0] , pattern[1] , pattern[2]);
        // console.log( boxes[pattern[0]] , boxes[pattern[1]] , boxes[pattern[2]]);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
       
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};



newgameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame)