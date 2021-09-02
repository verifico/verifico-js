import { ClienteBase } from '@verifico/base-api'
import { Evento, resultadoDeEvento } from '@verifico/base-api'
import { resultadoDeVerificacionDeEvento } from '@verifico/base-api'

export class Cliente {
	private readonly clienteBase: ClienteBase

	constructor(llave: string) {
		this.clienteBase = new ClienteBase(llave, clienteHTTP)
	}

	async registrarEvento(evto: Evento): Promise<resultadoDeEvento> {
		return this.clienteBase.registrarEvento(evto)
	}

	async verificarCodigoDeEvento(identificadorDeEvento: string, codigo: string): Promise<resultadoDeVerificacionDeEvento> {
		return this.clienteBase.verificarCodigoDeEvento(identificadorDeEvento, codigo)
	}

	public set URLAPI(url: string) {
		this.clienteBase.URLAPI = url
	}
}

const clienteHTTP = async function(llave: string, metodo: string, recurso: string, datos: object) {
	let res = await fetch(recurso, {
		method: metodo,
		headers: {
			'Content-Type': 'application/json',
			'Authorization': llave
		},
		body: JSON.stringify(datos)
	});
	if (!res.ok) {
		throw new Error('ocurrió un error')
	}

	return res.json()
}
