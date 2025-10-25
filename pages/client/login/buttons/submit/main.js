import window from "./window/main.js"

export default function submit(){
    let style = `
        {
            font-size:20px;
            padding:5px 10px;
            height:40px;
            background:var(--colorBlue);
            color:var(--colorWhite);
            border-radius:5px;
            cursor:pointer;
            transition:all 0.5s;
        }
        :hover{
            box-shadow:0px 0px 0px 5px var(--colorBlue);
        }`

    const submit = cE("button", style)
    submit.innerHTML = "Entrar"
    submit.addEventListener(
        "click",
        async function a(e){
            e.target.disabled = true

            let email = e.target.parentElement.parentElement.children[1].children[0]
            let password = e.target.parentElement.parentElement.children[1].children[1]

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

            async function inputError(ipt){
                ipt.style.borderBottom = "1px solid red"
                await new Promise(resolve => setTimeout(resolve, 550))
                ipt.style.borderBottom = "1px solid var(--colorBlue)"
            }
            
            e.target.innerHTML = "<img style='height:100%;' src='https://portal.ufvjm.edu.br/a-universidade/cursos/grade_curricular_ckan_novo/loading.gif/@@images/image.gif'/>"
            if(email.value.length == 0 || password.value.length == 0 || email.value == undefined || password.value == undefined){
                showWindow("Preencha todos os campos")
                inputError(email)
                inputError(password)
            }
            else{
                if(password.value == "esqueciminhasenha"){
                    await axios.post(apiURL + "/client/forgotPassword", {email:email.value})
                        .then(r => {showWindow("Uma senha temporária foi enviada para o seu email")})
                        .catch(r => {
                            if(r.response.status == 404){
                                showWindow("Email não encontrado")
                                inputError(email)
                            }
                            else{
                                showWindow("Nossos servidores estão em atualização. Aguarde alguns minutos para tentar novamente")
                            }
                        })
                    }
                else{
                    await axios.post(apiURL + "/client/login", {email:email.value.toLowerCase(), password:password.value})
                        .then(r => {construct({page:"client", data:r.data})})
                        .catch(r => {
                            if(r.response.status == 404){
                                showWindow("Email não encontrado")
                                inputError(email)
                            }
                            else if(r.response.status == 403){
                                showWindow("Senha incorreta. Digite 'esqueciminhasenha' no campo senha para receber uma temporária")
                                inputError(password)
                            }
                            else{
                                showWindow("Nossos servidores estão em atualização. Aguarde alguns minutos para tentar novamente")
                            }
                        })
                    }
            }

            e.target.innerHTML = "Entrar"
            e.target.disabled = false
        }
    )
    return(submit)
}