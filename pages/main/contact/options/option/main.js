import img from "./img/main.js"
import text from "./text/main.js"

import back from "./back/main.js"

export default function option(src, t, disclaimer, f){
    let style = `
        {
            position:relative;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            width:26%;
            aspect-ratio:1;
            border-radius:15px;
            cursor:pointer;
            border:2px solid var(--colorWhite);
            overflow:hidden;
            transition:all 0.5s;
        }
        :hover{
            transform:scale(1.05);
        }
        :responsive{
            width:48%;
            margin:0px 0px 10px 0px;
        }`

    const option = cE("div", style)
    option.appendChild(img(src))
    option.appendChild(text(t))
    option.appendChild(back(disclaimer))

    option.addEventListener(
        "click",
        async function a(){
            if(option.style.transform == "rotate3d(0, 1, 0, 180deg)"){
                option.style.transform = "rotate3d(0, 1, 0, 0deg)"
                option.children[2].style.transform = "rotate3d(0, 1, 0, 180deg)"
                option.children[2].style.opacity = 0
            }
            else{
                option.style.transform = "rotate3d(0, 1, 0, 180deg)"
                option.children[2].style.transform = "rotate3d(0, 1, 0, -180deg)"
                option.children[2].style.opacity = 1
                f()
                await new Promise(resolve => setTimeout(resolve, 5000))
                option.style.transform = "rotate3d(0, 1, 0, 0deg)"
                option.children[2].style.transform = "rotate3d(0, 1, 0, 180deg)"
                option.children[2].style.opacity = 0
            }
        }
    )

    return(option)
}