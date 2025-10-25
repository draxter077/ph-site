export default function title(t){
    let style = `
        {
            font-size:15px;
            font-weight:900;
            color:var(--colorWhite);
            margin:0px 0px 5px 0px;
        }
        :responsive{
            font-size:12px;
        }`
    
    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}