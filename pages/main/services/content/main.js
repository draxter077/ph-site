import service from "./service/main.js"

export default function content(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            width:90%;
            height:80%;
        }`
    
    const content = cE("div", style)
    content.appendChild(service(0, "./assets/domain.png","Primeiro, procuramos o domínio perfeito, que é como o mundo vai te conhecer na web"))
    content.appendChild(service(1, "./assets/search.png","Então, planejamos a sua identidade visual online de modo a expor corretamente os princípios da sua ideia"))
    content.appendChild(service(2, "./assets/code.png","Finalmente, desenvolvemos o site, seguindo as últimas novidades em design, UserXperience e otimização de performance"))
    content.appendChild(service(3, "./assets/web.png","Agora está tudo pronto! Sua ideia já pode dar o primeiro passo no mundo digital!"))
    return(content)
}