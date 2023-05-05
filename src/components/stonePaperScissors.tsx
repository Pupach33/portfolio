import { useState } from "react"


export default function StonePaperScissors(){
  const [player,setPlayer] = useState("stone")
  const [playerValue,setPlayerValue] = useState(1)
  const [result,setResult] = useState("")
  const [sourceHuman,setSourceHuman] = useState(0)
  const [sourceAI,setSourceAI] = useState(0)
  function handleSetPlayers(num:number){
    console.log('here')
    console.log(num,"num")
    if(num === 1){
        setPlayer("stone")
    }else if (num === 2){
        setPlayer("paper")
    }else if (num === 3){
        setPlayer("cutter")
    }
  }
  console.log(playerValue)
  console.log(player)
  function handleChangePlayerAdd(){
    
    if(playerValue === 3){
        let mark = 1
        setPlayerValue(1)
        handleSetPlayers(mark)  
    }else{
       let mark = playerValue + 1
       setPlayerValue(playerValue => playerValue + 1)
       handleSetPlayers(mark)  
    }
  }
  function handleChangePlayerClear(){
    if(playerValue === 1){
        let mark = 3
        setPlayerValue(3)
        handleSetPlayers(mark)
    }else{
    let mark = playerValue - 1
    setPlayerValue(playerValue => playerValue - 1)
    handleSetPlayers(mark) 
    } 
  }
  function randomComp(){
    let prop = Math.floor(Math.random() *3)
    if(prop === 0){
      return "stone"
    }else if(prop === 1){
      return "paper"
    }else return "cutter"
  }
  function game(vibor:string,comp:string){
    if(vibor !== ""){
      if(vibor === comp){
      return "drow"
    }
    if(vibor === "stone"){
      if(comp === "paper"){
        return "Computer win"
      }else return "You win"
    }
    if(vibor === "paper"){
      if(comp === "stone"){
        return "You win"
      }else return "Computer win"
    }
    if(vibor === "cutter"){
      if(comp === "stone"){
        return "Computer win"
      }else return "You win"
    } 
    }else return "please choose an item"

  }
  
  function start(){
    let comp:string  = randomComp()
    let players:string = player
    let res:string | undefined = game(players,comp)
    if(res === "Computer win"){
      setSourceAI(sourceAI => sourceAI + 1)
    }else if(res === "You win"){
      setSourceHuman(sourceHuman => sourceHuman + 1)
    }
    setResult(comp)
  }
  return (
    <div className="mainDiv">
        <div className="gameImageDiv">
          {playerValue === 1? (<img className="gameImages" src="/stone.png"/>):(<div>
        {playerValue === 2?(<img className="gameImages" src="/paper.png"/>):(<img className="gameImages" src="/cut.png"/>)}
        </div>)}  
        <h1> {sourceHuman} : {sourceAI} </h1>
        {result === "stone"? (<img className="gameImages" src="/stone.png"/>):(<div>
        {result === "paper"?(<img className="gameImages" src="/paper.png"/>):(<img  className="gameImages" src="/cut.png"/>)}
        </div>)}  
        </div>
       
    <div className="chooseButtonDiv">
      <button className="chooseButton" onClick={handleChangePlayerClear}>{`<`}</button>
      <h1>{player}</h1>
      <button className="chooseButton" onClick={handleChangePlayerAdd}>{`>`}</button>
    </div>
      <div className="chooseButtonDiv">
       <button className="chooseButton play" onClick={start}>play</button> 
      </div>
    </div>
  )

}