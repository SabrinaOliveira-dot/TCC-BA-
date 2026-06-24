const busca = document.getElementById('busca');
const itens = document.querySelectorAll('#lista li');

busca.addEventListener('input', () => {
    const texto = busca.value.toLowerCase();

    itens.forEach(item => {
        item.style.display =
            item.textContent.toLowerCase().includes(texto)
            ? 'block'
            : 'none';
    });
});

itens.forEach(item => {
    item.addEventListener('click', () => {
        window.location.href = item.dataset.url;
    });
});                                                                                                                                                               