let btns=document.querySelectorAll("button");
let resetBtn=document.querySelector("#resetbtn")
let turnx=true;
let count=0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
const reset=()=>{
    turnx=true;
    count=0;
    enable();
    msg.innerText="";
}

resetBtn.addEventListener("click", reset);

btns.forEach((btn) => {
    btn.addEventListener("click",()=>{
        if(turnx){
            btn.innerText="X";
            turnx=false;
        }else{
            btn.innerText="O";
            turnx=true;
        }
        btn.disabled=true;
        count++;
        let win=checkWinner();

        if (count === 9 && !win) {
            msg.innerText="Draw";
            disable();
        }
    })
})
const checkWinner =()=>{
    for(let pattern of winPatterns){
        let p1=btns[pattern[0]].innerText;
        let p2=btns[pattern[1]].innerText;
        let p3=btns[pattern[2]].innerText;

        if(p1===p2 && p2===p3 && p1!="" && p1!="."){
            showWinner(p1);
            disable();
            return true;
        }
    }
}
const showWinner =(winner)=>{
    msg.innerText=`Congrats, Winner is ${winner}`;
}

enable=()=>{
    btns.forEach((btn) => {
        btn.disabled=false;
        btn.innerText="";
    })
}
disable=()=>{
    btns.forEach((btn) => {
        btn.disabled=true;
    })
}