const produtos = [
    {
        nome: "Brigadeiro tradicional",
        categoria: "Beijinhos e Brigadeiro",
        url: "brigadeiros.html#brigadeiro-tradicional"
    },
    {
        nome: "Beijinho tradicional",
        categoria: "Beijinhos e Brigadeiro",
        url: "brigadeiros.html#beijinho-tradicional"
    },
    {
        nome: "Surpresa de uva",
        categoria: "Beijinhos e Brigadeiro",
        url: "brigadeiros.html#surpresa-de-uva"
    },
    {
        nome: "Brigadeiro colorido",
        categoria: "Beijinhos e Brigadeiro",
        url: "brigadeiros.html#brigadeiro-colorido"
    },
    {
        nome: "Beijinho rosa",
        categoria: "Beijinhos e Brigadeiro",
        url: "brigadeiros.html#beijinho-rosa"
    },
    {
        nome: "Mini churros",
        categoria: "Beijinhos e Brigadeiro",
        url: "brigadeiros.html#mini-churros"
    },

    {
        nome: "Bolo de chocolate",
        categoria: "Bolos caseiros",
        url: "boloscaseiros.html#bolo-de-chocolate"
    },
    {
        nome: "Bolo de milho",
        categoria: "Bolos caseiros",
        url: "boloscaseiros.html#bolo-de-milho"
    },
    {
        nome: "Bolo formigueiro",
        categoria: "Bolos caseiros",
        url: "boloscaseiros.html#bolo-formigueiro"
    },
    {
        nome: "Bolo de mandioca",
        categoria: "Bolos caseiros",
        url: "boloscaseiros.html#bolo-de-mandioca"
    },
    {
        nome: "Bolo de fubá",
        categoria: "Bolos caseiros",
        url: "boloscaseiros.html#bolo-de-fuba"
    },
    {
        nome: "Bolo de laranja",
        categoria: "Bolos caseiros",
        url: "boloscaseiros.html#bolo-de-laranja"
    },
    {
        nome: "Bolo de cenoura",
        categoria: "Bolos caseiros",
        url: "boloscaseiros.html#bolo-de-cenoura"
    },
    {
        nome: "Bolo de coco",
        categoria: "Bolos caseiros",
        url: "boloscaseiros.html#bolo-de-coco"
    },
    {
        nome: "Rocambole",
        categoria: "Bolos caseiros",
        url: "boloscaseiros.html#rocambole"
    },

    {
        nome: "Bolo de laranja com cobertura de ninho",
        categoria: "Bolos com cobertura",
        url: "boloscobertura.html#bolo-de-laranja-com-cobertura-de-ninho"
    },
    {
        nome: "Bolo de cenoura com cobertura de chocolate",
        categoria: "Bolos com cobertura",
        url: "boloscobertura.html#bolo-de-cenoura-com-cobertura-de-chocolate"
    },
    {
        nome: "Bolo de maracuja com cobertura de maracujá",
        categoria: "Bolos com cobertura",
        url: "boloscobertura.html#bolo-de-maracuja-com-cobertura-de-maracuja"
    },
    {
        nome: "Bolo de chocolate com cobertura de chocolate",
        categoria: "Bolos com cobertura",
        url: "boloscobertura.html#bolo-de-chocolate-com-cobertura-de-chocolate"
    },
    {
        nome: "Bolo de coco ao leite com cobertura de paçoca",
        categoria: "Bolos com cobertura",
        url: "boloscobertura.html#bolo-de-coco-ao-leite-com-cobertura-de-pacoca"
    },
    {
        nome: "Bolo de coco com cobertura de leite ninho",
        categoria: "Bolos com cobertura",
        url: "boloscobertura.html#bolo-de-coco-com-cobertura-de-leite-ninho"
    },

    {
        nome: "Geladinhos de Paçoca",
        categoria: "Salgados",
        url: "salgados.html#geladinhos-de-pacoca"
    },
    {
        nome: "Bolinhas de queijo",
        categoria: "Salgados",
        url: "salgados.html#bolinhas-de-queijo"
    },
    {
        nome: "Quibe",
        categoria: "Salgados",
        url: "salgados.html#quibe"
    },

    {
        nome: "Geladinhos de Paçoca",
        categoria: "Geladinhos",
        url: "geladinhos.html#geladinhos-de-pacoca"
    },
    {
        nome: "Geladinhos de leite moça",
        categoria: "Geladinhos",
        url: "geladinhos.html#geladinhos-de-leite-moca"
    },
    {
        nome: "Geladinhos de morango",
        categoria: "Geladinhos",
        url: "geladinhos.html#geladinhos-de-morango"
    },
    {
        nome: "Geladinhos de maracujá",
        categoria: "Geladinhos",
        url: "geladinhos.html#geladinhos-de-maracuja"
    },
    {
        nome: "Geladinhos de leite ninho",
        categoria: "Geladinhos",
        url: "geladinhos.html#geladinhos-de-leite-ninho"
    },
    {
        nome: "Geladinhos de doce de leite",
        categoria: "Geladinhos",
        url: "geladinhos.html#geladinhos-de-doce-de-leite"
    },

    {
        nome: "Bem Casados",
        categoria: "Doces finos",
        url: "docesfinos.html#bem-casados"
    },
    {
        nome: "Macarons",
        categoria: "Doces finos",
        url: "docesfinos.html#macarons"
    },
    {
        nome: "Surpresa de uva",
        categoria: "Doces finos",
        url: "docesfinos.html#surpresa-de-uva"
    },
    {
        nome: "Trufa de chocolate",
        categoria: "Doces finos",
        url: "docesfinos.html#trufa-de-chocolate"
    },
    {
        nome: "Camafue",
        categoria: "Doces finos",
        url: "docesfinos.html#camafue"
    },
    {
        nome: "Copinhos de Chocolate",
        categoria: "Doces finos",
        url: "docesfinos.html#copinhos-de-chocolate"
    }
];

const input = document.getElementById("busca");
const sugestoes = document.getElementById("sugestoes");
const form = document.getElementById("form-busca");

function mostrarSugestoes(texto) {
    sugestoes.innerHTML = "";

    if(!texto) {
        sugestoes.classList.remove("sugestoes-on");
        sugestoes.classList.add("sugestoes-off");
        return;
    }

    const resultados = produtos.filter(produto =>
        produto.nome.toLowerCase().startsWith(texto.toLowerCase())
    );

    resultados.forEach(produto => {
        const item = document.createElement("li");

        item.textContent = `${produto.nome}`;

        item.addEventListener("click", () => {
            window.location.href = produto.url;
        });

        sugestoes.appendChild(item);
    });

    if (resultados.length > 0) {
        sugestoes.classList.remove("sugestoes-off");
        sugestoes.classList.add("sugestoes-on");
    } else {
        sugestoes.classList.remove("sugestoes-on");
        sugestoes.classList.add("sugestoes-off");
    }
}

input.addEventListener("input", () => {
    mostrarSugestoes(input.value.trim());
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const texto = input.value.trim().toLowerCase();

    const produtoEncontrado = produtos.find(produto =>
        produto.nome.toLowerCase() === texto
    );

    if (produtoEncontrado) {
        window.location.href = produtoEncontrado.url;
    }
});