import title from "./title/main.js"
import content from "./content/main.js"

export default function about(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            align-items:center;
            width:100%;
            background:var(--colorBlue);
            padding:10vh;
        }`

    const about = cE("div", style)
    about.appendChild(title())
    about.appendChild(content())
    return(about)
}