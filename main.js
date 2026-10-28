alert("Captive portal da padaria")
const PASSWORD = ("pao123")
let attempts = 0
while (attempts <3) {
    let enter_password = prompt("digite a senha: ")
    
    if (enter_password === PASSWORD) {
        alert("Conectado, bom café")
        break
    } else {
        alert("senai incorreta ;@")
    }

    if (attempts ===2) {
        alert("senha bloqueada")
    }
    attempts++
}

