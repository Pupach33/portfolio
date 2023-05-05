import { useState } from "react"

export default function TicTacToe(){
    const [cells, setCells] = useState(Array(9).fill(null));
    const [isXNext ,setIsXNext] = useState(true)
    const winner = calculateWinner(cells);
    
    interface Cell {
      cells: null | string
    }
    
    function handkeCellClick(index: number){
        const newCells = [...cells]
        newCells[index] = isXNext?"X":"O"
        setCells(newCells)
        setIsXNext(!isXNext)
    }
    function handleResetClick() {
        setCells(Array(9).fill(null));
        setIsXNext(true);
      }

      function calculateWinner(cells:Cell[]) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
    
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            return cells[a];
          }
        }
    
        return null;
      }

      let status;
      if (winner) {
        status = `Winner: ${winner}`
      } else if (cells.every(cell => cell !== null)) {
        status = 'Draw';
      } else {
        status = `Next player: ${isXNext ? 'X' : 'O'}`
      }
    return(
        <div>
        
         <div className="row">
        <div className="cell cell2" onClick={() => handkeCellClick(0)}>{cells[0]}</div>
        <div className="cell" onClick={() => handkeCellClick(1)}>{cells[1]}</div>
        <div className="cell" onClick={() => handkeCellClick(2)}>{cells[2]}</div>
          </div>
      <div className="row">
        <div className="cell" onClick={() => handkeCellClick(3)}>{cells[3]}</div>
        <div className="cell" onClick={() => handkeCellClick(4)}>{cells[4]}</div>
        <div className="cell" onClick={() => handkeCellClick(5)}>{cells[5]}</div>
      </div>
      <div className="row">
        <div className="cell" onClick={() => handkeCellClick(6)}>{cells[6]}</div>
        <div className="cell" onClick={() => handkeCellClick(7)}>{cells[7]}</div>
        <div className="cell" onClick={() => handkeCellClick(8)}>{cells[8]}</div>
      </div>
      <div className="status">{status}</div>
      <button className="reset" onClick={handleResetClick} >reset</button>
        </div>
    )
}
