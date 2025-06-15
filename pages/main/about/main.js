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
            box-shadow:0px 0px 5px 5px var(--colorBlue);
            background:var(--colorBlue);
            padding:10vh;
        }
        :responsive{
            box-shadow:0px 0px 3px 3px var(--colorBlue);
        }`

    const about = cE("div", style)
    about.appendChild(title())
    about.appendChild(content())
    return(about)
}