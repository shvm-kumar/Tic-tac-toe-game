let boxes=document.querySelectorAll(".box")
let resetButton=document.querySelector(".reset-button")
let newGame=document.querySelector(".new-button")
let messageContaner=document.querySelector(".msg-container")
let message=document.querySelector("#message")


let turnO= true//playerX(X), playerY(O)



let winpattern=[[0,1,2],[3,4,5],[6,7,8],[2,5,8],[1,4,7],[0,3,6],[0,4,8],[2,4,6]]



boxes.forEach((box)=>
{
              box.addEventListener("click",()=>
              {
                            console.log("box is clicked...")
                          if(turnO===true)
                          {
                            box.innerText="O";
                            
                            turnO=false;
                          }
                          else{
                            box.innerText="X"
                            turnO=true;
                          }
                          box.disabled=true;



                          checkWinner();
                     
              })
})


const checkWinner=()=>
{
              for( let pattern of winpattern)
              {
                            console.log(pattern[0],pattern[1],pattern[2])

                            let pos1val=boxes[pattern[0]].innerText;
                            let pos2val=boxes[pattern[1]].innerText;
                            let pos3val=boxes[pattern[2]].innerText;
                            if(pos1val!="" && pos2val!="" && pos3val!="")
                            {
                                          if(pos1val===pos2val &&pos2val===pos3val)
                                          {
                                                        console.log("winner")
                                                        showWinner(pos1val)
                                                      
                                          }
                            }
              }

}
const desableBox=()=>
{
              for(let box of boxes)
              {
                            box.disabled=true
              }
}

const enableBox=()=>
{
              for(let box of boxes)
              {
               box.disabled=false;
               box.innerText="";
              }
}


const showWinner=(winner)=>
{
              message.innerText=`Congratulation, winner is ${winner}`
              messageContaner.classList.remove("hide");
              desableBox();
              

}


const resetGame=()=>
{
              turnO=true;
              enableBox();
              messageContaner.classList.add("hide")

}

newGame.addEventListener("click",resetGame)
resetButton.addEventListener("click", resetGame)