export default function back(disclaimer){
    let style = `
        {
            position:absolute;
            top:0%;
            left:0%;
            display:flex;
            justify-content:center;
            align-items:center;
            background:var(--colorBlue);
            color:var(--colorWhite);
            width:100%;
            height:100%;
            padding:10px;
            transform:rotate3d(0, 1, 0, -180deg);
            opacity:0;
            text-align:center;
            transition:rotate3d 0.5s, opacity 0.25s;
        }`
        
    const back = cE("div", style)
    back.innerHTML = disclaimer
    return(back)
}