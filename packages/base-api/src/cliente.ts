import { Evento, resultadoDeEvento } from './evento/evento'
import { verificacionDeEvento, resultadoDeVerificacionDeEvento } from './evento/verificacion/verificacion'

export class ClienteBase {
	public URLAPI: string = "https://api.verifico.co"
	private readonly llave: string

	peticion: (llave: string, metodo: string, recurso: string, datos: object) => Promise<any>

	constructor(llave: string, clienteHTTP: (llave: string, metodo: string, recurso: string, datos: object) => Promise<any>) {
		this.llave = llave
		this.peticion = clienteHTTP
	}

	async registrarEvento(evto: Evento): Promise<resultadoDeEvento> {
		evto.datos.grupoDeEntes.identificador = evto.datos.grupoDeEntes.identificador.trim()
		evto.datos.ente.identificador = evto.datos.ente.identificador.trim()

		if (!evto.datos.grupoDeEntes.identificador) {
			throw new Error('falta el identificador del grupo de entes')
		}

		if (!evto.datos.grupoDeEntes.identificador) {
			throw new Error('falta el identificador del ente')
		}

		if (!evto.datos.variables) {
			throw new Error('faltan las variables')
		}

		let url = `${this.URLAPI}/eventos`
		return this.peticion(this.llave, "POST", url, evto.datos) as Promise<resultadoDeEvento>
	}

	async verificarCodigoDeEvento(identificadorDeEvento: string, codigo: string): Promise<resultadoDeVerificacionDeEvento> {
		identificadorDeEvento = identificadorDeEvento.trim()
		codigo = codigo.trim()

		if (!identificadorDeEvento) {
			throw new Error('falta el identificador del evento')
		}

		if (!codigo) {
			throw new Error('falta el código a verificar')
		}

		let vrfccn = <verificacionDeEvento>{
			codigo: codigo
		}

		let url = `${this.URLAPI}/eventos/${encodeURIComponent(identificadorDeEvento)}/verificar-codigo`
		return this.peticion(this.llave, "POST", url, vrfccn) as Promise<resultadoDeVerificacionDeEvento>
	}

}
