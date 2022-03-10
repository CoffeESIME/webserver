import { useState, useEffect } from "react";
import { getArduardoLastData } from "../../services/user.service";

export const LastDataArduardo = () => {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await getArduardoLastData();
      setDatos(response.data);
    };
    getData();
  }, [setDatos]);

  return (
    <>
      <p>Aqui veremos los datos si es que estamos autentificados</p>
      {datos.map((dato, i) => (
        <p>{dato.grd_id}</p>
      ))}
    </>
  );
};
