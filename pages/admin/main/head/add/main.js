export default function add(){
    let style = `
        {
            height:30px;
            filter:invert(1);
            transition:transform 0.5s;
            cursor:pointer;
        }
        :hover{
            transform:rotate(90deg);
        }
        :responsive{
            height:20px;
        }`

    const add = cE("img", style)
    add.src = "./assets/elements/add.png"

    add.addEventListener(
        "click",
        function a(e){
            let addDiv = e.target.parentElement.parentElement.children[1]
            if(addDiv.style.maxHeight == "1000px"){addDiv.style.maxHeight = "0px"}
            else{addDiv.style.maxHeight = "1000px"}
        }
    )
    return(add)
}