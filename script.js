//criação da lista de jogadores
var jogadores = [];

//função para adicionar um novo jogador na lista e limpar o input
function adicionarJogador() {
  var nomeJogador = document.getElementById("nomeJogador");
  var elementoResultado = document.getElementById("resultado");

  if (nomeJogador.value == "") {
    elementoResultado.innerHTML = "Digite um nome";
  } else {
    jogadores.push({
      nome: nomeJogador.value,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    });
    elementoResultado.innerHTML =
      "Jogador: " + nomeJogador.value + " adicionado com sucesso!";
    nomeJogador.value = "";
    exibeJogadoresNaTela(jogadores);
  }
}

//função para zerar placar do jogo
function zerarPlacar() {
  jogadores.forEach((jogador) => {
    jogador.vitorias = 0;
    jogador.empates = 0;
    jogador.derrotas = 0;
    jogador.pontos = calculaPontos(jogador);
  });
  exibeJogadoresNaTela(jogadores);
}

//função para construir e exibir os jogadores na tela
function exibeJogadoresNaTela(jogadores) {
  var elemento = "";

  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }
  var listaJogadores = document.getElementById("listaJogadores");
  listaJogadores.innerHTML = elemento;
}

//função para calcular os pontos dos jogadores e retornar pontos
function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

//função para adicionar vitorias nos jogadores
function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

//função para adicionar empates nos jogadores
function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

//função para adicionar derrotas nos jogadores
function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}