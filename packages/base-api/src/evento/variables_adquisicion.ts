export type variableAdquisicion = {
	pago?: variablePago
	receptorDeFacturacion?: variableReceptorDeFacturacion
	destinatarioDeEnvio?: variableDestinatarioDeEnvio
}

export type variablePago = {
	tarjeta?: variableTarjetaDePago
	precio?: variablePrecio
}

export type variableTarjetaDePago = {
	fechaDeExpiracion?: string
	ultimosCuatroDigitos?: string
}

export type variablePrecio = {
	moneda?: string
	monto?: string
}

export type variableReceptorDeFacturacion = {
	nombre?:            string
	identificacion?:    string
	numeroTelefonico?:  string
	correoElectronico?: string
	direccionPostal?:   variableDireccionPostal
}

export type variableDestinatarioDeEnvio = {
	nombre?: string
	numeroTelefonico?: string
	correoElectronico?: string
	direccionPostal?: variableDireccionPostal
}

export type variableDireccionPostal = {
	pais?: string
	subdivisionDePrimerNivel?: string
	subdivisionDeSegundoNivel?: string
	subdivisionDeTercerNivel?: string
	direccionFisica?: string
}

export class VariableAdquisicion {
	readonly datos: variableAdquisicion

	constructor(pago: VariablePago, receptorDeFacturacion?: VariableReceptorDeFacturacion, destinatarioDeEnvio?: VariableDestinatarioDeEnvio) {
		this.datos = {
			pago: pago.datos
		}

		if (receptorDeFacturacion) {
			this.datos.receptorDeFacturacion = receptorDeFacturacion.datos
		}

		if (destinatarioDeEnvio) {
			this.datos.destinatarioDeEnvio = destinatarioDeEnvio.datos
		}
	}
}

export class VariablePago {
	readonly datos: variablePago

	constructor(precio: VariablePrecio, tarjeta?: VariableTarjetaDePago) {
		this.datos = {
			precio: precio.datos
		}

		if (tarjeta) {
			this.datos.tarjeta = tarjeta.datos
		}
	}
}

export class VariableTarjetaDePago {
	readonly datos: variableTarjetaDePago

	constructor(fechaDeExpiracion: string, ultimosCuatroDigitos: string) {
		ultimosCuatroDigitos = ultimosCuatroDigitos.trim()
		let l = ultimosCuatroDigitos.length
		if (l > 4) {
			ultimosCuatroDigitos = ultimosCuatroDigitos.substring(l-4, l)
		}

		this.datos = {
			fechaDeExpiracion:    fechaDeExpiracion,
			ultimosCuatroDigitos: ultimosCuatroDigitos
		}
	}
}

export class VariablePrecio {
	readonly datos: variablePrecio

	constructor(moneda: string, monto: string) {
		this.datos = {
			moneda: moneda,
			monto:  monto
		}
	}
}

export class VariableReceptorDeFacturacion {
	readonly datos: variableReceptorDeFacturacion

	constructor(nombre: string, identificacion: string, numeroTelefonico: string, correoElectronico: string, direccionPostal?: VariableDireccionPostal) {
		this.datos = {
			nombre:            nombre,
			identificacion:    identificacion,
			numeroTelefonico:  numeroTelefonico,
			correoElectronico: correoElectronico
		}

		if (direccionPostal) {
			this.datos.direccionPostal = direccionPostal.datos
		}
	}
}

export class VariableDestinatarioDeEnvio {
	readonly datos: variableDestinatarioDeEnvio

	constructor(nombre: string, numeroTelefonico: string, correoElectronico: string, direccionPostal?: VariableDireccionPostal) {
		this.datos = {
			nombre:            nombre,
			numeroTelefonico:  numeroTelefonico,
			correoElectronico: correoElectronico
		}

		if (direccionPostal) {
			this.datos.direccionPostal = direccionPostal.datos
		}
	}
}

export class VariableDireccionPostal {
	readonly datos: variableDireccionPostal

	constructor(pais: string, subdivisionDe1erNivel: string, subdivisionDe2doNivel: string, subdivisionDe3erNivel: string, direccionFisica: string) {
		this.datos = {
			pais:                      pais,
			subdivisionDePrimerNivel:  subdivisionDe1erNivel,
			subdivisionDeSegundoNivel: subdivisionDe2doNivel,
			subdivisionDeTercerNivel:  subdivisionDe3erNivel,
			direccionFisica:           direccionFisica
		}
	}
}

