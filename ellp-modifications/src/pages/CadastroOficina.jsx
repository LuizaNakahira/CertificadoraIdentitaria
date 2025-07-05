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
    participantes: '',
    coffee: false,
    gratuito: false,
  });

  function handleChange(e) {
    const { name, value, files, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : files ? files[0] : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const novaOficina = {
      id: Date.now(),
      titulo: form.nome,
      categoria: form.area,
      data: form.data,
      descricao: form.descricao,
      local: form.local,
      participantes: form.participantes || 'pessoas',
      coffee: form.coffee || false,
      gratuito: form.gratuito || false,
      imagem: form.imagem ? URL.createObjectURL(form.imagem) : '',
    };

    const eventosSalvos = JSON.parse(localStorage.getItem('eventos')) || [];
    localStorage.setItem('eventos', JSON.stringify([...eventosSalvos, novaOficina]));

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
        <label>Tema</label>
        <input
          type="text"
          name="nome"
          placeholder="Tema da Oficina"
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
          placeholder="Tecnologia, Social, Ensino..."
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
          placeholder="Local do evento"
          value={form.local}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label>Participantes</label>
        <input
          type="number"
          name="participantes"
          placeholder="Número de pessoas"
          value={form.participantes}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label>
          <input
            type="checkbox"
            name="coffee"
            checked={form.coffee}
            onChange={handleChange}
          />
          Coffee Break?
        </label>
      </div>

      <div className={styles.formGroup}>
        <label>
          <input
            type="checkbox"
            name="gratuito"
            checked={form.gratuito}
            onChange={handleChange}
          />
          Gratuito?
        </label>
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

      <button type="submit" className="bg-black text-white px-6 py-2 rounded mt-4 hover:bg-yellow-500 transition">
        Salvar Oficina
      </button>
    </form>
  );
}
