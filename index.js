
// Alternative to load event
document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        initApplication();
    }
};

const arrayProductos = [
  {
      "id": 1,
      "producto": 'producto1',
      "precio": 1000,

  },
  {
      "id": 2,
      "producto": 'producto2',
      "precio": 2000,

  },
  {
    "id": 3,
    "producto": 'producto3',
    "precio": 2000,

}
]

function initApplication() {
    creaElementosDom();

}

function clickBtnProd(event){
  
  const found = arrayProductos.find(element => element.id == this.id);
  console.log(found);
}

function creaElementosDom() {

  const contenedor = document.getElementById('contenedor')
  console.log(contenedor);

  

  let result ='';
  arrayProductos.forEach(element => {

      var elementHtml = ` <div class="ctn-card">
                    <h5>${element.producto}</h5>
                    <p>${element.precio}</p>
                    <button id="${element.id}">Añadir</button>
                  </div>`

                  result+=elementHtml;

                    });

                   contenedor.innerHTML= result;



    arrayProductos.forEach(element =>{

      var el = document.getElementById(`${element.id}`)
      el.addEventListener("click",clickBtnProd);

    });



}