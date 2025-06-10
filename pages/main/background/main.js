import logo from "./logo/main.js"
import text from "./text/main.js"

export default function background(){
    let style = `
        {
            position:fixed;
            top:0%;
            left:0%;
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-evenly;
            width:100%;
            height:100vh;
            z-index:-1;
            
            animation:minimizing 1s linear 0s 1 forwards;
            animation-timeline:scroll();
            animation-range-start:0px;
            animation-range-end:100vh;
        }
        @keyframes minimizing{
            0%[transform:scale(1);opacity:1]
            100%[transform:scale(0.75);opacity:0]
        }
        :responsive{
            flex-direction:column;
        }`

    const background = cE("div", style)
    background.appendChild(logo())
    background.appendChild(text())
    return(background)
}