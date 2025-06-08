import title from "./title/main.js"
import options from "./options/main.js"

export default function contact(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-around;
            height:100dvh;
            width:100%;
            background:var(--colorBlue);
        }`

    const contact = cE("div", style)
    contact.appendChild(title())
    contact.appendChild(options())
    return(contact)
}