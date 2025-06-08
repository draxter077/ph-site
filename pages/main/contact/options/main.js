import option from "./option/main.js"

export default function options(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            align-items:center;
            flex-wrap:wrap;
            width:70%;
        }
        :responsive{
            flex-direction:column;
        }`

    const options = cE("div", style)
    options.appendChild(option("./assets/email.png", "contato@ph.net.br", "Copiado para a sua área de transferência!", undefined))
    options.appendChild(option("./assets/phone.png", "(41) 99171-8360", "Copiado para a sua área de transferência!", undefined))
    options.appendChild(option("./assets/instagram.png", "@phWebSoftware", "Aberto em outra guia", () => window.open("https://www.instagram.com/philippeprestes", "_blank")))
    return(options)
}