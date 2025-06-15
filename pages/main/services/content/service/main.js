import img from "./img/main.js"
import text from "./text/main.js"

export default function service(n, src, t){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            margin:0px 0px 10px ${75*n}px;
            background:var(--colorBlue);
            padding:10px 15px;
            border-radius:5px;
            opacity:0;
            transform:translateX(100%);
            transition:all 0.5s;
        }
        :responsive{
            margin:0px 0px 10px 0px;
        }`

    const service = cE("div", style)
    service.appendChild(img(src))
    service.appendChild(text(t))
    return(service)
}