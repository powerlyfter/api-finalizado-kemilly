const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/residencias/residencias-dados-globais.json' ;

async function visualizarInformacoesGlobais() {
const res = await fetch(url);
const dados = await res.json();

const pessoascasaprópria = dados.total_pessoas_com_casa_propria / 1e9 ;
const pessoasNoMundo = dados.total_pessoas_mundo / 1e9;

const tempoEmCasa = dados.tempo_medio_em_casa ; 
const horas = Math.floor(tempoEmCasa); 
const minutos = Math.round((tempoEmCasa - horas) * 60); 
const porcentagemCasaPropria = ((pessoascasaprópria / pessoasNoMundo) *
100).toFixed(2);

const paragrafo = document.createElement('p');
paragrafo.classList.add('graficos-container__texto');
paragrafo.innerHTML = `Você sabia que o mundo tem aproximadamente
<span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente
<span>${pessoascasaprópria} bilhões</span> possuem casa própria?<br>Além disso, as
pessoas passam em média <span>${horas} horas</span> e <span>${minutos} minutos</span>
em casa por dia.<br>Isso significa que aproximadamente
<span>${porcentagemCasaPropria}%</span> da população mundial possui casa própria.`;

const container = document.getElementById('graficos-container');
container.appendChild(paragrafo);
}

visualizarInformacoesGlobais();