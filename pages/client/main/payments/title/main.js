export default function title(){
    let style = `
        {
            font-size:28px;
            color:var(--colorBlack);
            padding:0px 30px;
            width:fit-content;
            margin:7.5svh 0px 0px 0px;
        }
        :responsive{
            font-size:18px;
        }`

    const title = cE("div", style)
    title.innerHTML = "Pagamentos"
    return(title)
}