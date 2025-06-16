import option from "./option/main.js"

export default function options(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            flex-wrap:wrap;
            width:100%;
        }`
    
    const options = cE("div", style)
    options.appendChild(option("rgb(0, 0, 0)", "width", "https://www.blankeprestes.adv.br/assets/logo.png"))
    options.appendChild(option("rgb(255,145,77)", "height", "https://gi.ph.net.br/assets/logo.png"))
    options.appendChild(option("rgb(0, 0, 0)", "height", "https://i.ph.net.br/assets/logo.png"))
    return(options)
}