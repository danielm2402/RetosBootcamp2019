function formSelected(parId, event) {

    document.getElementById("form1").style.display = 'none';
    document.getElementById("form2").style.display = 'none';
    document.getElementById("form3").style.display = 'none';
    document.getElementById("form4").style.display = 'none';
    document.getElementById("form5").style.display = 'none';
    document.getElementById("form6").style.display = 'none';
    document.getElementById("form7").style.display = 'none';
    document.getElementById("form8").style.display = 'none';
    document.getElementById("form9").style.display = 'none';
    document.getElementById("form10").style.display = 'none';
    document.getElementById("form11").style.display = 'none';
    document.getElementById("form12").style.display = 'none';
    document.getElementById("form13").style.display = 'none';
    document.getElementById("form14").style.display = 'none';
    event.preventDefault();
    var formulario = document.getElementById(parId);
    formulario.style.display = 'block';

}

function ejercicio1() {

    var varSalario = Number(leerCampo("txtSalario"));
    var varPorcentaje;
    if (verificarRango(varSalario, 0, 0)) {
        if (varSalario < 9000) {
            varPorcentaje = varSalario * 0.2;
            varSalario = varSalario + varPorcentaje;
        }
        if (varSalario > 9000 && varSalario < 15000) {
            varPorcentaje = varSalario * 0.1;
            varSalario = varSalario + varPorcentaje;
        }
        if (varSalario > 15000 && varSalario < 20000) {
            varPorcentaje = varSalario * 0.05;
            varSalario = varSalario + varPorcentaje;
        }

        document.getElementById("rEjercicio1").style.display = 'block';
        document.getElementById("rSalario").innerHTML = varSalario;
    }


}

function ejercicio5() {
    var anio = Number(leerCampo("txtanio"));
    if (verificarRango(anio, 0, 0)) {
        var msj = "No es bisiesto";
        if (esAnioBisiesto(anio)) {
            msj = "Es bisiesto";
        }

        document.getElementById("respuestaAnio").style.display = 'block';
        document.getElementById("anio").innerHTML = msj;

    } else {
        alert("verifique que ingreso un año valido");
    }
}

function leerCampo(parCampo) {

    var id = parCampo
    return document.getElementById(id).value;
}
function ejercicio11() {
    var varNumero = leerCampo("num");
    var Mensaje = "El número es primo";
    for (let i = 2; i < varNumero; i++) {
        if (varNumero % i == 0) {
            Mensaje = "El numero no es primo"
        }

    }
    alert(Mensaje);
}
function ejercicio14() {
    var varNumero;
    if (verificarRango(varNumero, 0, 0)) {
        var varImpresion = '*';
        for (let i = 0; i < array.length; i++) {
            //imprimir en html;
            varImpresion = varImpresion + '*';

        }
    }
}
function ejercicio2() {

    var varTerminos = Number(leerCampo("txtTerminos"));
    var suma;
    suma = 0;


    for (let i = 0; i <= varTerminos; i++) {
        if ((i == 2) || ((i % 2) == 0)) {
            suma = suma + (1 / ((2 * i) + 1));
        }

        else {
            suma = suma - (1 / ((2 * i) + 1));
        }
    }

    document.getElementById("rEjercicio2").style.display = 'block';
    document.getElementById("rPi").innerHTML = (suma);
}
function ejercicio3() {
    var varN = Number(leerCampo("txtN"));
    if (verificarRango(varN, 0, 0)) {
        for (let i = 0; i < varN; i++) {

            var midiv = document.createElement("div");
            midiv.setAttribute("id", "div".concat(i));
            document.getElementById('rN').appendChild(midiv);

            var o = document.createElement('input');
            o.type = "text";
            o.id = "txt".concat(i);
            o.placeholder = "Numero".concat(i);
            o.style.property = "texts"
            document.getElementById('div'.concat(i)).appendChild(o);

        }

        var midiv = document.createElement("div");
        midiv.setAttribute("id", "div");
        document.getElementById('rN').appendChild(midiv);

        var btn = document.createElement("button");
        btn.type = "button";
        btn.innerText = "Enviar";
        document.getElementById('rN').appendChild(btn);
        if (btn.addEventListener) {
            btn.addEventListener('click', function () {
                var vector = [];
                var mayor = 0;
                var menor = 0;
                for (let i = 0; i < varN; i++) {
                    vector[i] = Number(leerCampo('txt'.concat(i)));
                }
                var suma = 0;
                for (let i = 0; i < varN; i++) {
                    suma = (vector[i] + suma);
                }
                for (let i = 0; i < varN; i++) {
                    if (vector[i] > mayor) {
                        mayor = vector[i];
                    }

                }
                menor = mayor;
                for (let i = 0; i < varN; i++) {
                    if (vector[i] < menor) {
                        menor = vector[i];
                    }

                }

                var midiv = document.createElement("div");
                midiv.setAttribute("id", "divresult");
                document.getElementById('rN2').appendChild(midiv);

                var promedio = document.createElement("h2");
                promedio.setAttribute("id", "promedio");
                promedio.innerHTML = "el promedio es: ".concat(suma / varN);
                document.getElementById('divresult').appendChild(promedio);

                var numMayor = document.createElement("h2");
                numMayor.setAttribute("id", "mayor");
                numMayor.innerHTML = "el numero mayor es: ".concat(mayor);
                document.getElementById('divresult').appendChild(numMayor);

                var numMenor = document.createElement("h2");
                numMenor.setAttribute("id", "menor");
                numMenor.innerHTML = "el número menor es: ".concat(menor);
                document.getElementById('divresult').appendChild(numMenor);



            }, false);

        } else {
            btn.attachEvent('onclick', alert("click"));
        }


    }
}


function verificarRango(parNumero, parRangoMinimo, parRangoMaximo) {
    if (parRangoMaximo > 0) {
        if ((parNumero >= parRangoMinimo) && (parNumero <= parRangoMaximo)) {
            return true;
        }
    }
    else {
        if (parNumero >= parRangoMinimo) {
            return true;
        }
    }

    return false;
}

function esAnioBisiesto(parAnio) {
    if (parAnio % 4 == 0 && parAnio % 100 != 0) {
        return true;

    }
    if (parAnio % 4 == 0 && parAnio % 100 == 0) {
        if (parAnio % 400 == 0) {
            return true;
        }
        return false;
    }
    return false;
}

function ejercicio4() {
    var mensaje = "";
    var varAnios = [];
    var varAnio = 0;

    for (let i = 1990; i <= 2000; i++) {
        varAnio = i;

        var a = varAnio % 19;
        var b = varAnio % 4;
        var c = varAnio % 7;
        var d = (19 * a + 24) % 30;
        var e = (2 * b + 4 * c + 6 * d + 5) % 7;
        var N = (22 + d + e);
        varAnios.push(N);


    }
    for (let i = 0; i < varAnios.length; i++) {
        if (varAnios[i] > 31) {
            var num = document.createElement("h2");
            num.innerHTML = "el día de pascua para el mes de abril es: ".concat(varAnios[i] - 31);
            document.getElementById('pascua').appendChild(num);
        }
        else {
            var num = document.createElement("h2");
            num.innerHTML = "el día de pascua para el mes de marzo es: ".concat(varAnios[i]);
            document.getElementById('pascua').appendChild(num);
        }

    }
}
function ejercicio6() {
    var n = Number(leerCampo('filas'));
    var suma = (Math.pow(n, 3) + n) / 2;
    var posInicial = (n - 1) / 2;
    var i_anterior = 0;
    var j_anterior = 0;
    var temp = 1;

    var matriz = [];
    for (let i = 0; i < n; i++) {
        matriz[i] = new Array(n);
    }


    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matriz[i][j] = 0;
        }

    }
    let i = 0;
    let j = posInicial;
    while (temp != (n * n) + 1) {
        if (matriz[i][j] == 0) {
            matriz[i][j] = temp;
        } else {
            i = i_anterior + 1;
            j = j_anterior;
            matriz[i][j] = temp;
        }
        i_anterior = i;
        j_anterior = j;
        temp++;
        j++;
        i--;
        if (i < 0 && j == n) {
            i = n - 1;
            j = 0;
        } else if (i < 0) {
            i = i + n;
        } else if (j == n) {
            j = 0;
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(matriz[j][i]);


        }
        console.log("\t");

    }



    var col = n;
    var filas = n;;
    var tabla = "<table border=\"0\">";
    for (i = 0; i < filas; i++) {
        tabla += "<tr>";
        for (j = 0; j < col; j++) {
            tabla += "<td>" + "<input type=\"text\" size=\"0\" value=\"" + matriz[i][j] + "\">" + "</td>";
        }
        tabla += "</tr>";
    }
    tabla += "</table>";
    document.getElementById("tabla").innerHTML = tabla;

}
function ejercicio7() {
    var contador = 0;
    var numero = 2;
    while (contador < 3) {
        var suma = 0;
        for (let i = 1; i < numero; i++) {

            if (numero % i == 0) {
                suma = suma + i;
            }

        }
        if (suma == numero) {
            var num = document.createElement("h2");
            num.innerHTML = " ".concat(numero);
            document.getElementById('respuestaM').appendChild(num);
            contador++;
        }
        numero++;

    }
}
function ejercicio8() {
    var x = leerCampo('txtx');
    var suma = 1;
    for (let i = 1; i <= 100; i++) {
        var factorial = 1;
        for (let j = 1; j <= i; j++) {
            factorial = factorial * i

        }
        suma = Math.pow(x, i) / factorial + suma;
    }

    var num = document.createElement("h2");
    num.innerHTML = " ".concat(suma);
    document.getElementById('respuestaserie').appendChild(num);
    ejercicio11()
}
function ejercicio10() {
    var a = leerCampo('numero1');
    var b = leerCampo('numero2');
    var mcd = obtenerMCD(a, b);

    document.getElementById("respuestamcd").style.display = 'block';
    document.getElementById("mcd").innerHTML = mcd;
}
function obtenerMCD(a, b) {
    if (b == 0)
        return a;
    else
        return obtenerMCD(b, a % b);
}

function ejercicio13() {
    var num = leerCampo('txtnum');
    var suma = 0;
    for (let i = 1; i <= num; i++) {
        suma = i / (Math.pow(2, i)) + suma;
    }
    document.getElementById("respuesta").style.display = 'block';
    document.getElementById("n").innerHTML = suma;

}
function ejercicio12() {
    var num = leerCampo('a');
    var suma = 0;
    for (let i = 2; i <= num; i++) {
        suma = (1 / i) + suma;
    }
    document.getElementById("respuesta1").style.display = 'block';
    document.getElementById("n1").innerHTML = suma;
}
function ejercicio14() {
    var lineas = leerCampo('lineas');
    var caracter = '';
    for (let i = 0; i < lineas; i++) {
        caracter = caracter + '*';
        var linea = document.createElement("h2");
        linea.setAttribute("id", "promedio");
        linea.innerHTML = "".concat(caracter);
        document.getElementById('rlineas').appendChild(linea);
    }


}