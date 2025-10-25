export default function button(p){
    let style = `
        {
            font-size:18px;
            height:28px;
            background:var(--colorBlue);
            color:var(--colorWhite);
            cursor:pointer;
            padding:2px 5px;
            border-radius:5px;
            transition:background 0.5s;
        }
        :hover{
            background:var(--colorBlack);
        }
        :responsive{
            font-size:14px;
        }`

    const button = cE("button", style)
    button.innerHTML = "Pagar"
    button.addEventListener(
        "click",
        async () => {
            button.innerHTML = "<img style='height:100%;' src='https://portal.ufvjm.edu.br/a-universidade/cursos/grade_curricular_ckan_novo/loading.gif/@@images/image.gif'/>"
            let w = document.createElement("div")
            w.id = "walletBrick_container"
            w.style.opacity = 0
            w.style.height = 0
            w.style.width = 0
            document.body.appendChild(w)

            await axios.post(`${apiURL}/client/newPayment`, {paymentID:p.id})
                .then(async resposta => {
                    const publicKey = "APP_USR-9b945fd8-fd9b-45d3-8fe9-a0221ffcba71";
                    const preferenceId = resposta.data.preferenceID;
                    const mp = new MercadoPago(publicKey);
                    const bricksBuilder = mp.bricks();
                    const renderWalletBrick = async (bricksBuilder) => {
                        await bricksBuilder.create("wallet", "walletBrick_container", {
                            initialization:{
                                preferenceId:preferenceId,
                            }
                        })
                    }
                    await renderWalletBrick(bricksBuilder)
                    await new Promise(r => setTimeout(r, 500))

                    // use children[5] for testing
                    document.body.children[4].children[0].children[0].children[0].children[0].children[0].children[0].click()
                })
                .catch(response => {
                    console.log(response)
                    let status = response.response.status
                    if(status == 502){showWindow("Ops! Nossos servidores estão sendo atualizados. Tente novamente mais tarde")}
                })
        }
    )
    return(button)
}