import light from "./light/main.js"
import text from "./text/main.js"

export default function status(c,s){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            background:var(--colorWhite);
            width:100%;
            padding:10px 0px;
            border-radius:5px 5px 0px 0px;
        }`

    const status = cE("div", style)
    status.appendChild(light(c))
    status.appendChild(text(s))
    return(status)
}