export default function n(value){
    let style = `
        {
            font-size:25px;
            color:var(--colorBlack);
            background:var(--colorWhite);
            padding:5px 10px;
            border-radius:5px;
        }
        :responsive{
            font-size:17px;
        }`

    const n = cE("div", style)
    n.innerHTML = stringifyNumber(value)
    return(n)
}