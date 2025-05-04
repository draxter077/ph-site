import logo from "./logo/main.js"
import text from "./text/main.js"

export default function about(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-evenly;
            width:90%;
        }
        :responsive{flex-direction:column;}`

    const about = cE("div", style)
    about.appendChild(logo())
    about.appendChild(text())
    return(about)
}