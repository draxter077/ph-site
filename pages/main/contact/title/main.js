export default function title(){
    let style = `
        {
            font-size:22px;
            color:var(--colorWhite);
            padding:5px 10px;
            border-bottom:1px solid var(--colorWhite);
        }`

    const title  = cE("div", style)
    title.innerHTML = "Entre em contato"
    return(title)
}