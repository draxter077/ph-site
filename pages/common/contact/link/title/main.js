export default function title(t){
    let style = `
        {
            font-size:20px;
            color:var(--colorBlack);
        }
        :responsive{
            font-size:15px;
        }`

    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}