import box from "./box/main.js"

export default function add(){
    let style = `
        {
            width:80%;
            height:fit-content;
            margin:2.5vh 0px 0px 0px;
            max-height:0px;
            overflow:hidden;
            transition:max-height 0.5s;
        }
        :responsive{
            width:95%;
        }`

    const add = cE("div", style)
    add.appendChild(box())
    return(add)
}