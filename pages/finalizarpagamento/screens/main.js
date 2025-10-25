import scroller from "./scroller/main.js"

export default function screens(pid){
    let style = `
        {
            width:100%;
        }`

    const screens = cE("div", style)
    screens.appendChild(scroller(pid))
    return(screens)
}