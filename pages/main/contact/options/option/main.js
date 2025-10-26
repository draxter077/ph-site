import img from "./img/main.js"
import text from "./text/main.js"

export default function option(src, t, h){
    let style = `
        {
            position:relative;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            width:26%;
            aspect-ratio:1;
            border-radius:15px;
            cursor:pointer;
            border:2px solid var(--colorWhite);
            overflow:hidden;
            transition:all 0.5s;
        }
        :hover{
            transform:scale(1.05);
        }
        :responsive{
            width:48%;
            margin:0px 0px 10px 0px;
        }`

    const option = cE("a", style)
    option.href = h
    option.target = "_blank"
    option.appendChild(img(src))
    option.appendChild(text(t))
    return(option)
}