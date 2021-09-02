import { objetoNavegador } from "@verifico/web-util"
import {
	VariableDispositivo as VariableDispositivoBase,
	VariableNavegador
} from '@verifico/base-api'

export class VariableDispositivo extends VariableDispositivoBase {
	constructor() {
		let objNv = objetoNavegador()
		let nvgdr = new VariableNavegador(objNv)
		super('', navigator.platform, nvgdr)
	}
}
