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
            padding:1%;
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

    const option = cE("a", style)
    option.appendChild(img(t, src))
    option.href = src.split("/assets")[0]
    option.target = "_blank"
    return(option)
}