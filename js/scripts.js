
const form = document.querySelector("#formulario");

// eventos
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validarFormulario();
});


// função
function validarFormulario() {


  const numeroA = document.querySelector("#numeroA").value;
  const numeroB = document.querySelector("#numeroB").value;


  if (numeroB > numeroA) {
    alert('Formulário válido! Número B é maior que o número A.');

  } else {
    alert('Formulário inválido! O número B deve ser maior que o número A.');
  }
};





