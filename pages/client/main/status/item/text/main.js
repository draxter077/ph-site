export default function text(l){
    let style = `
        {
            width:100%;
            font-size:15px;
            color:var(--colorBlack);
            background:var(--colorWhite);
            padding: 5px 10px;
            border-radius:0px 0px 5px 5px;
            text-align:justify;
        }
        :responsive{
            font-size:12px;
        }`

    const text = cE("div", style)
    text.innerHTML = l
    return(text)
}