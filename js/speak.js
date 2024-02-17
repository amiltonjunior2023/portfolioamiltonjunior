setTimeout(function() {
  falarFrase("Olá, eu me chamo Amilton Junior. E sou programador full stack javascript. E tenho habilidades com automações, automações com mouse e teclado, Robôs e análise de dados com power bi");
}, 6000); // Atraso de 6 segundos

function falarFrase(frase) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(frase);
  utterance.rate = 0.9; // Reduz a velocidade para 80%
  synth.speak(utterance);
}

// Adiciona um evento de clique para ativar a fala
document.addEventListener( function() {
  falarFrase("Olá, eu me chamo Amilton Junior. E eu sou  programador full stack.");
});
