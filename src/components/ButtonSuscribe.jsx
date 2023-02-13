import { useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ButtonSuscribe = () => {
  const [suscribe, setSuscribe] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setSuscribe(!suscribe);
          !suscribe && toast.success('Felicidades ya estas suscrito')
        }}
      >
        {suscribe ? "ya estas suscrito" : "suscribete"}
      </button>
      <ToastContainer/>
    </div>
  );
};

export default ButtonSuscribe;
