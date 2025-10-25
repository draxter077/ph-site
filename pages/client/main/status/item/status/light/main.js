export default function light(c){
    let style = `
        {
            height:20px;
            width:20px;
            border-radius:50%;
            border:1px solid ${c};
            margin:0px 10px 0px 0px;
            background:var(--colorWhite);
            animation:uywre 1s linear 0s forwards infinite alternate;
        }
        :responsive{
            height:10px;
            width:10px;
        }
        @keyframes uywre{
            0%[background:var(--colorWhite);box-shadow:0px 0px 3px 0px var(--colorWhite);]
            100%[background:${c};box-shadow:0px 0px 3px 0px ${c}]
        }`

    const light = cE("div", style)
    return(light)
}