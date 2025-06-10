import title from "./title/main.js"
import options from "./options/main.js"

export default function contact(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-evenly;
            height:100vh;
            width:100%;
            box-shadow:0px 0px 5px 5px var(--colorWhite);
            background:var(--colorWhite);
        }
        :responsive{
            box-shadow:0px 0px 3px 3px var(--colorWhite);
        }`

    const contact = cE("div", style)
    contact.appendChild(title())
    contact.appendChild(options())
    return(contact)
}