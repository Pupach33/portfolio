import Link from "next/link";

export default function Main(){

  return (
  <div className="main">
    <div className="somemain">
      <h1 className="back back_1">I BUILD</h1>
      <h1 className="hTeg">Artem Vainonen</h1>
      <h2 className="pechat">Solidity & Web3 & Frontend Devoloper</h2>
      <h1 className="back back_2">DAPPS</h1>
      <div className="buttonMainDiv">
        <Link className="buttonInMain buttProj" href="/project">View Work</Link>
        <Link className="buttonInMain" href="/contact">Contact Me</Link>
      </div>

    </div>
      <div className="boxImg">
        <img src="/box.png" alt="" />
      </div>
  </div>
  )
}