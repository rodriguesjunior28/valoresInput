const btn = document.querySelector("#send");

btn.addEventListener("click", function(e) {

    e.preventDefault();
    
    const name = document.querySelector("#name").value
    const anos = document.querySelector("#anos").value
    const estado = document.querySelector("#estado").value
    const cidade = document.querySelector("#cidade").value
     
    /*const value = name.value;  */    

     console.log(name);
     console.log(anos);
     console.log(estado);
     console.log(cidade);

});

/* e.preventDefault(); é com ele que conseguimos vê o valor no console.log */