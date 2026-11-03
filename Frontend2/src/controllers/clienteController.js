import * as clienteService from '../services/clienteService.js'

export async function listar(req, res) {
    const clientes = await clienteService.listarClientes()
    return res.status(200).json(clientes)
}

export async function cadastrar(req, res) {

    const cliente = await clienteService.cadastrarCliente(req.body)

    return res.status(201).json(cliente)
}

export async function listarID(req, res) {

    const clientes = await clienteService.buscarClientesPorId(req.params.id)

    if (!clientes) {
        return res.status(404).json({ message: 'Esse Cliente não foi encontrado' })
    }
    return res.status(201).json(clientes)
}

export async function remover(req, res) {
    const cliente = await clienteService.removerCliente(req.params.id)
    if (!cliente) {
        return res.status(404).json({ message: 'Esse Cliente não foi encontrado' })
    }
    return res.status(200).json(cliente)
}

export async function atualizar(req, res) {
    const cliente = await clienteService.atualizarCliente(req.params.id, req.body)
    if (cliente) {
        return res.status(404).json({ message: 'Esse Cliente não foi encontrado' })
    }
    return res.status(200).json(cliente)
}

export async function concluir(req, res) {
    const cliente = await clienteService.concluirCliente(req.params.id)
    if (!cliente) {
        return res.status(404).json({ message: 'Esse Cliente não foi encontrado' })
    }
    return res.status(200).json(cliente)
}

export async function resumo(req, res) {
    const resumo = await tarefaService.resumirTarefas()
    return res.status(200).json(resumo)
}
