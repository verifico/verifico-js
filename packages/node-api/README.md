## @verifico/node-api

Este paquete proporciona el cliente de conexión a la API de Verifico desde un entorno JavaScript de Node.js.

## Instalación

`npm i @verifico/node-api`

## Uso

**Ejemplo de uso para un comercio electrónico:**

```js
import {
	Cliente,
	Evento,
	Variables,
	VariableOrigen,
	VariableCoordenadas,
	VariableDispositivo,
	VariableAdquisicion,
	VariablePago,
	VariablePrecio,
	VariableTarjetaDePago,
	VariableReceptorDeFacturacion,
	VariableDestinatarioDeEnvio,
	VariableDireccionPostal
} from "@verifico/node-api"

let llave = '<LLAVE_DE_AUTORIZACIÓN_DE_API>'
let grupoDeEntes = '<IDENTIFICADOR_DE_GRUPO_DE_ENTES>'
let ente = '<IDENTIFICADOR_DE_ENTE>'

let direccionIP  = "1.2.3.4"
let coordenadas  = new VariableCoordenadas(4.1234, -72.4321)
let origen       = new VariableOrigen(direccionIP, coordenadas)

let dispositivo  = new VariableDispositivo()

let precio       = new VariablePrecio("COP", "64000")
let tarjeta      = new VariableTarjetaDePago("12/24", "9876")
let pago         = new VariablePago(precio, tarjeta)
let direccion    = new VariableDireccionPostal("CO", "Bogotá", "Suba", "", "Calle 1 # 2-3")
let receptor     = new VariableReceptorDeFacturacion("Juan Pérez", "1234567890", "3001234567", "juan@ejemplo.co", direccion)
let destinatario = new VariableDestinatarioDeEnvio("Juan Pérez", "3001234567", "juan@ejemplo.co", direccion)
let adquisicion  = new VariableAdquisicion(pago, receptor, destinatario)

let otras        = {
	"artículoDeLujo": true,
	"enPromoción": true,
	"intencionesPrevias": 2,
	// Otras variables personalizadas...
}

let variables    = new Variables(origen, dispositivo, adquisicion, otras)

let evento = new Evento(grupoDeEntes, ente, variables)

let verifico = new Cliente(llave)
let identificadorDeEvento = ''
let verificado = false

try {
	let res = await verifico.registrarEvento(evento)
	identificadorDeEvento = res.identificador
	verificado = !res.verificacion.requerida
} catch (e) {
	// Manejar error.
}

if (verificado) {
	// Proceder con la compra.
} else {
	// Guardar «identificadorDeEvento».
	// Solicitar verificación de código al usuario.
}

```


**Ejemplo de uso de verificación de código:**

```js

let llave = '<LLAVE_DE_AUTORIZACIÓN_DE_API>'
let identificadorDeEvento = '<IDENTIFICADOR_DE_EVENTO_PREVIO>'
let codigo = '<CÓDIGO_INGRESADO_POR_EL_USUARIO>'

let verifico = new Cliente(llave)
let verificado = false

try {
	let verificacion = await verifico.verificarCodigoDeEvento(identificadorDeEvento, codigo)
	verificado = verificacion.valido
} catch (e) {
	// Manejar error.
}

if (verificado) {
	// Proceder con la compra.
} else {
	// Bloquear compra.
}

```