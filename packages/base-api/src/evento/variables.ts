import { variableOrigen, VariableOrigen } from './variables_origen'
import { variableDispositivo, VariableDispositivo } from './variables_dispositivo'
import { variableAdquisicion, VariableAdquisicion } from './variables_adquisicion'

export type variables = {
	origen?: variableOrigen
	dispositivo?: variableDispositivo
	adquisicion?: variableAdquisicion
	otras?: object
}

export class Variables {
	readonly datos: variables

	constructor(origen?: VariableOrigen, dispositivo?: VariableDispositivo, adquisicion?: VariableAdquisicion, otras?: object) {
		this.datos = {}

		if (origen) {
			this.datos.origen = origen.datos
		}

		if (dispositivo) {
			this.datos.dispositivo = dispositivo.datos
		}

		if (adquisicion) {
			this.datos.adquisicion = adquisicion.datos
		}

		if (otras) {
			this.datos.otras = otras
		}
	}
}
