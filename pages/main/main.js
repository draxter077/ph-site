import about from "./about/main.js"

export default function main(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            height:100dvh;
	        overflow:hidden;
        }`

    const main = cE("div", style)
    main.appendChild(about())
    return(main)
}