import loading from "./loading/main.js"
import confirmed from "./confirmed/main.js"
import error from "./error/main.js"

export default function scroller(pid){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            width:300%;
            transition:opacity 0.5s;
        }`

    const scroller = cE("div", style)
    scroller.appendChild(loading(pid))
    scroller.appendChild(confirmed(pid))
    scroller.appendChild(error(pid))

    window.addEventListener(
        "load",
        async () => {
            await axios.post(`${apiURL}/client/updates`, {src:"ph", action:"confirmedPayment", paymentID:pid})
                .then(async r => {
                    scroller.style.opacity = 0
                    await new Promise(r => setTimeout(r, 600))
                    scroller.style.transform = "translateX(-33%)"
                    scroller.style.opacity = 1
                })
                .catch(async r => {
                    scroller.style.opacity = 0
                    await new Promise(r => setTimeout(r, 600))
                    scroller.style.transform = "translateX(-66%)"
                    scroller.style.opacity = 1
                }) 
        }
    )
    return(scroller)
}