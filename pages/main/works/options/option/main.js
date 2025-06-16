import img from "./img/main.js"

export default function option(c, t, src){
    let style = `
        {
            display:flex;
            justify-content:center;
            align-items:center;
            width:30%;
            aspect-ratio:2;
            background:${c};
            border-radius:10px;
            margin:10px 0px;
            padding:10px;
            overflow:hidden;
            cursor:pointer;
            opacity:0;
            transition:all 0.5s;
        }
        :hover{
            transform:scale(1.05);
        }
        :responsive{
            width:49%;
        }`

    const option = cE("div", style)
    option.appendChild(img(t, src))
    option.addEventListener("click", () => window.open(src.split("/assets")[0], "_blank"))
    return(option)
}