import title from "./title/main.js"
import links from "./links/main.js"

export default function works(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:90%;
            height:150px;
            background:red;
        }`
    
    const works = cE("div", style)
    works.appendChild(title())
    works.appendChild(links())
    return(works)
}