(function(){
    
    function getEdad() {
        return edad + 143;        
    }
    
    const nombre = 'Victor'
    const apellido = 'Vizcarra'
    const edad = 27
    
    // const salida = nombre + " " + apellido + " ( " + edad + " ) "
    let salida = `
    ${nombre}
    ${apellido}
    (${getEdad()})`;
    
    
    
    console.log(salida)

})();