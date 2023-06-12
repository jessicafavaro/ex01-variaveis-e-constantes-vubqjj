/***** Não altere os códigos abaixo *****/

function verificaCor() {
  try {
    if (cor.toLowerCase() === 'verde') {
      try {
        cor = 'Azul';
        cor = 'verde';

        return ['correct', '<h4 class="correct-heading">Exercício correto!</h4><p>A variável cor tem como valor "verde"</p>']

      } catch (e) {
        return ['incorrect', '<h4 class="incorrect-heading">Exercício incorreto!</h4><p>Não utilize const</p>']
      }
    } else {
      return ['incorrect', '<h4 class="incorrect-heading">Exercício incorreto!</h4><p>A variável está com o valor incorreto</p>']
    }
  } catch {
    return ['incorrect', '<h4 class="incorrect-heading">Exercício incorreto!</h4><p>A variável cor não foi declarada corretamente</p>'];
  }
}

document.querySelector('.click-btn').addEventListener('click', () => {
  const [classResult, result] = verificaCor();
  const resultDisplay = document.querySelector('.result');

  resultDisplay.className = `result ${classResult}`;
  resultDisplay.innerHTML = result;
});