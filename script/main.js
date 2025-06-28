document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnGreeting");
  const input = document.getElementById ('txtName');
  const message = document.getElementById ('message')

  btn.addEventListener('click', ()=>{
    message.innerHTML = 'Ola, '+ input.value + '. Seja bem vindo a minha pagina'
  } )
});
