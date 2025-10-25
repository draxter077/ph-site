import title from "./title/main.js"
import status from "./status/main.js"
import text from "./text/main.js"

export default function item(t,d,c,s,l){
    let style = `
        {
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            height:100%;
            width:20%;
            box-shadow:0px 0px 2px 2px var(--colorBlue);
            background:var(--colorBlue);
            padding:10px 15px;
            border-radius:10px;
        }
        :responsive{
            width:100%;
            margin:5px;
        }`

    const item = cE("div", style)
    item.appendChild(title(t,d))
    item.appendChild(status(c,s))
    item.appendChild(text(l))
    return(item)
}