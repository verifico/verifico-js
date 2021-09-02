export type variableDispositivo = {
	identificador?: string
	plataforma?: string
	navegador?: variableNavegador
}

export type variableNavegador = {
	window: object
}

export class VariableDispositivo {
	readonly datos: variableDispositivo

	constructor(identificador?: string, plataforma?: string, navegador?: VariableNavegador) {
		this.datos = {
			identificador: identificador || '',
			plataforma:    plataforma || ''
		}

		if (navegador) {
			this.datos.navegador = navegador.datos
		}
	}
}

export class VariableNavegador {
	readonly datos: variableNavegador

	constructor(navegador: variableNavegador) {
		this.datos = navegador
	}
}
