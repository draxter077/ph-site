import title from "./title/main.js"
import content from "./content/main.js"

export default function services(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            align-items:center;
            width:100%;
            margin:20vh 0px 0px 0px;
            opacity:0;
            transition:opacity 0.5s;
        }`

    const services = cE("div", style)
    services.appendChild(title())
    services.appendChild(content())

    window.addEventListener(
        "scroll",
        async function a(){
            let scroll = window.scrollY
            let elementTop = services.offsetTop
            if(scroll > elementTop/1.5){
                let svs = services.children[1].children

                services.style.opacity = 1

                for(let i = 0; i < svs.length; i++){
                    svs[i].style.opacity = 1
                    svs[i].style.transform = "translateX(0%)"
                    await new Promise(resolve => setTimeout(resolve, 500))
                }
                window.removeEventListener("scroll", a)
            }
        }
    )

    return(services)
}