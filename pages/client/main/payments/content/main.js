import line from "./line/main.js"

export default function content(ps){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            max-height:35svh;
            overflow-y:scroll;
        }
        :responsive{
            overflow-x:scroll;
        }
        >span{
            color:var(--colorWhite);
            font-size:20px;
            padding:5svh;
            width:100%;
            text-align:center;
        }`

    const content = cE("div", style)
    
    for(let i = ps.length - 1; i >= 0; i--){
        let p = ps[i]
        content.appendChild(line(p))
    }
    return(content)
}