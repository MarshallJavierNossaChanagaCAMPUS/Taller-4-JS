const x =  {
    numero: 1
}

alert(`
-----MENU-----
1.  Lectura de datos
2.  Crear objeto
3.  Mostrar objeto
4.  Crear array
5.  Mostrar array
6.  Elimine primer punto del array
7.  Elimine ultimo elemento del array
8.  Eliminar cualquier elemento del array
9.  Agregar elemento al comienzo del array
10. Agregar elemento al final del array
11. Crear array ocn objetos
12. Iterar array con objetos con FOR
13. Iterar array con objetos con ForEach
14. Iterar array con objetos con Map y crear copia
15. Proceso personal
0.  Salir
`);

let opc = Number(prompt("Digite la opcion:"));

do {
    if (opc == 1) {
        let y = prompt("Ingrese un dato")
        alert(y)
    }
    else if (opc == 2){
        let y = prompt("Ingrese el nombre del objeto")
        
    }
} while (opc !== 0);

console.log(x.numero);