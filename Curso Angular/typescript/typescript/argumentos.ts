(function(){

    function activar( quien    :string,
                      momento ?:string, 
                      objeto   :string = 'batiseñal' ) {
        console.log( `${quien} activó la ${objeto} en la ${momento}` )
    }

    activar('Gordon', 'tarde');

})();