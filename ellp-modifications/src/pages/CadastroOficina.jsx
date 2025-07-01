import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CadastroOficina.module.css';

export default function CadastroOficina() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    imagem: null,
    nome: '',
    area: '',
    data: '',
    descricao: '',
    local: '',
  });

  function handleChange(e) {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  }

function handleSubmit(e) {
  e.preventDefault();

  const novaOficina = {
    ...form,
    area: form.area,
    id: Date.now(), // ID único simples
    imagem: URL.createObjectURL(form.imagem), // Exibir a imagem depois
  };

  // Carrega eventos anteriores do localStorage
  const eventosSalvos = JSON.parse(localStorage.getItem('eventos')) || [];

  // Salva o novo evento
  localStorage.setItem('eventos', JSON.stringify([...eventosSalvos, novaOficina]));

  // Vai para a página de eventos
  navigate('/');
}

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h2>Nova Oficina</h2>

  <div className={styles.formGroup}>
    <label>Imagem</label>
    <input
      type="file"
      name="imagem"
      accept="image/*"
      onChange={handleChange}
      required
    />
  </div>

  <div className={styles.formGroup}>
    <label>Nome</label>
    <input
      type="text"
      name="nome"
      placeholder="Nome"
      value={form.nome}
      onChange={handleChange}
      required
    />
  </div>

  <div className={styles.formGroup}>
    <label>Área</label>
    <input
      type="text"
      name="area"
      placeholder="Tecnologia, Social, Ensino,..."
      value={form.area}
      onChange={handleChange}
      required
    />
  </div>

  <div className={styles.formGroup}>
    <label>Data</label>
    <input
      type="date"
      name="data"
      value={form.data}
      onChange={handleChange}
      required
    />
  </div>

  <div className={styles.formGroup}>
    <label>Descrição</label>
    <textarea
      name="descricao"
      maxLength={342}
      placeholder="Descrição (até 342 caracteres)"
      value={form.descricao}
      onChange={handleChange}
      required
    />
  </div>

  <div className={styles.formGroup}>
    <label>Local</label>
    <input
      type="text"
      name="local"
      placeholder="Local"
      value={form.local}
      onChange={handleChange}
      required
    />
  </div>

  <div className="flex justify-end space-x-2">
  <button
    type="button"
    onClick={() => navigate('/')}
    className="bg-gray-400 text-white px-4 py-2 rounded"
  >
    Voltar
  </button>
</div>

  <button type="submit">Salvar Oficina</button>
    </form>
  );
}
