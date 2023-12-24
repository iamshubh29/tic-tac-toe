let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let MsgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turno=true; //playero
const winPattern = [
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
]; 
 const resetGame = ()=> {
    turno= true;
    enableBtn();
    MsgContainer.classList.add("hide");
 };
 const disableBtn = () =>{
    for (let box of boxes){
        box.disabled=true;
    }
 };
 const enableBtn = () =>{
    for (let box of boxes){
        box.disabled= false;
        box.innerText= "";
    }
};
boxes.forEach((box)=> {
    box.addEventListener("click" , ()=>{
        console.log("box was clicked");
        // box.innerText="abcd";
        if(turno){
            box.innerText='o';
            turno=false;
        }
        else{
            box.innerText='X';
            turno = true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const showWinner= (winner) =>{
    msg.innerText = 'Congratulatins,winner is `${winner}`';
    MsgContainer.classList.remove("hide");
    disableBtn();
}
const checkWinner = () =>{
    for( let patterns of winPattern){
        // console.log( boxes[patterns[0]].innerText,boxes[patterns[1]].innerText,boxes[patterns[2]].innerText);
        let pos1 = boxes[patterns[0]].innerText;
        let pos2 = boxes[patterns[1]].innerText;
        let pos3= boxes[patterns[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos2 != ""){
            if( pos1 === pos2 && pos2===pos3){
                console.log("winner");
                showWinner(pos1);

            }

        }
    }

};
newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);