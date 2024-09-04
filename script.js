//JS externo.

//Tipo de Saida

    //document.getElementById("texto") --> pega o elemento do HTML e .innerHTML= "Meu primeiro texto JS" --> imprimi o texto 

    document.getElementById("texto").innerHTML= "Meu primeiro texto JS";

    alert(10+5);

    // ou alert('ALERTA');

    console.log("Alerta no consoole, aperte f12");

//Declaração
    let a,b,c,d;

    a = 3;
    b = 4;
    c = 7;
    d = a+b+c;

    //declaração em bloco:
    function funcao (){

        document.write(3);

    }

//Sintaxe

    console.log(1); // Numero
    console.log("1"); // Letra

    console.log(1+1);
    console.log("1+1");

    //JS é caseSensitive

//Variaveis

    var a1 = 4;
    
    //ou

    var a2; // a2 está indefinido
    a2 = 4;
    a2 = 7; // a2 foi redefinido

    var a3 = a2 + 1;

    var b1 = "Meu ";
    var b2 = "Nome";
    var b3 = b1+b2;

    // ou b3 = b1 + " " + b2;
    
    let e = 30; // let não permite redeclaracao da variavel
    var b1 = 4; // var pode ser redeclarado 

//Operadores

    //Comparação : ===,==,!=,!==,>=,<=, <==,>==.
    var a1 = 4;
    var a2 = ( a1==4); //a2 = true

    var a2 = (a1==='4'); // === -> verifica o valor e o tipo 
                        // a2 = false

    // Ternario 

    var a2 = (a1 == 4) ? "a1 é igual a 4" : "a1 é diferente de 4"
    // var a2 = (comparação) ? o valor se true : o valor se false

   //Logicos : || && e !

//Função

    function nomeDaFuncao ( valor1,valor2) {
            return valor1+valor2;
    }

    alert(nomeDaFuncao(10,12));


    let variavel01 = 3; // variavel globar

    function apertaBotao (){

        alert("APERTO O BOTAO");
        let variavel01 = 88; // variavel local

    }
    
// Objetos
    // Objeto carro e as propriedades ...
    // Boa pratica usar const para carro
    const carro = {marca: "Ford", modelo: "Ka", ano:2020 , placa: "AKB20",buzina : function(){alert('Bi Bi')},

                 mostraMarca : function(){
                    return this.marca;
                }

        };

    
    alert(carro.ano);
    carro.buzina();
    console.log(carro.mostraMarca());

//Eventos
    //Ações disparadas pela manejo do usuario na pagina :D

    



