import info from "./info/main.js"
import button from "./button/main.js"

export default function content(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:flex-end;
            width:100%;
        }`

    const content = cE("div", style)
    content.appendChild(info())
    content.appendChild(button())
    return(content)
}