const nome_cliente = document.getElementById("cliente")
const cpf_cliente = document.getElementById("cpf")
const telefone_cliente = document.getElementById("telefone")
const dados = document.getElementById("lista-cliente")
const cadastroo = document.getElementById("cadastro")
const clientes = JSON.parse(localStorage.getItem("clientes")) || []

const nome_produto = document.getElementById("produto")
const preco_produto = document.getElementById("preco")
const quantidade_produto = document.getElementById("quantidade")
const tamanho_produto = document.getElementById("tamanho")
const produtos = JSON.parse(localStorage.getItem("produtos")) || []

const cpf_busca = document.getElementById("cpff")
const lista_cliente = document.getElementById("listagem-cliente")

const produto_listar = document.getElementById("produtoo")
const lista_produto = document.getElementById("listagem_produto")

const produtos_v = document.getElementById("produtos_v")
const clientes_v = document.getElementById("clientes_v")
const quantidades_v = document.getElementById("quantidades_v")
const vendas = JSON.parse(localStorage.getItem("vendas")) || []

const listarcadastroproduto = document.getElementById("cadastro2")
const lista_venda = document.getElementById("lista-venda")

function cadastro() {
    if (nome_cliente.value.trim() && cpf_cliente.value.trim() && telefone_cliente.value.trim()) {
        if (/^[A-Za-zÀ-ý\s]+$/.test(nome_cliente.value)) {
            if (/^\d{11}$/.test(telefone_cliente.value)) {
                if (/^\d{11}$/.test(cpf_cliente.value)) {
                    let achou = false
                    for (let c of clientes) {
                        if (c.cpf == cpf_cliente.value)
                            achou = true
                    }
                    if (!achou) {
                        const cliente = {
                            nome: nome_cliente.value,
                            cpf: cpf_cliente.value,
                            telefone: telefone_cliente.value
                        }
                        clientes.push(cliente)
                        localStorage.setItem("clientes", JSON.stringify(clientes))
                        alert(cliente.nome + " foi cadastrado(a)")
                        nome_cliente.value = ""
                        cpf_cliente.value = ""
                        telefone_cliente.value = ""
                        listar_clientess()
                    } else {
                        alert("cliente já cadastrado ")
                    }
                } else {
                    alert("O CPF deve possuir somente números e 11 digitos!!")
                }
            } else {
                alert("O Telefone deve possuir somente números e 11 digitos!")
            }
        } else {
            alert("O Nome deve possuir somente LETRAS!")
        }
    } else {
        alert("Todos os campos devem estar preenchidos!")
    }
}
function listar_clientess() {
    dados.innerHTML = "Clientes Cadastrados"
    for (let cliente of clientes) {
        dados.innerHTML += `<p>Nome: ${cliente.nome_cliente} | CPF: ${cliente.cpf_cliente} | Telefone:: ${cliente.telefone_cliente}</p>`
    }
}
function listar_clientesatu() {
    lista_cliente.innerHTML = "Clientes Atualizados:"
    for (let cliente of clientes) {
        lista_cliente.innerHTML += `<p>Nome: ${cliente.nome} | CPF: ${cliente.cpf} | Telefone: ${cliente.telefone}</p>`
    }
}
function listar_cliente() {
    for (let cliente of clientes) {
        if (cliente.cpf == cpf_busca.value) {
            lista_cliente.innerHTML = "CLIENTE ENCONTRADO:";
            lista_cliente.innerHTML += `<p>Nome: ${cliente.nome} | CPF: ${cliente.cpf} | Telefone: ${cliente.telefone}</p>`;
            return
        }
    }
    alert("Cliente não encontrado")
}
function desativar_cliente() {
    let i = -1,
        achou = false
    if (nome_cliente.value.trim()) {
        for (let buscar of clientes) {
            i++
            if (buscar.cpf == cpf_busca.value) {
                console.log("entrou")
                achou = true
                break;
            }
        }
        if (achou) {
            clientes.splice(i, 1)
            localStorage.setItem("clientes", JSON.stringify(clientes))
            alert("Cliente desativado com sucesso!")
            listar_clientess()
            return
        }
    } else {
        alert("Preencha todos os campos!")
        return
    }
    alert("Cliente não encontrado!")
}
function atualizar_cliente() {
    let achou = false
    for (let buscar of clientes) {

        if (buscar.cpf == cpf_busca.value) {
            buscar.nome = nome_cliente.value ?? buscar.nome,
            buscar.telefone = telefone_cliente.value ?? buscar.telefone
            localStorage.setItem("clientes", JSON.stringify(clientes))
            alert("Cliente atualizado com sucesso!")
            listar_clientesatu()
            achou = true
            break
        }
    }
    if (!achou) {
        alert("Cliente não encontrado!")
    }
}
function cadastro2() {
    if (nome_produto.value.trim() && preco_produto.value.trim() && quantidade_produto.value.trim() && tamanho_produto.value.trim()) {
        if (/^\d+$/.test(preco_produto.value)) {
            if (/^\d+$/.test(quantidade_produto.value)) {
                if (/^\d+$/.test(tamanho_produto.value)) {
                    let achou = false
                    for (let c of produtos) {
                        if (c.nome_produto === nome_produto.value) {
                            achou = true
                        }
                    }
                    if (!achou) {
                        const produto = {
                            produto: nome_produto.value,
                            preco: preco_produto.value,
                            quantidade: quantidade_produto.value,
                            tamanho: tamanho_produto.value
                        }
                        produtos.push(produto)
                        localStorage.setItem("produtos", JSON.stringify(produtos))
                        alert(produto.produto + " está cadastrado(a)!")
                        nome_produto.value = ""
                        preco_produto.value = ""
                        quantidade_produto.value = ""
                        tamanho_produto.value = ""
                        listar_produtoo()
                    } else {
                        alert(" produto ja cadastrado ")
                    }
                } else {
                    alert("O Tamanho deve possuir somente números!")
                }
            } else {
                alert("A Quantidade deve possuir somente números!")
            }
        } else {
            alert("O Preço deve possuir somente números!")
        }
    } else {
        alert("Todos os campos devem estar preenchidos!")
    }
}
function listar_produtoo() {
    listarcadastroproduto.innerHTML = "Produtos Cadastrados"
    for (let produtoo of produtos) {
        listarcadastroproduto.innerHTML += `<p>produto: ${produtoo.produto} | preco: ${produtoo.preco} | quantidade: ${produtoo.quantidade} | tamanho: ${produtoo.tamanho}</p>`
    }
}
function listar_produto() {
    for (let produto of produtos) {
        if (produto.produto == produto_listar.value) {
            lista_produto.innerHTML = "PRODUTO ENCONTRADO:";
            lista_produto.innerHTML += `<p>Produto: ${produto.produto} | Preço: ${produto.preco} | Quantidade: ${produto.quantidade} | Tamanho: ${produto.tamanho}</p>`;
            return
        }
    }
}
function vender() {
    let i = -1
    let achou = false
    for (let pro of produtos) {
        i++
        if (pro.produto == produtos_v.value) {
            achou = true
            break
        }
    }
    if (produtos_v.value.trim() && clientes_v.value.trim() && quantidades_v.value.trim()) {
        if (achou) {
            for (let c of clientes) {
                if (clientes_v.value == c.cpf) {
                    const venda = {
                        cpf: clientes_v.value,
                        nomepro: produtos_v.value,
                        quantidade: quantidades_v.value
                    }
                    vendas.push(venda)
                    produtos[i].quantidade -= quantidades_v.value;
                    localStorage.setItem("vendas", JSON.stringify(vendas))
                    alert("A venda do produto: " + venda.nomepro + " foi cadastrada")
                    localStorage.setItem("produtos", JSON.stringify(produtos))
                    produtos_v.value = ""
                    clientes_v.value = ""
                    quantidades_v.value = ""
                    listar_venda()
                    return
                }
            }
        }
    } else {
        alert("Todos os campos devem estar preenchidos!")
        return
    }
    alert("Não encontramos o Produto ou Cliente!")
    listar_venda()
}
function listar_venda() {
    lista_venda.innerHTML = "CADASTRADOS:"
    for (let venda of vendas) {
        lista_venda.innerHTML += `<p>CPF Cliente: ${venda.cpf} | Nome Produto: ${venda.nomepro} | Quantidade Produto: ${venda.quantidade}</p>`
    }
}