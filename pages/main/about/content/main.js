export default function content(){
    let style = `
        {
            width:90%;
            font-size:32px;
            color:var(--colorWhite);
            text-align:center;
            margin:30px 0px 0px 0px;
        }
        :responsive{
            font-size:25px;
        }`
    
    const content = cE("div", style)
    content.innerHTML = "Transformamos sua ideia em uma realidade no mundo digital"
    return(content)
}