import img from "./img/main.js"
import text from "./text/main.js"

export default function service(n, src, t){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            margin:0px 0px 0px ${75*n}px;
        }
        :responsive{
            margin:0px;
        }`

    const service = cE("div", style)
    service.appendChild(img(src))
    service.appendChild(text(t))
    return(service)
}