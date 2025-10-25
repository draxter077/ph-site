import head from "./head/main.js"
import config from "./config/main.js"
import status from "./status/main.js"
import payments from "./payments/main.js"
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
    main.appendChild(config(data.user))
    main.appendChild(status(data.user, data.payments))
    main.appendChild(payments(data.payments))
    main.appendChild(contact())
    main.appendChild(foot())
    return(main)
}