export default function works(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:90%;
            height:150px;
            background:red;
        }`
    
    const works = cE("div", style)
    return(works)
}