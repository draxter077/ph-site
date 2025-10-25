import img from "../img/main.js"
import text from "../text/main.js"

export default function confirmed(pid){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:33%;
            padding:0px 10px;
        }`

    const confirmed = cE("div", style)
    confirmed.appendChild(img("https://images.vexels.com/media/users/3/340652/isolated/preview/8d53e27b0e9c5d7ce385034bae67746b-grafico-minimalista-de-marca-de-verificacao-verde.png"))
    confirmed.appendChild(text(`Pagamento #${pid}`))
    confirmed.appendChild(text(`Seu pagamento foi confirmado`))
    confirmed.appendChild(text(`Agradecemos sua confiança e escolha na Ph Web Software por mais um mês :)`))
    return(confirmed)
}