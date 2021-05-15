(() => {
    const avenger = {
        nombre:	'Steve',
        clave:	'Capitán América',
        poder:	'Droga'
	}
	
	const extraer = ( { nombre, poder }:any ) => {
		//const { nombre, clave, poder } = avenger;
	
	    console.log(nombre);
	    //console.log(clave);
	    console.log(poder);
	
	}

	//extraer(avenger);

	const avengers:string[] = ['Thor', 'Iron Man', 'SpiderMan'];

	const [ , , arana ] = avengers;

	// console.log( asgard );
	// console.log( hierrro );
	// console.log( arana );

	const extraerArr = ( [thor, ironman, spiderman]: string[] ) => {
		
		console.log( thor );
		console.log( ironman );
		console.log( spiderman );
	}

	extraerArr(avengers);

})();