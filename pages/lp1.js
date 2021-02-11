import Header from "../components/Homepage/header";

const Lp1 = () => {
  return (
    <>
      <Header />
      <div className="px-5 text-center md:px-24 md:max-w-6xl md:mx-auto py-3">
        <h1 className="text-3xl font-semibold mb-2 text-blue-700">
          Quer receber mais leads e vender mais?
        </h1>
        <p className="text-lg my-4 md:my-6 text-gray-800 md:px-48">
          Você está no lugar certo! Descubra como nós podemos te ajudar a
          receber mais leads e vender vários imóveis todas as semanas!
        </p>
        <p className="text-lg my-4 md:my-6 text-gray-800 md:px-48">
          Nós já ajudamos inúmeros corretores que estavam cansados de não
          venderem e estavam preparados para finalmente começar a ganhar
          dinheiro de verdade!
        </p>
        <img
          className="my-4 w-full md:w-6/12 lg:w-4/12 mx-auto"
          src="depoimento1.jpg"
          alt="Depoimento de corretora"
        />
        <p className="text-lg my-6">
          Para saber mais informações clique no botão abaixo:
        </p>
        <a
          className="bg-blue-600 text-gray-200 px-5 py-3 text-xl rounded block mx-auto text-center md:w-4/12"
          href="https://api.whatsapp.com/send/?phone=5514998006024&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20a%20gest%C3%A3o%20de%20tr%C3%A1fego"
        >
          <button>Entre em contato no WhatsApp</button>
        </a>
      </div>
    </>
  );
};

export default Lp1;
