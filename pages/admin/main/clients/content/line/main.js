export default function line(c){
    let style = `
        {
            font-size:18px;
            text-wrap:nowrap;
            padding:2px 5px;
            border-bottom:1px solid var(--colorBlue);
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
    line.innerHTML = `${c.id}<span>•</span>${c.name}<span>•</span>${c.domain}<span>•</span>${c.email}`
    return(line)
}