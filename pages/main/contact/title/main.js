export default function title(){
    let style = `
        {
            font-size:22px;
            color:var(--colorBlue);
            padding:5px 10px;
            border-bottom:1px solid var(--colorBlue);
        }`

    const title  = cE("div", style)
    title.innerHTML = "Entre em contato"
    return(title)
}