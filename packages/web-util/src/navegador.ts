export type navegador = {
	window: object
}

export function objetoNavegador(): navegador {
	return <navegador>{
		window: objetoWindow()
	}
}

function objetoWindow(): object {
	let obj = function(O: any): any {
		let o: any = {}

		if (!O) {
			return o
		}

		for (let i in O) {
			let t = typeof O[i]
			if (O[i] === null || t === 'string' || t === 'number' || t === 'boolean') {
				o[i] = O[i]
			}
		}

		return o
	}

	let nvg = obj(window.navigator)
	if (window.navigator.languages) {
		nvg['languages'] = window.navigator.languages
	}

	let scr = obj(window.screen)
	if (window.screen.orientation) {
		scr['orientation'] = obj(window.screen.orientation)
	}

	return {
		innerHeight: window.innerHeight,
		innerWidth: window.innerWidth,
		outerHeight: window.outerHeight,
		outerWidth: window.outerWidth,
		pageXOffset: window.pageXOffset,
		pageYOffset: window.pageYOffset,
		screen: scr,
		screenLeft: window.screenLeft,
		screenTop: window.screenTop,
		screenX: window.screenX,
		screenY: window.screenY,
		scrollX: window.scrollX,
		scrollY: window.scrollY,
		navigator: nvg
	}
}