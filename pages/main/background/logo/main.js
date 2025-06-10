export default function logo(){
    let style = `
        {
            width:15%;
            box-shadow:0px 0px 5px 0px var(--colorBlue);
            border-radius:5px;
            z-index:-1;
            transition:transform 0.1s;
        }
        :responsive{
            width:40%;
        }`

    const logo = cE("img", style)
    logo.src = "./assets/logo.jpg"

    window.addEventListener(
        "mousemove",
        function a(e){
            let y = e.offsetY
            let x = e.offsetX
            let width = window.innerWidth
            let height = window.innerHeight
            let logoTop = logo.offsetTop
            let logoLeft = logo.offsetLeft
            let logoHeight = logo.offsetHeight
            let logoWidth = logo.offsetWidth

            let relativeX = (x - (logoLeft + logoWidth/2))/(width - (logoLeft + logoWidth/2))/4
            let relativeY = (y - (logoTop + logoHeight/2))/(height - (logoTop + logoHeight/2))/4

            if(window.scrollY < height/10){
                logo.style.transform = `translate(${relativeX*100}%, ${relativeY*100}%)`
                logo.style.transform += `rotate(${-2*Math.atan(relativeY*(logoTop + logoHeight/2)/relativeX*(logoLeft + logoWidth/2))}deg)`
            }
            else{
                logo.style.transform = `translate(0%, 0%)`
                logo.style.transform += `rotate(0deg)`
            }
        }
    )
    return(logo)
}