export default function title(p){
    let style = `
        {
            font-size:18px;
            text-wrap:nowrap;
            color:var(--colorBlack);
        }
        >span{
            color:var(--colorBlue);
            margin:0px 5px;
        }
        :responsive{
            font-size:13px;
        }`

    const title = cE("div", style)
    let date = datetime(p.time)
    title.innerHTML = `${p.id}<span>•</span>${date.date}<span>•</span>${stringifyNumber(p.value)}<span>•</span>${p.status}`
    return(title)
}