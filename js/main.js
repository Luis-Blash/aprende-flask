// copiar al porta papeles
function copiarCode(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}

/*
$(document).ready(function () {
    $('.collapse').collapse()
    //funciones
    function infoHide(muestra,id,noHide){
        for (let i = 0; i < id.length; i++) {
            if (noHide != id[i]) {
                muestra.find(id[i]).hide();
            }
        }
    }
    function muestra_div(muestra, numero) {
        let infoID = ["#i0","#i1", "#i2"];
        let noHide = infoID[numero];
        console.log(noHide);
        switch (numero) {
            case 1:
                muestra.find(noHide).show();
                infoHide(muestra,infoID,noHide);
                break;
            case 2:
                muestra.find(noHide).show();
                infoHide(muestra,infoID,noHide);
                break;
            default:
                console.log('no existe');
        }
    }

    $('.info-flex').on('click', '.menu-flask #b1', function (event) {
        event.preventDefault();
        let muestra = $(this).closest('.info-flex');
        muestra_div(muestra, 1);
    });

    $('.info-flex').on('click', '.menu-flask #b2', function (event) {
        event.preventDefault();
        let muestra = $(this).closest('.info-flex');
        muestra_div(muestra, 2);
    });



    
});*/