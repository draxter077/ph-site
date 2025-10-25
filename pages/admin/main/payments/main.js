import title from "./title/main.js"
import head from "./head/main.js"
import content from "./content/main.js"

export default function payments(ps){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:90%;
            margin:7.5vh 0px;
        }
        :responsive{
            width:95%;
        }` 

    const payments = cE("div", style)
    payments.appendChild(title())
    payments.appendChild(head())
    payments.appendChild(content(ps))
    return(payments)
}