let boxes= document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector(".new-btn");
let msgcontainer=document.querySelector(".msg-cont");
let msg=document.querySelector("#msg");
let turnO=true;//player X, player O

const Winpatterns=
[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) => {
    box.addEventListener("click",()=>
        {
            console.log("Box was clicked");
            if(turnO==true)
                {
                    box.innerText="O";
                 turnO=false;
                }
                else
                {
                    box.innerText="X";
                    turnO=true;
                }
                box.disabled=true;
                checkWinner();
        });
});
const resetgame=()=>
    {
        turnO=true;
        enabledboxes();
        msgcontainer.classList.add("hide");
    }
const disabledBoxes=()=>
    {
        for(let box of boxes)
            {
                box.disabled=true;
            }
    };
const enabledboxes=()=>
    {
        for(let box of boxes)
            {
                box.disabled=false;
                box.innerText="";
            }
    }
const showWinner=(winner)=>
    {
        msg.innerText=`Congrats, Winner is ${winner}`;
        msgcontainer.classList.remove("hide");
        
        disabledBoxes();
    };
const checkWinner=()=>
    {
        for( let pattern of Winpatterns)
            {
               let pos1Val=boxes[pattern[0]].innerText;
               let pos2Val=boxes[pattern[1]].innerText;
               let pos3Val=boxes[pattern[2]].innerText;
               if(pos1Val!=""&& pos2Val!="" && pos3Val!="")
                {
                    if(pos1Val==pos2Val && pos2Val==pos3Val)
                        {

                           showWinner(pos1Val);

                        }
                }
            }
    }
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);