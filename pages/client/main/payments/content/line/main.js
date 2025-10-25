import title from "./title/main.js"
import button from "./button/main.js"

export default function line(p){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-between;
            padding:2px 5px;
            border-bottom:1px solid var(--colorBlue);
            width:100%;
        }`

    const line = cE("div", style)
    line.appendChild(title(p))
    if(p.status == "Pendente"){line.appendChild(button(p))}
    return(line)
}