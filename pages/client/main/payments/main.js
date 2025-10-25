import title from "./title/main.js"
import search from "./search/main.js"
import content from "./content/main.js"

export default function payments(ps){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:90%;
        }
        :responsive{
            width:95%;
        }` 

    const payments = cE("div", style)
    payments.appendChild(title())
    payments.appendChild(search())
    payments.appendChild(content(ps))
    return(payments)
}