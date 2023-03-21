var cep = document.getElementById('cep');

cep.addEventListener("keyup", () => {
    if (cep.value.length == 5) {
        cep.value += "-";
    }
})