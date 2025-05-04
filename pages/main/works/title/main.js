export default function title(){
    let style = `
        {
            width:fit-content;
            padding:5px 10px;
            font-size:20px;
            color:var(--colorBlue);
            border-bottom:1px solid var(--colorBlue);
        }`

    const title  = cE("div", style)
    title.innerHTML = "A PH está por trás destes sites"
    return(title)
}