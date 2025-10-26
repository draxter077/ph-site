import option from "./option/main.js"

export default function options(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            align-items:center;
            flex-wrap:wrap;
            width:70%;
        }
        :responsive{
            width:90%;
        }`

    const options = cE("div", style)
    options.appendChild(option("./assets/email.png", "contato@ph.net.br", "mailto:contato@ph.net.br"))
    options.appendChild(option("./assets/whatsapp.png", "(41) 99501-4187", "https://wa.me/554195014187"))
    options.appendChild(option("./assets/instagram.png", "@PhWebSoftware", "https://www.instagram.com/phwebsoftware"))
    return(options)
}