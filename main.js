function Card(option){
        var input = prompt('Numero de Tarjeta');
        if((input !== "") && (/^([0-9])*$/.test(input))){
          isValidCard ();
        }else {
                alert("Ingrese un numero");
            }
function isValidCard(){
		for (var i = 0; i < input.length ; i++){
  			var newArray = []; 
   		if (typeof input[i] === "number"){
      		newArray.push(input[i]);
    }
    
  }
}
  
} Card();


// function isValidCard (get){
// 	var arry = [];
// 	var n = parseInt(get);
// 	newArry.push(n) = newArry[];
// 	var inv = newArry.reverse();

// for (var i = 0; i < inv.length; i + 2{
// 	newArry.push[i] = Arreglo[];
// 	Arreglo[i]*2;
// }

// }


