import login from "./login/main.js"
import main from "./main/main.js"

export default function client(data){
    let style = `
        {
            width:100%;
        }`

    const client = cE("div", style)
    if(data == undefined){
        client.appendChild(login())
    }
    else{
        axios.defaults.headers.common["userAuth"] = data.user.id
        client.appendChild(main(data))
    }
    return(client)
}