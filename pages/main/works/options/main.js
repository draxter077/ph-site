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
    options.appendChild(option("rgb(251, 141, 103)", "height", "https://g8proteinas.com.br/assets/brand/logoname%20horizontal.png"))
    options.appendChild(option("rgb(20,30,45);", "width", "https://www.licenos.com.br/assets/brand/logoname.png"))
    options.appendChild(option("rgb(250, 250, 250)", "height", "https://exclusive.ph.net.br/assets/brand/logoname.png"))
    return(options)
}