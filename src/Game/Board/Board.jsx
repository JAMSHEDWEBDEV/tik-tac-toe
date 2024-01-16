import { useState } from "react";

function Squire({value,onSquireClick}){

  return <button
   className="bg-white text-lg m-1 border border-gray-400 leading-9 h-12 w-12"
    onClick={onSquireClick}>
    {value}
   </button>
}

// winner calculate function start 

function calculateWinner(squires){
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(let i = 0; i<lines.length; i++){
      const [a,b,c] = lines[i];
      if(squires[a] && squires[a] === squires[b] && squires[a] === squires[c]){
        return squires[a];
      }
    }
    return null;
}

const Board = () => {
  const [squires,setSquires] = useState(Array(9).fill(null));
  const [xIsNext,setXIsNext] = useState(true);

  // winner calculate status start 
  const winner = calculateWinner(squires);
  let status;
  if(winner){
    status = `Winner : ${winner}`;
  }else{
    status = "Next Player : " + ( xIsNext ? "X" : "O");
  }

  const handleClick = (i) =>{
    if(squires[i] || calculateWinner(squires)){
      return;
    }
    const nextSquire = squires.slice();
    if(xIsNext){
      nextSquire[i] = "X";
    }else{
      nextSquire[i] = "O";
    }
    setSquires(nextSquire);
    setXIsNext(!xIsNext);

  }
    return (
        <>
         <div>{status}</div>
          <div className="flex">
            <Squire value={squires[0]} onSquireClick={()=> handleClick(0)}/>
            <Squire value={squires[1]} onSquireClick={()=> handleClick(1)}/>
            <Squire value={squires[2]} onSquireClick={()=> handleClick(2)}/>
          </div>
          <div className="flex">
            <Squire value={squires[3]} onSquireClick={()=> handleClick(3)}/>
            <Squire value={squires[4]} onSquireClick={()=> handleClick(4)}/>
            <Squire value={squires[5]} onSquireClick={()=> handleClick(5)}/>
          </div>
          <div className="flex">
             <Squire value={squires[6]} onSquireClick={()=> handleClick(6)}/>
             <Squire value={squires[7]} onSquireClick={()=> handleClick(7)}/>
             <Squire value={squires[8]} onSquireClick={()=> handleClick(8)}/>
          </div>

        </>
    );
};

export default Board;