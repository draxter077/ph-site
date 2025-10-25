export default function text(s){
    let style = `
        {
            font-size:18px;
            color:var(--colorBlack);
        }
        :responsive{
            font-size:14px;
        }`

    const text = cE('div', style)
    text.innerHTML = s
    return(text)
}