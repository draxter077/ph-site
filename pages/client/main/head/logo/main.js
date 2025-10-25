export default function logo(){
    let style = `
        {
            height:70px;
            border:1px solid var(--colorWhite);
        }
        :responsive{
            height:50px;
        }`

    const logo = cE("img", style)
    logo.src = "./assets/brand/logo.jpg"
    return(logo)
}