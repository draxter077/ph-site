import window from "./window/main.js"

export default function newPayment(){
    let style = `
        {
            font-size:18px;
            height:32px;
            font-weight:900;
            text-wrap:nowrap;
            padding:5px 10px;
            background:var(--colorBlue);
            color:var(--colorWhite);
            border-radius:5px;
            cursor:pointer;
            transition:background 0.5s;
        }
        :hover{
            background:var(--colorBlack);
        }
        :responsive{
            font-size:12px;
        }`

    const newPayment = cE("div", style)
    newPayment.innerHTML = "Cobrar mês"

    newPayment.addEventListener(
        "click",
        async function a(e){
            e.target.disabled = true
            e.target.innerHTML = "<img style='height:100%;' src='https://portal.ufvjm.edu.br/a-universidade/cursos/grade_curricular_ckan_novo/loading.gif/@@images/image.gif'/>"

            async function showWindow(t){
                let w = window(t)
                document.getElementById("root").appendChild(w)
                await new Promise(resolve => setTimeout(resolve, 10))
                w.style.opacity = 1
                await new Promise(resolve => setTimeout(resolve, 5000))
                w.style.opacity = 0
                await new Promise(resolve => setTimeout(resolve, 550))
                document.getElementById("root").removeChild(w)
            }

            await axios.post(apiURL + "/admin/addPayments", {})
                .then(r => {showWindow("Cobranças feitas")})
                .catch(r => {showWindow("Algum erro");console.log(r.response)})

            e.target.disabled = false
            e.target.innerHTML = "Cobrar mês"
        }
    )
    return(newPayment)
}