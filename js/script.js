document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('triangulo-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const base = parseFloat(document.getElementById('base').value);
        const altura = parseFloat(document.getElementById('altura').value);
        const area = (base * altura) / 2;

        document.getElementById('resultado').innerText = `Área do Triângulo: ${area.toFixed(2)} unidades quadradas`;
    });
});
