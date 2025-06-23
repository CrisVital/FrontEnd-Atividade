import React from 'react';
import { deleteTV } from '../utils/api';

type TV = { _id: string; marca: string; modelo: string; canais: number };

type Props = {
  tvs: TV[];
  onDeleted: () => void;
};

const TVList: React.FC<Props> = ({ tvs, onDeleted }) => (
  <table className="table-auto w-full bg-white">
    <thead>
      <tr>
        <th className="px-4 py-2">Marca</th>
        <th className="px-4 py-2">Modelo</th>
        <th className="px-4 py-2">Canais</th>
        <th className="px-4 py-2">Ações</th>
      </tr>
    </thead>
    <tbody>
      {tvs.map(tv => (
        <tr key={tv._id}>
          <td className="border px-4 py-2">{tv.marca}</td>
          <td className="border px-4 py-2">{tv.modelo}</td>
          <td className="border px-4 py-2">{tv.canais}</td>
          <td className="border px-4 py-2">
            <button
              className="btn btn-danger"
              onClick={async () => {
                await deleteTV(tv._id);
                onDeleted();
              }}
            >
              Excluir
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TVList;
