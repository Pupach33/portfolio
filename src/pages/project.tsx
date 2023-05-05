import TicTacToe from "@/components/TicTacToe";
import StonePaperScissors from "@/components/stonePaperScissors";


export default function Project(){
    return(
        <div className="project-main22">
                <h1 className="project-h">My projects</h1>
                <div className="project-main">

            <div className="project">
                <img src="/project2.png" className="project-photo" alt="" />
                <h2 className="zagolovok">My first dApp</h2>
                <p className="zagolovok">This is a decentralized analogue of a kickstarter for crowdfunding your web3 projects</p>
                <div className="stack">
                    <h2 className="stack_text blue">React</h2>
                    <h2 className="stack_text yellow">Node</h2>
                    <h2 className="stack_text green">Solidity</h2>
                    <h2 className="stack_text pink">Ethers.js</h2>
                    <h2 className="stack_text red">Tailwind</h2>
                </div>
                <div className="link_div">
                    <a className="link" href="https://github.com/Pupach33/Project-Donat">Source Code</a>
                    <a className="link" href="https://project-donat.vercel.app/">Live Demo</a>
                </div>
            </div>
            <div className="project">
                <img src="/project3.png" className="project-photo" alt="" />
                <h2 className="zagolovok">TokenFactory</h2>
                <p className="zagolovok">Decentralized application for creating your ERC20 tokens on the ETH network</p>
                <div className="stack">
                    <h2 className="stack_text blue">Next.js</h2>
                    <h2 className="stack_text yellow">Node</h2>
                    <h2 className="stack_text green">Solidity</h2>
                    <h2 className="stack_text pink">Ethers.js</h2>
                    <h2 className="stack_text red">Tailwind</h2>
                </div>
                <div className="link_div">
                    <a className="link" href="https://github.com/Pupach33/TokenFactory">Source Code</a>
                    <a className="link" href="https://token-factory-delta.vercel.app/">Live Demo</a>
                </div>
            </div>
            <div className="project">
                <img src="/project1.png" className="project-photo" alt="" />
                <h2 className="zagolovok">Weather app</h2>
                <p className="zagolovok">A simple application that shows the weather in your city or in any other typed in the search</p>
                <div className="stack">
                    <h2 className="stack_text blue">Next.js</h2>
                    <h2 className="stack_text yellow">Node</h2>
                    <h2 className="stack_text red">Tailwind</h2>
                </div>
                <div className="link_div">
                    <a className="link" href="https://github.com/Pupach33/wether">Source Code</a>
                    <a className="link" href="">Live Demo</a>
                </div>
            </div>
            <div className="project">
              <img src="/portfolio.png" className="project-photo" alt="" />
                <h2 className="zagolovok">Portfolio app</h2>
                <p className="zagolovok">My portfolio app you are on now</p>
                <img src="" alt="" />
                <div className="stack">
                    <h2 className="stack_text blue">Next.js</h2>
                    <h2 className="stack_text yellow">Node</h2>
                </div>
            </div>
            <div className="project">
                <StonePaperScissors />
                <h2 className="zagolovok">PaperStoneScissors</h2>
                <p className="zagolovok">My first minigame</p>
                <div className="stack">
                    <h2 className="stack_text blue">Next.js</h2>
                    <h2 className="stack_text blue">Typescript</h2>
                </div>
                <div className="link_div">
                    <h3 className="link" >You can play rigth now</h3>
                </div>
            </div>
            <div className="project">
                <TicTacToe />
                <h2 className="zagolovok">TicTacToe</h2>
                <p className="zagolovok">My second minigame</p>
                <div className="stack">
                    <h2 className="stack_text blue">Next.js</h2>
                    <h2 className="stack_text blue">Typescript</h2>
                    <h2 className="stack_text yellow">ChatGPT</h2>
                </div>
                <div className="link_div">
                    <h3 className="link" >You can play rigth now</h3>
                </div>
            </div>
        </div>
        </div>

    )
}