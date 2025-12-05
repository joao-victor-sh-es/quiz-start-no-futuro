const quizzes = {
  informatica: [
    { q: "O que é hardware?", a: ["Programas usados no computador", "Parte física do computador", "Arquivos armazenados na nuvem", "Sistemas operacionais"], c: 1 },
    { q: "Qual destes é um sistema operacional?", a: ["Chrome", "Word", "Windows", "WhatsApp"], c: 2 },
    { q: "Para que serve a memória RAM?", a: ["Armazenar arquivos permanentemente", "Aumentar a resolução da tela", "Executar programas temporariamente", "Conectar o computador à internet"], c: 2 },
    { q: "O que é um software?", a: ["Placa que resfria o computador", "Conjunto de instruções e programas", "Tipo de armazenamento externo", "Dispositivo de entrada"], c: 1 },
    { q: "O que é um vírus de computador?", a: ["Uma atualização do sistema", "Um erro de hardware", "Um programa malicioso que causa danos", "Um cabo que conecta dispositivos"], c: 2 },
    { q: "Qual destes é considerado um periférico de entrada?", a: ["Monitor", "Impressora", "Teclado", "Caixa de som"], c: 2 },
    { q: "O que significa “navegador de internet”?", a: ["Programa para editar imagens", "Programa para acessar páginas da web", "Programa para desinstalar apps", "Programa que controla hardware"], c: 1 },
    { q: "O que é um arquivo em formato .docx?", a: ["Vídeo", "Documento de texto", "Planilha", "Imagem"], c: 1 },
    { q: "O que é a nuvem (cloud)?", a: ["Um tipo de memória dentro do computador", "Servidores online para armazenamento", "Um antivírus padrão", "Um cabo USB moderno"], c: 1 },
    { q: "Para que serve uma planilha eletrônica (ex.: Excel)?", a: ["Criar e editar textos", "Acessar redes sociais", "Organizar dados e realizar cálculos", "Editar vídeos"], c: 2 }
  ],
  msi: [
    { q: "Para que serve uma rede de computadores?", a: ["Para jogar melhor", "Para conectar computadores e compartilhar informações", "Para deixar o computador mais bonito", "Para limpar arquivos"], c: 1 },
    { q: "Qual desses aparelhos usamos para ter Wi-Fi em casa?", a: ["Teclado", "Roteador", "Monitor", "Impressora"], c: 1 },
    { q: "Qual cabo é usado para conectar o computador à rede?", a: ["Cabo HDMI", "Cabo de energia", "Cabo de rede (UTP)", "Cabo de áudio"], c: 2 },
    { q: "O que é a internet?", a: ["Um jogo", "Uma rede mundial de computadores", "Um programa do computador", "Um tipo de cabo"], c: 1 },
    { q: "Qual desses é um equipamento de rede?", a: ["Mouse", "Switch", "Pen drive", "Fone de ouvido"], c: 1 },
    { q: "Para que serve um firewall?", a: ["Deixar o PC mais rápido", "Proteger a rede contra acessos indesejados", "Criar fotos", "Imprimir documentos"], c: 1 },
    { q: "O que é um endereço IP?", a: ["Um número que identifica um dispositivo na rede", "Um vírus", "Um tipo de cabo", "Um aplicativo"], c: 0 },
    { q: "Qual desses locais normalmente usa redes de computadores?", a: ["Só em casas", "Só em escolas", "Só em lojas", "Em casas, escolas, empresas e quase todo lugar"], c: 3 },
    { q: "Para que serve um servidor?", a: ["Para armazenar e fornecer informações na rede", "Para aumentar o brilho da tela", "Para limpar o computador", "Para ouvir músicas"], c: 0 },
    { q: "O que é Wi-Fi?", a: ["Internet sem fio", "Um jogo online", "Um cabo rápido", "Um programa de edição"], c: 0 }
  ],
clinicas: [
    { q: "Qual setor do laboratório é focado na análise do hemograma (células do sangue)?", 
      a: ["Bioquímica", "Microbiologia", "Hematologia", "Imunologia"], c: 2 },
    { q: "Para exames como glicose e colesterol, qual parte do sangue é mais usada após centrifugar?", 
      a: ["Soro ou Plasma", "Glóbulos brancos", "Plaquetas", "Glóbulos vermelhos"], c: 0 },
    { q: "Qual equipamento usa rotação rápida para separar os componentes do sangue ou urina?", 
      a: ["Analisador automático", "Microscópio", "Autoclave", "Centrífuga"], c: 3 },
    { q: "O Hemograma Completo avalia principalmente:", 
      a: ["Níveis de açúcar e gordura", "Funcionamento dos rins", "A contagem das células do sangue", "Tipo sanguíneo e Fator Rh"], c: 2 },
    { q: "No exame de urina, para que o microscópio é mais utilizado?", 
      a: ["Medir a acidez (pH) da amostra", "Procurar por células, cristais ou bactérias", "Verificar a cor e a turbidez", "Detectar a presença de glicose"], c: 1 },
    { q: "Qual exame é pedido para descobrir exatamente qual bactéria está causando uma infecção?", 
      a: ["Hemograma", "Exame de Glicose", "Cultura (de urina ou sangue)", "Exame de Colesterol"], c: 2 },
    { q: "Luvas, jaleco e óculos de proteção usados no laboratório são chamados de:", 
      a: ["EPI (Equipamento de Proteção Individual)", "POP (Procedimento Operacional Padrão)", "Uniforme de trabalho", "Kit de primeiros socorros"], c: 0 }, 
    { q: "O que é considerado um erro que pode acontecer ANTES da amostra chegar na máquina?", 
      a: ["A máquina quebrar", "O biomédico analisar errado", "Identificar o tubo do paciente errado", "Faltar energia no laboratório"], c: 2 },
    { q: "Qual profissional de nível superior é habilitado para assinar e liberar os laudos (resultados)?", 
      a: ["Técnico de Enfermagem", "Biomédico ou Farmacêutico", "Recepcionista", "Técnico de Laboratório"], c: 1 },
    { q: "Qual o principal objetivo dos exames de análises clínicas?", 
      a: ["Substituir a consulta com o médico", "Indicar qual remédio o paciente deve comprar", "Auxiliar o médico no diagnóstico e tratamento", "Apenas como check-up, sem valor de diagnóstico"], c: 2 }
  ],
  geral: [
    { q: "Qual é o maior planeta do Sistema Solar?", a: ["Terra", "Marte", "Júpiter", "Saturno"], c: 2 },
    { q: "Quem escreveu “Dom Quixote”?", a: ["Machado de Assis", "William Shakespeare", "Miguel de Cervantes", "José de Alencar"], c: 2 },
    { q: "Qual é o continente onde fica o Egito?", a: ["Ásia", "África", "Europa", "América"], c: 1 },
    { q: "Qual é a capital do Brasil?", a: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"], c: 2 },
    { q: "Qual é o líquido que forma os rios e lagos?", a: ["Óleo", "Água", "Leite", "Areia"], c: 1 },
    { q: "Quem pintou a Mona Lisa?", a: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"], c: 2 },
    { q: "Qual é o animal símbolo da Austrália?", a: ["Leão", "Canguru", "Urso", "Elefante"], c: 1 },
    { q: "Qual é o esporte mais praticado no mundo?", a: ["Basquete", "Futebol", "Vôlei", "Tênis"], c: 1 },
    { q: "O que os vegetais produzem através da fotossíntese?", a: ["Oxigênio e glicose", "Água e sal", "Ferro", "Proteína"], c: 0 },
    { q: "Qual é a moeda oficial do Japão?", a: ["Dólar", "Euro", "Iene", "Peso"], c: 2 }
  ]
};

let nomeUsuario = "";
let cursoAtual = "";
let perguntasAtuais = [];
let indice = 0;
let pontuacao = 0;

const loginSection = document.getElementById("login-section");
const categorySection = document.getElementById("category-container");
const quizSection = document.getElementById("quiz-section");

const nomeInput = document.getElementById("student-name");
const startBtn = document.getElementById("start-btn");
const displayName = document.getElementById("display-name");
const scoresDiv = document.getElementById("scores");

const quizTitle = document.getElementById("quiz-title");
const studentInfo = document.getElementById("student-info");
const questionText = document.getElementById("question");
const answersDiv = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");

window.onload = () => {
  const usuarioSalvo = localStorage.getItem("usuarioAtivo");
  if (usuarioSalvo) {
    nomeUsuario = usuarioSalvo;
    mostrarMenuCursos();
  } else {
    mostrarLogin();
  }
};

function mostrarLogin() {
  loginSection.style.display = "block";
  categorySection.style.display = "none";
  quizSection.style.display = "none";
}

function mostrarMenuCursos() {
  loginSection.style.display = "none";
  categorySection.style.display = "block";
  quizSection.style.display = "none";

  displayName.textContent = nomeUsuario;

  const resultados = JSON.parse(localStorage.getItem("resultadosQuiz") || "{}");
  const resultadoUsuario = resultados[nomeUsuario] || {};

  scoresDiv.innerHTML = "<h3>Resultados:</h3>"; 

  Object.keys(resultadoUsuario).forEach(cat => {
    const texto = document.createElement("p");
    texto.textContent = `${cat.toUpperCase()}: ${resultadoUsuario[cat]} pts`;
    scoresDiv.appendChild(texto);
  });

  const userActionsDiv = document.createElement("div");
  userActionsDiv.style.marginTop = "25px";
  userActionsDiv.innerHTML = `
    <button id="mudarNomeBtn" class="small-btn">✏️ Mudar nome</button>
    <button id="trocarUsuarioBtn" class="small-btn">🔄 Trocar usuário</button>
  `;
  scoresDiv.appendChild(userActionsDiv);
  
  document.getElementById("mudarNomeBtn").addEventListener("click", mudarNome);
  document.getElementById("trocarUsuarioBtn").addEventListener("click", trocarUsuario);
}

function mostrarTelaQuiz() {
  loginSection.style.display = "none";
  categorySection.style.display = "none";
  quizSection.style.display = "block";
}

startBtn.addEventListener("click", iniciarCadastro);

function iniciarCadastro() {
  if (nomeInput.value.trim() === "") {
    alert("Digite um nome válido!");
    return;
  }
  nomeUsuario = nomeInput.value.trim();
  localStorage.setItem("usuarioAtivo", nomeUsuario);
  mostrarMenuCursos();
}

function mudarNome() {
  const novoNome = prompt("Digite o novo nome:");
  if (novoNome && novoNome.trim() !== "") {
    const resultados = JSON.parse(localStorage.getItem("resultadosQuiz") || "{}");
    resultados[novoNome] = resultados[nomeUsuario] || {};
    delete resultados[nomeUsuario];

    nomeUsuario = novoNome.trim();
    localStorage.setItem("usuarioAtivo", nomeUsuario);
    localStorage.setItem("resultadosQuiz", JSON.stringify(resultados));

    alert("Nome alterado com sucesso!");
    mostrarMenuCursos();
  }
}

function trocarUsuario() {
  localStorage.removeItem("usuarioAtivo");
  mostrarLogin();
}

document.querySelectorAll(".category-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    cursoAtual = btn.dataset.category;
    iniciarQuiz();
  });
});

nextBtn.addEventListener("click", () => {
  indice++; 
  mostrarPergunta(); 
});

function iniciarQuiz() {
  perguntasAtuais = [...quizzes[cursoAtual]].sort(() => Math.random() - 0.5);
  indice = 0;
  pontuacao = 0;
  mostrarTelaQuiz();
  mostrarPergunta();
}

function mostrarPergunta() {
  if (indice >= perguntasAtuais.length) {
    finalizarQuiz();
    return;
  }

  const atual = perguntasAtuais[indice];

  quizTitle.textContent = `🚀 Start no Futuro — ${cursoAtual.toUpperCase()}`;
  studentInfo.textContent = `Jogador: ${nomeUsuario}`;
  questionText.textContent = atual.q;
  
  answersDiv.innerHTML = "";
  nextBtn.style.display = "none"; 

  atual.a.forEach((alt, i) => {
    const btn = document.createElement("button");
    btn.textContent = alt;
    btn.className = "answer-btn";
    btn.onclick = () => verificarResposta(i, btn);
    answersDiv.appendChild(btn);
  });
}

function verificarResposta(i, btnClicado) {
  const atual = perguntasAtuais[indice];
  const botoes = document.querySelectorAll(".answer-btn");

  botoes.forEach(btn => (btn.disabled = true)); 

  if (i === atual.c) {
    pontuacao++;
    btnClicado.classList.add("correct");
  } else {
    btnClicado.classList.add("incorrect");
    
    botoes[atual.c].classList.add("correct");
  }

  nextBtn.style.display = "block"; 
}

function finalizarQuiz() {
  const resultados = JSON.parse(localStorage.getItem("resultadosQuiz") || "{}");
  resultados[nomeUsuario] = resultados[nomeUsuario] || {};
  
  const pontuacaoAntiga = resultados[nomeUsuario][cursoAtual] || 0;
  if (pontuacao > pontuacaoAntiga) {
      resultados[nomeUsuario][cursoAtual] = pontuacao;
  }
  
  localStorage.setItem("resultadosQuiz", JSON.stringify(resultados));

  alert(`${nomeUsuario}, você terminou o quiz de ${cursoAtual.toUpperCase()} com ${pontuacao} pontos!`);
  mostrarMenuCursos(); 
}