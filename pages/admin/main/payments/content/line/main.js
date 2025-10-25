export default function line(p){
    let style = `
        {
            font-size:18px;
            text-wrap:nowrap;
            padding:2px 5px;
            border-bottom:1px solid var(--colorBlue);
            ${p.status == "Pendente" ? "background:rgb(230,230,0);" : ""}
            min-width:100%;
            color:var(--colorBlack);
        }
        >span{
            color:var(--colorBlue);
            margin:0px 5px;
        }
        :responsive{
            font-size:13px;
        }`

    const line = cE("div", style)
    line.innerHTML = `${p.id}<span>•</span>${datetime(p.time).date}<span>•</span>${p.client}<span>•</span>${stringifyNumber(p.value)}<span>•</span>${p.status}`
    return(line)
}