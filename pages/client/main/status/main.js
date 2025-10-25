import item from "./item/main.js"

export default function status(u, ps){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            width:80%;
            margin:2.5svh 0px 0px 0px;
        }
        :responsive{
            flex-wrap:wrap;
        }`

    const status = cE("div", style)
    let color, s, d
    let date = new Date()

    if(ps[ps.length - 1].status == "Pendente"){
        if(ps.length == 1){
            color = "rgb(230,204,57)"
            s = "Aguardando liberação"
            d = "Realize o pagamento da parcela pendente para disponibilizarmos esse produto"
        }
        else if(date-0 - ps[ps.length - 1].time > 7*24*60*60*1000){
            color = "rgb(230,80,0)"
            s = "Bloqueado"
            d = "O pagamento pendente venceu, assim sua assinatura foi encerrada. Agradecemos por ter confiado na Ph Web Software! :)"
        }
        else{
            color = "rgb(230,204,57)"
            s = "Em risco"
            d = "Realize o pagamento da parcela pendente para regularizar o estado do produto"
        }
    }
    else{
        if(ps.length == 1 && date-0 - ps[ps.length - 1].time < 24*60*60*1000){
            color = "rgb(230,204,57)"
            s = "Em ativação"
            d = "Em até 24h após a confirmação do pagamento, esse produto estará ativo"
        }
        else{
            color = "rgb(0,230,10)"
            s = "Ativo"
            d = "Produto ativo e disponível"
        }
    }
    
    status.appendChild(item("Domínio", u.domain, color, s, d))
    status.appendChild(item("Website", `www.${u.domain}`, color, s, d))
    status.appendChild(item("E-mail", `@${u.domain}`, color, s, d))
    return(status)
}