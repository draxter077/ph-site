import home from "./home/main.js"
import contact from "./contact/main.js"

export default function main(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            width:100%;
	        overflow:hidden;
        }`

    const main = cE("div", style)
    main.appendChild(home())
    main.appendChild(contact())
    return(main)
}