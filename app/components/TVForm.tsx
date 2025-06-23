import React, { useState } from 'react';
import { addTV } from '../utils/api';

type Props = { onAdded: () => void };

const TVForm: React.FC<Props> = ({ onAdded }) => {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [canais, setCanais] = useState<number>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!marca || !modelo || canais <= 0) return;
    await addTV({ marca, modelo, canais });
    setMarca(''); setModelo(''); setCanais(0);
    onAdded();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        value={marca}
        onChange={e => setMarca(e.target.value)}
        placeholder="Marca"
        className="input"
      />
      <input
        value={modelo}
        onChange={e => setModelo(e.target.value)}
        placeholder="Modelo"
        className="input"
      />
      <input
        type="number"
        value={canais}
        onChange={e => setCanais(parseInt(e.target.value, 10))}
        placeholder="Quantidade de canais"
        className="input"
      />
      <button type="submit" className="btn btn-primary">
        Adicionar Televisão
      </button>
    </form>
  );
};

export default TVForm;
