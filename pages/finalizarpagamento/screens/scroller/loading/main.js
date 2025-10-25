import img from "../img/main.js"
import text from "../text/main.js"

export default function loading(pid){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:33%;
            padding:0px 10px;
        }`

    const loading = cE("div", style)
    loading.appendChild(img("https://portal.ufvjm.edu.br/a-universidade/cursos/grade_curricular_ckan_novo/loading.gif/@@images/image.gif"))
    loading.appendChild(text(`Pagamento #${pid}`))
    loading.appendChild(text(`Não feche esta janela`))
    loading.appendChild(text(`Seu pagamento está sendo confirmado`))
    return(loading)
}