import logo from "./logo/main.js"

export default function main(){
    let style = `
        {
            position:relative;
            width:100%;
            height:100dvh;
        }`

    const main = cE("div", style)
    main.appendChild(logo())
    return(main)
}