# @verifico/web-util

Este paquete proporciona utilidades para obtención de datos del navegador y su envío al servidor.

Este paquete puede usarse si va a consumir la API de Verifico del lado del servidor. Si va a consumir la API de Verifico desde el navegador, no necesita usar directamente este paquete; en su lugar use `@verifico/web-api`.

## Instalación

`npm i @verifico/web-util`

## Uso

La función `objetoNavegador` le ayuda a construir automáticamente las variables de navegador que serán enviadas a la API de Verifico para su análisis.

**Ejemplo de uso:**

```js
import { objetoNavegador } from "@verifico/web-util"

// Construir variables de dispositivo.
let navegador = objetoNavegador()
let variableDispositivo = {
	"plataforma": navigator.platform,
	"navegador": navegador
}

// Construir variables de adquisición.
let variableAdquisición = {
	//...
}

// Construir variables.
let variables = {
	"dispositivo": variableDispositivo,
	"adquisicion": variableAdquisición
}

// Enviar al servidor mediante API propia...

```
