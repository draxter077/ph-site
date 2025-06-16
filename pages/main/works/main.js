import title from "./title/main.js"
import options from "./options/main.js"

export default function works(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            margin:20vh 0px 0px 0px;
            width:90%;
            opacity:0;
            transition:opacity 0.5s;
        }`

    const works = cE("div", style)
    works.appendChild(title())
    works.appendChild(options())

    window.addEventListener(
        "scroll",
        async function a(){
            let scroll = window.scrollY
            let elementTop = works.offsetTop
            if(scroll > elementTop/1.5){
                let wks = works.children[1].children

                works.style.opacity = 1
                await new Promise(resolve => setTimeout(resolve, 500))
                
                for(let i = 0; i < wks.length; i++){
                    wks[i].style.opacity = 1
                    await new Promise(resolve => setTimeout(resolve, 500))
                }
                window.removeEventListener("scroll", a)
            }
        }
    )

    return(works)
}