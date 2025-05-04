export default function text(){
    let style = `
        {
            max-width:60%;
            padding:20px;
            font-size:42px;
            color:var(--colorBlue);
        }`

    const text = cE("div", style)
    text.innerHTML = "Especialista em Web Software"
    return(text)
}