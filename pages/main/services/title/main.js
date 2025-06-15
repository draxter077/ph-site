export default function title(){
    let style = `
        {
            font-size:22px;
            color:var(--colorBlue);
            padding:5px 10px;
            border-bottom:1px solid var(--colorBlue);
        }
        :responsive{
            text-align:center;
            width:90%;
        }`

    const title = cE("div", style)
    title.innerHTML = "Como fazemos"
    return(title)
}