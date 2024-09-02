import init from "./init/main.js"
import home from "./home/main.js"

export default async function construct(){
    const root = document.getElementById("root")
    root.innerHTML = ""
    root.appendChild(init())
}