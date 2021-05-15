(() => {
	
	
	const retirarDinero = ( montoRetirar: number ): Promise<number> => {
 
		let dineroActual = 1000;

		return new Promise( (resolve, reject) => {

			if (montoRetirar > dineroActual){
				reject('No hay fondos suficientes')
			} else {
				dineroActual -= montoRetirar;
				resolve( dineroActual );
			}


		});

	}

	retirarDinero( 800 )
		.then( montoActual => console.log(`Me queda ${ montoActual } `) )
		.catch( console.warn )



})();