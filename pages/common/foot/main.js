export default function foot(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            width:100%;
            color:var(--colorBlack);
            padding:10px 0px;
            font-size:17px;
            margin:5svh 0px 0px 0px;
        }
        >a>img{
            height:28px;
            margin:0px 0px 0px 10px;
            border-radius:5px;
            transition:transform 0.5s;
        }
        >a>img:hover{
            transform:scale(1.1);
        }
        :responsive{
            font-size:14px;
        }`

    const foot = cE("div", style)
    foot.innerHTML = "Desenvolvido por <a target='_blank' href='https://www.ph.net.br'><img src='https://www.ph.net.br/assets/logo.jpg' /></a>"
    return(foot)
}