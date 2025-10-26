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
            height:100svh;
            z-index:-1;
            transition:all 0.5s;
        }
        :responsive{
            flex-direction:column;
        }`

    const background = cE("div", style)
    background.appendChild(logo())
    background.appendChild(text())

    window.addEventListener(
        "scroll",
        () => {
            let viewport = window.innerHeight
            let scrolled = window.scrollY
            if(scrolled < viewport*0.5){
                background.style.transform = `scale(${1 - (0.25*(scrolled/(viewport*0.5)))})`
                background.style.opacity = 1 - (scrolled/(viewport*0.4))
            }
        }
    )
    return(background)
}