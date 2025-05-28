import { useParams, Link } from 'react-router-dom';
import { MdLocationOn, MdDateRange, MdPeople, MdLocalCafe, MdAttachMoney } from 'react-icons/md';
import styles from './Eventos_Especificos.module.css';

const eventos = [
  {
    id: 1,
    titulo: "Trabalho",
    descricao: "Pessoas trabalhando em equipe, compartilhando ideias e produtividade no ambiente profissional.",
    imagem: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoria: "Work",
    data: "12/03/2025",
    local: "São Paulo - SP",
    participantes: 50,
    coffee: true,
    gratuito: true,
  },
  {
    id: 2,
    titulo: "Feira de Inovação Tecnológica",
    descricao: "Exposição de novas tecnologias, startups e soluções inovadoras para o mercado.",
    imagem: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    categoria: "Tecnologia",
    data: "15/03/2025",
    local: "Campinas - SP",
    participantes: 100,
    coffee: false,
    gratuito: false,
  },
  {
  id: 3,
    titulo: "Encontro Gastronômico",
    descricao: "Feira de comidas típicas e internacionais para todos os gostos.",
    imagem: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    categoria: "Culinária",
    data: "20/03/2025",
    local: "Curitiba - PR",
    participantes: 75,
    coffee: false,
    gratuito: true,
  },
  {
    id: 4,
    titulo: "Corrida e Saúde",
    descricao: "Evento esportivo com corrida e atividades de bem-estar.",
    imagem: "https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoria: "Esporte",
    data: "25/03/2025",
    local: "Rio de Janeiro - RJ",
    participantes: 120,
    coffee: true,
    gratuito: false,
  },
  {
    id: 5,
    titulo: "Oficina de Arte",
    descricao: "Atividades artísticas e criativas para todas as idades.",
    imagem: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoria: "Cultura",
    data: "30/03/2025",
    local: "Belo Horizonte - MG",
    participantes: 60,
    coffee: false,
    gratuito: true,
  }
];

const Eventos_Especificos = () => {
  const { id } = useParams();
  const evento = eventos.find(e => e.id === parseInt(id));

  if (!evento) {
    return <p>Evento não encontrado.</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.contentBox}>
        <Link to="/Eventos" className={styles.voltar}>← Voltar para eventos</Link>

        <img src={evento.imagem} alt={evento.titulo} className={styles.imagem} />

        <h2 className={styles.titulo}>{evento.titulo}</h2>
        <p className={styles.descricao}>{evento.descricao}</p>

        <div className={styles.detalhes}>
          <p><MdLocationOn className={styles.icone} /> <strong>Local:</strong> {evento.local}</p>
          <p><MdDateRange className={styles.icone} /> <strong>Data:</strong> {evento.data}</p>
          <p><MdPeople className={styles.icone} /> <strong>Participantes esperados:</strong> {evento.participantes}</p>
          <p><MdLocalCafe className={styles.icone} /> <strong>Coffee Break:</strong> {evento.coffee ? 'Sim' : 'Não'}</p>
          <p><MdAttachMoney className={styles.icone} /> <strong>Gratuito:</strong> {evento.gratuito ? 'Sim' : 'Não'}</p>
          <p><strong>Categoria:</strong> {evento.categoria}</p>
        </div>
      </div>
    </div>
  );
};

export default Eventos_Especificos;
