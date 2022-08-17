var encriptado ="";
var desencriptado = "";
var frase ="";
 


function obtenerTexto(){
     frase = document.getElementById('texto').value;
     let mayusculas = /A|B|C|D|E|F|G|H|I|J|K|L|M|N|Ñ|O|P|Q|R|S|T|U|V|W|X|Y|Z/g;
     if(mayusculas.test(frase)){
          alert("ingresa solo minusculas y sin acentos");
          location.reload();
     }   
     
}

function copiarTexto(){
     let copia = document.getElementById('resultado');
     copia.select();
     document.execCommand('copy');
}

function encriptar(frase){
     
     let vocales={a:"ai",e:"enter",i:"imes",o:"ober",u:"utar"};

     if((frase.includes("a")) || 
     (frase.includes("e")) || (frase.includes("i")) || (frase.includes("o")) || (frase.includes("u")) ){
          encriptado=(frase.replaceAll(/a|e|i|o|u/g, function(matched){return vocales[matched];}));
      }  
      document.getElementById('resultado').value=encriptado;
      document.getElementById('texto').value= "";
      
}

function desencriptar(frase){
     
     let vocales={ai:"a",enter:"e",imes:"i",ober:"o",utar:"u"};

     if((frase.includes("ai")) || 
     (frase.includes("enter")) || (frase.includes("imes")) || (frase.includes("ober")) || (frase.includes("utar")) ){
          desencriptado=(frase.replaceAll(/ai|enter|imes|ober|utar/g, function(matched){return vocales[matched];}));
      }  
      document.getElementById('resultado').value=desencriptado;
      document.getElementById('texto').value= "";
      
}

function imgDisplay (){
     document.getElementById("imagen").style.display= "none";
     document.getElementById("cajaR").style.display="flex";
}