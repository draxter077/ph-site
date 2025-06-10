export default function img(src){
    let style = `
        {
            height:50px;
            margin:0px 10px 0px 0px;
            filter:invert(1);
        }`

    const img = cE("img", style)
    img.src = src
    return(img)
}