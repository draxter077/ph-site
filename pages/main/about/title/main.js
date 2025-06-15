export default function title(){
    let style = `
        {
            font-size:22px;
            color:var(--colorWhite);
            padding:5px 10px;
            border-bottom:1px solid var(--colorWhite);
        }
        :responsive{
            font-size:18px;
            text-align:center;
            width:90%;
        }`

    const title = cE("div", style)
    title.innerHTML = "O que fazemos"
    return(title)
}