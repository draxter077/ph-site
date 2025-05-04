import img from "./img/main.js"

export default function logo(){
    let style = `
        {
            position:relative;
            width:40%;
            aspect-ratio:1;
        }`

    const logo = cE("div", style)
    logo.appendChild(img())

    logo.addEventListener(
        "mousemove",
        function a(e){
            let rY = e.offsetY/e.target.offsetHeight, vY
            if(rY > 0.5){
                vY = (((rY) - 0.5)/0.5)*10
            }
            else{
                vY = (((rY))/0.5)*10 - 10
            }
            logo.children[0].style.top = vY + "%"

            let rX = e.offsetX/e.target.offsetWidth, vX
            if(rX > 0.5){
                vX = (((rX) - 0.5)/0.5)*10
            }
            else{
                vX = (((rX))/0.5)*10 - 10
            }
            logo.children[0].style.left = vX + "%"
        }
    )
    logo.addEventListener(
        "mouseout",
        function a(){
            logo.children[0].style.left = "0%"
            logo.children[0].style.top = "0%"
        }
    )

    return(logo)
}