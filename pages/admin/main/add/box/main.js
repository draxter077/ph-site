import title from "./title/main.js"
import content from "./content/main.js"

export default function box(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            padding:10px 20px;
            border-radius:5px;
            border:1px solid var(--colorBlue);
        }`

    const box = cE("div", style)
    box.appendChild(title())
    box.appendChild(content())
    return(box)
}