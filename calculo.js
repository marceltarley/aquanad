function calcular() {
    const precoPorLitro = 0.05;
    //const quantidade = document.getElementById(('quantidade01'*1.5)+('quantidade02'*2)+('quantidade03'*3)+('quantidade04'*5)).value; 
    const quantidade01 = document.getElementById('quantidade01').value; 
    const quantidade02 = document.getElementById('quantidade02').value; 
    const quantidade03 = document.getElementById('quantidade03').value;
    const quantidade04 = document.getElementById('quantidade04').value;  

    const quantidadeTotalLitros = (quantidade01*1.5) + (quantidade02*2) + (quantidade03*3) + (quantidade04*5);

    // Verificando se a quantidade é válida
    if (quantidadeTotalLitros && quantidadeTotalLitros > 0) {
      const total = (quantidadeTotalLitros / 1.58 ) * precoPorLitro;
      document.getElementById('resultado').innerText = `Levar o valor de € ${total.toFixed(2)}.`; // Exibindo o resultado
    } else {
      document.getElementById('resultado').innerText = "Por favor, digite uma quantidade válida."; // Mensagem de erro
    }
  }
