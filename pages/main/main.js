import background from "./background/main.js"
import home from "./home/main.js"
import about from "./about/main.js"
import services from "./services/main.js"
import works from "./works/main.js"
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
    main.appendChild(background())
    main.appendChild(home())
    main.appendChild(about())
    main.appendChild(services())
    main.appendChild(works())
    main.appendChild(contact())
    return(main)
}