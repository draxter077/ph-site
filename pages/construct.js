import init from "./init/main.js"

export default async function construct(){
    const root = document.getElementById("root")
    root.innerHTML = ""
    root.appendChild(init())
}