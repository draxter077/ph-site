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
            height:75vh;
            box-shadow:0px 0px 5px 5px var(--colorBlue);
            background:var(--colorBlue);
        }
        :responsive{
            height:100vh;
            box-shadow:0px 0px 3px 3px var(--colorBlue);
        }`

    const services = cE("div", style)
    services.appendChild(title())
    services.appendChild(content())
    return(services)
}