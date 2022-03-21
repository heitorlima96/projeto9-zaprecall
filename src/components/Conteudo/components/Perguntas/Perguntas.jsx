import Pergunta from "./Pergunta";

let perguntas = [
  { Q: "Quem é a irmã da Jinx?", R: "Vi" },
  { Q: "Quem é o Rei Destruído?", R: "Viego" },
  { Q: "Quantas caudas a Ahri possui?", R: "Nove" },
  { Q: "Quem é o marido da Ashe?", R: "Tryndamere" },
  { Q: "Quem é o aspecto do crepúsculo?", R: "Zoe" },
  { Q: "Qual é o nome da ult da Leona?", R: "Labareda Solar" },
  { Q: "Quem é a bruxa gelida?", R: "Lissandra" },
  { Q: "Quem é o rival do Shen?", R: "Zed" }
]

perguntas = perguntas.sort(embaralhador);

function embaralhador() {
  return Math.random() - 0.5;
}

export default function Perguntas({ atualizarContador, atualizarIcones }) {
  return (
    <ul className="perguntas">
      {perguntas.map((pergunta, i) => <Pergunta key={pergunta.Q} pergunta={pergunta} indice={i + 1} atualizarContador={atualizarContador} atualizarIcones={atualizarIcones} />)}
    </ul>
  )
}