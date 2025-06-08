export default function text(t){
    let style = `
        {
            font-size:22px;
            color:var(--colorWhite);
        }`

    const text = cE("div", style)
    text.innerHTML = t
    return(text)
}