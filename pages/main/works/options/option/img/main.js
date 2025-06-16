export default function img(t, src){
    let style = `
        {
            ${t}:100%;
        }`

    const img = cE("img", style)
    img.src = src
    return(img)
}