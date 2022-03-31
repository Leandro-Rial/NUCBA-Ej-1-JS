const ingredientes = ["harina", "huevos", "queso", "sal", "morron", "tomate", "levadura", "oregano", "jamon", "salsa"]
let pares = []
let impares = []

const ingrPizza = (array) => {
    for(let i = 0; i < array.length; i++){
        if(array[i].length % 2 === 0){
            pares.push(array[i]);
        }
        else{
            impares.push(array[i]);
        }
    }

    console.log(`Los numeros pares son ${pares}`);
    console.log(`Los numeros impares son ${impares}`);
}

ingrPizza(ingredientes)