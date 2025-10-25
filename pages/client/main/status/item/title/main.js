export default function title(t,d){
    let style = `
        {
            display:flex;
            flex-direction:column;
            font-size:30px;
            font-weight:900;
            color:var(--colorWhite);
            margin:0px 0px 20px 0px;
            text-align:center;
        }
        >span{
            font-size:13px;
        }
        :responsive{
            font-size:22px;
        }`

    const title = cE("div", style)
    title.innerHTML = `${t}<span>${d}</span>`
    return(title)
}