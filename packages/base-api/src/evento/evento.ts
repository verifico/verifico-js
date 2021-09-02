import { variables, Variables } from './variables'
import { grupoDeEntes } from './grupodeentes'
import { ente } from './ente'

export type evento = {
	grupoDeEntes: grupoDeEntes
	ente: ente
	variables: variables
}

export type resultadoDeEvento = {
	identificador: string
	fiabilidad: number
	verificacion: resultadoVerificacion
}

export type resultadoVerificacion = {
	requerida: boolean
	factoresDisponibles: string[]
}

export class Evento {
	readonly datos: evento

	constructor(grupoDeEntes: string, ente: string, variables: Variables) {
		this.datos = {
			grupoDeEntes: {
				identificador: grupoDeEntes
			},
			ente: {
				identificador: ente
			},
			variables: variables.datos
		}
	}
}
