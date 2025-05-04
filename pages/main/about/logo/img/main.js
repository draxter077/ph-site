export default function img(){
    let style = `
        {
            position:absolute;
            top:0%;
            left:0%;
            width:100%;
            transform:scale(0.8);
            z-index:-1;
            box-shadow:0px 0px 5px 0px var(--colorBlue);
            transition:all calc(0.5*var(--transitionTime));
        }`

    const img = cE("img", style)
    img.src = "./assets/logo.jpg"
    return(img)
}