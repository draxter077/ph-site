export default function title(){
    let style = `
        {
            font-size:22px;
            color:var(--colorBlue);
            padding:5px 10px;
            border-bottom:1px solid var(--colorBlue);
            margin:0px 0px 30px 0px;
        }
        :responsive{
            font-size:18px;
            text-align:center;
            width:90%;
        }`

    const title = cE("div", style)
    title.innerHTML = "O que já fizemos"
    return(title)
}