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
    options.appendChild(option("./assets/email.png", "contato@ph.net.br", "Copiado para a sua área de transferência!", () => navigator.clipboard.writeText("contato@ph.net.br")))
    options.appendChild(option("./assets/whatsapp.png", "(41) 99501-4187", "Aberto em outra guia", () => window.open("https://wa.me/554195014187", "_blank")))
    //options.appendChild(option("./assets/instagram.png", "@phWebSoftware", "Aberto em outra guia", () => window.open("https://www.instagram.com/philippeprestes", "_blank")))
    return(options)
}