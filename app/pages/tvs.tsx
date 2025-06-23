import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import TVForm from '../components/TVForm';
import TVList from '../components/TVList';
import { listTVs } from '../utils/api';

type TV = { _id: string; marca: string; modelo: string; canais: number };

const TVsPage: React.FC = () => {
  const [tvs, setTVs] = useState<TV[]>([]);
  const fetchTVs = async () => {
    const list = await listTVs();
    setTVs(list);
  };

  useEffect(() => {
    fetchTVs();
  }, []);

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Gerenciar Televisões</h1>
      <TVForm onAdded={fetchTVs} />
      <hr className="my-6" />
      <TVList tvs={tvs} onDeleted={fetchTVs} />
    </Layout>
  );
};

export default TVsPage;
