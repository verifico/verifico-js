export type variableOrigen = {
	direccionIP?: string
	coordenadas?: variableCoordenadas
}

export type variableCoordenadas = {
	latitud?: number
	longitud?: number
}

export class VariableOrigen {
	readonly datos: variableOrigen

	constructor(direccionIP: string, coordenadas?: VariableCoordenadas) {
		this.datos = {
			direccionIP: direccionIP
		}

		if (coordenadas) {
			this.datos.coordenadas = coordenadas.datos
		}
	}
}

export class VariableCoordenadas {
	readonly datos: variableCoordenadas

	constructor(latitud: number, longitud: number) {
		this.datos = {
			latitud: latitud,
			longitud: longitud
		}
	}
}