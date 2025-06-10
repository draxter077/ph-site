export default function text(t){
    let style = `
        {
            font-size:22px;
            color:var(--colorWhite);
        }
        :responsive{
            font-size:17px;
        }`

    const text = cE("div", style)
    text.innerHTML = t
    return(text)
}