import logo from "./logo/main.js"

export default function head(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:center;
            align-items:center;
            width:100%;
            background:var(--colorBlue);
        }`

    const head = cE("div", style)
    head.appendChild(logo())
    return(head)
}