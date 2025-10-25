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
        }`

    const content = cE("div", style)
    ps.reverse()
    for(let i = 0; i < ps.length; i++){content.appendChild(line(ps[i]))}
    return(content)
}