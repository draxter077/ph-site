import link from "./link/main.js"

export default function links(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            justify-content:space-between;
        }`

    const links = cE("div", style)
    let lks = [{src:"./assets/logo.jpg", rgb:"200,200,200", href:"https://ph.net.br"}]
    for(let i = 0; i < lks.length; i++){links.appendChild(link(lks[i]))}
    return(links)
}