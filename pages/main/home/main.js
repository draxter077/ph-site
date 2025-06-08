import logo from "./logo/main.js"
import text from "./text/main.js"

export default function home(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-evenly;
            width:100%;
            height:100dvh;
        }
        :responsive{flex-direction:column;}`

    const home = cE("div", style)
    home.appendChild(logo())
    home.appendChild(text())
    return(home)
}