const listaDeProdutos = () => {
    return fetch("https://668d81d4099db4c579f330e0.mockapi.io/Product")
    .then((resposta) => resposta.json())
    .catch((erro) => console.log(erro));
};

const criaProduto = (nome, valor, imagem) => {
    return fetch("https://668d81d4099db4c579f330e0.mockapi.io/Product", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nome,
            valor,
            imagem,
        })
    })
    .then((resposta) => resposta.json())
    .catch((erro) => console.log(erro));
}

const deletaProduto = (id) => {
    return fetch(`https://668d81d4099db4c579f330e0.mockapi.io/Product${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((resposta) => resposta.json())
    .catch((erro) => console.log(erro));
}

export const servicosProdutos = {
    listaDeProdutos,
    criaProduto,
    deletaProduto,
};