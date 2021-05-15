(function(){

    let miFuncion = function(a:string) {
        return a;
    }

    const miFuncionF = (a:string) => a.toUpperCase();
    
    console.log(miFuncion('Normal'));
    console.log(miFuncionF('Flecha'));

    const sumarN = function (a:number, b:number) {
        return a + b;
    }

    const sumarF = (a:number, b:number) => a + b;

    console.log(sumarN(5, 5));
    console.log(sumarF(10, 10));

    const hulk = {
        nombre: 'Hulk',
        smash() {
            setTimeout( () => {
                console.log( `${ this.nombre } smash!!`);
            }, 1000 );


        }
    }

    hulk.smash();

})();