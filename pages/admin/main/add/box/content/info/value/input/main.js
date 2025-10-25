export default function input(){
    let style = `
        {
            font-size:20px;
            width:100%;
            padding:0px 5px;
            border-bottom:1px solid var(--colorBlue);
        }
        :responsive{
            font-size:15px;
        }`

    const input = cE("input", style)
    return(input)
}