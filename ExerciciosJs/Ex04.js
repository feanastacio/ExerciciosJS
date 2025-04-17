// Crie uma função que gera uma senha de 10 caracteres com letras, números e símbolos
// usando Math.random(), charCodeAt() e String.fromCharCode().
// let qntd = 10;
function combinacao() {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&";
    let senhaaleatoria = "";
        for (let i = 0; i < 10; i++) {
            const indice = Math.floor(Math.random() * caracteres.length);
            senhaaleatoria += caracteres.charAt(indice);        
        }
    return senhaaleatoria;
}
    console.log(combinacao());

    // Não ta funcionando \\Error: Cannot find module 'C:\Users\50776884867\Desktop\ExerciciosJs\Ex04.js'