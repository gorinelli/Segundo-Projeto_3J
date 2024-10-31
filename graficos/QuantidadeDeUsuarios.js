import { getCSS } from "./comum.js";
import { tickfont } from "./comum.js";

async function quantidadeDeUsuarios(){
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const resultado = await fetch(url);
    const dados = await resultado.json();
    const nomeDasRedes =Object.keys(dados);
    const quantidadeDeUsuarios = Object.values(dados);

    const infos = [
        {
        x: nomeDasRedes,
        y: quantidadeDeUsuarios,
        type: 'bar'
    }
    ]
{

    const layout = {
        plot_bgcolor: getCSS ('--cor-de-fundo'),
        paper_bgcolor: getCSS ('--cor-de-fundo'),
        title: {
            text: 'Redes sociais com mais usuário do mundo',
            x: 0,
            font:{
                color: getCSS('--cor-primaria-'),
                family: getCSS('--fonte'),
                size: 30
            }
        },
          xaxis:{
            tickfont: tickfont,
            title: {
                Text: 'nome das redes sociais',
                font:{
                    color: getCSS ('--cor-segundaria')
                }
            }
        },
         yaxis:{
            tickfont: tickfont,
            title: {
                text: 'Milhões de usuários ativos',
                font: {
                    color:  getCSS('COR-segundaria')
                }
            }
        }
        }

    
    }

      const grafico = document.createElement('div');
      grafico.className = 'grafico';
      document.getElementById('graficos-container').appendChild(grafico);
      Plotly.newPlot(grafico,infos,layout)

}

quantidadeDeUsuarios()