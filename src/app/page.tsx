import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-primary to-secondary flex flex-col justify-between items-center p-4 text-black">
      <main className="">
        <header>
          <h1 className="text-4xl font-semibold mb-10">Saúde e Bem Estar</h1>
        </header>
        <div className="max-w-2xl mx-auto">
          <section className="shadow-md shadow-inner flex justify-between items-center mb-8 bg-white flex-grow p-4 rounded">
            <div className="flex-1 text-left">
              <h2 className="text-2xl font-semibold mb-2">O que é Saúde e Bem-estar?</h2>
              <p>
                Saúde e bem-estar são fundamentais para a qualidade de vida. Eles envolvem não apenas a ausência de doenças, mas também o equilíbrio entre corpo, mente e emoções. Cuidar da saúde é investir em hábitos que promovem longevidade, disposição e felicidade.
              </p>
              <p>
                O bem-estar é um estado de saúde física, mental e social, e não apenas a ausência de doenças. Estar saudável significa ter energia, sentir-se bem consigo mesmo e poder realizar suas atividades diárias com entusiasmo.
              </p>
              <p>
                Praticar exercícios físicos regularmente, ter uma alimentação balanceada e manter um sono de qualidade são pilares essenciais para alcançar um bom estado de saúde.
              </p>
            </div>
            <div className="flex-none ml-4">
              <Image
                className="dark"
                src="/saude.png"
                alt="Logo Saúde e Bem-estar"
                width={180}
                height={38}
              />
            </div>
          </section>

          <section className=" shadow-md shadow-inner flex justify-between items-center mb-8 bg-white flex-grow p-4 rounded">
            <div className="flex-1 text-left">
              <h2 className="text-2xl font-semibold mb-2">Benefícios de Priorizar a Saúde e Bem-estar</h2>
              <ul className="list-disc list-inside mb-4">
                <li>Aumento da energia e disposição diária.</li>
                <li>Melhoria da saúde mental e emocional.</li>
                <li>Prevenção de doenças e condições crônicas.</li>
                <li>Redução do estresse e da ansiedade.</li>
                <li>Fortalecimento do sistema imunológico.</li>
              </ul>
              <p>
                Priorizar a saúde pode resultar em uma melhor qualidade de vida. Ao focar no bem-estar, as pessoas tendem a ser mais felizes, produtivas e resistentes a doenças.
              </p>
            </div>
            <div className="flex-none ml-4">
              <Image
                className="dark"
                src="/exercicio.png"
                alt="Atividades Físicas"
                width={180}
                height={38}
              />
            </div>
          </section>

          <section className=" shadow-md shadow-inner flex justify-between items-center mb-8 bg-white flex-grow p-4 rounded">
            <div className="flex-1 text-left">
              <h2 className="text-2xl font-semibold mb-2">Dicas para Manter o Bem-estar</h2>
              <p>
                Para manter a saúde em dia e garantir o bem-estar, é importante adotar hábitos simples no dia a dia:
              </p>
              <ul className="list-disc list-inside">
                <li><strong>Alimentação balanceada:</strong> Invista em uma dieta rica em nutrientes e evite alimentos processados.</li>
                <li><strong>Exercícios físicos regulares:</strong> Pratique atividades que ajudem a manter o corpo em movimento, como caminhada, yoga ou musculação.</li>
                <li><strong>Descanso adequado:</strong> Durma bem e tenha momentos de lazer para recarregar as energias.</li>
                <li><strong>Cuide da saúde mental:</strong> Medite, pratique atividades relaxantes e mantenha relações sociais saudáveis.</li>
              </ul>
            </div>
            <div className="flex-none ml-4">
              <Image
                className="dark"
                src="/prancheta.png"
                alt="Bem Estar"
                width={180}
                height={38}
              />
            </div>
          </section>
        </div>
      </main>
      <footer className=""> {/* Classe de gradiente adicionada aqui */}
        <p>Cuide de si e invista no seu bem-estar! Pequenas mudanças podem fazer uma grande diferença na sua saúde.</p>
      </footer>
    </div>
  );
}
