import axios from 'axios';
import { Method as HTTPMethod } from 'axios';
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
	return axios({
		method: metodo as HTTPMethod,
		url: recurso,
		headers: {
			'Content-Type': 'application/json',
			'Authorization': llave
		},
		data: datos
	}).then(res => {
		if (res.status < 200 || res.status >= 300 || !res.data) {
			let err = res.data && res.data.error ? res.data.error : 'error inesperado'
			return Promise.reject({error: err})
		}

		return res.data
  })
}
