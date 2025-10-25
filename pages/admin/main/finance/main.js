import value from "./value/main.js"

export default function finance(ps){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            align-items:center;
            width:80%;
            margin:2.5vh 0px;
        }
        :responsive{
            width:100%;
            flex-wrap:wrap;
        }`

    const finance = cE("div", style)
    let monthYear = datetime(ps[ps.length - 1].time).date.slice(3,10)

    let total = 0, now = 0, pending = 0
    for(let i = 0; i < ps.length; i++){
        let p = ps[i]
        if(p.status == "Confirmado"){
            total += p.value
            if(datetime(p.time).date.slice(3,10) == monthYear){now += p.value}
        }
        else{pending += p.value}
    }

    finance.appendChild(value(`Faturamento total`, total))
    finance.appendChild(value(`Faturamento ${monthYear}`, now))
    finance.appendChild(value(`Pendente ${monthYear}`, pending))
    return(finance)
}