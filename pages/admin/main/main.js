import head from "./head/main.js"
import add from "./add/main.js"
import finance from "./finance/main.js"
import payments from "./payments/main.js"
import clients from "./clients/main.js"
import contact from "../../common/contact/main.js"
import foot from "../../common/foot/main.js"

export default function main(data){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
        }`

    const main = cE("div", style)
    main.appendChild(head())
    main.appendChild(add())
    main.appendChild(finance(data.payments))
    main.appendChild(payments(data.payments))
    main.appendChild(clients(data.clients))
    main.appendChild(contact())
    main.appendChild(foot())
    return(main)
}