function setResultado(value){
    document.getElementById('resultado').innerHTML = value;
}

function getResultado(){
    return (document.getElementById('resultado').innerHTML);
}

function add(key){
    var resultado = getResultado();
    if(resultado != '0' || isNaN(key)) setResultado(resultado + key);
    else setResultado(key);
}

function calculo(){
    var result = eval(getResultado()); 
    setResultado(result);
}

function del(){
    // Pone a cero el contenido de la pantalla de la calculadora.
    setResultado(0);
}