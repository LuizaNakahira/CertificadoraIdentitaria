import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold">Nova Oficina</h2>

      <input
        type="file"
        name="imagem"
        accept="image/*"
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={form.nome}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />

      <input
        type="text"
        name="area"
        placeholder="Tecnologia, Social, Ensino,..."
        value={form.area}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />

      <input
        type="date"
        name="data"
        value={form.data}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />

      <textarea
        name="descricao"
        maxLength={342}
        placeholder="Descrição (até 342 caracteres)"
        value={form.descricao}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />

      <input
        type="text"
        name="local"
        placeholder="Local"
        value={form.local}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Salvar Oficina
      </button>
    </form>
  );
}
