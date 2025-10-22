import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import StructurePages from "../../components/StructurePages";
import Footer from "../../components/footer";

const LolaAi = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!input.trim()) return;

    // Adiciona mensagem do usuário
    setMessages([...messages, { role: 'user', content: input }]);
    setInput('');
    setLoading(true);

    try {
      // Chama o backend
      const response = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });

      const data = await response.json();
      
      // Adiciona resposta da Lola
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
    } catch (error) {
      console.error('Erro:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StructurePages>
      {/* Seu header aqui */}
      
      <main className="px-10">
        {/* Lista de mensagens */}
        {messages.map((msg, idx) => (
          <div key={idx}>
            <p>{msg.content}</p>
          </div>
        ))}

        {/* Input */}
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite..."
        />
        <button onClick={handleSubmit}>Enviar</button>
      </main>

      <Footer estado="lola" />
    </StructurePages>
  );
};

export default LolaAi;