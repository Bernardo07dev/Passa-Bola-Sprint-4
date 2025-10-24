import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import StructurePages from "../../components/StructurePages";
import Footer from "../../components/footer";

const API_URL = 'https://passa-bola-sprint-4.onrender.com';

const LolaAi = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Olá! 👋 Sou a Lola, sua assistente virtual. Estou aqui para te apoiar em sua jornada esportiva! Como posso te ajudar hoje?'
    }
  ]);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setMessages(prev => [...prev, { role: 'assistant', content: '' }]);
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
      });

      const data = await response.json();
      
      setMessages(prev => [...prev.slice(0, -1), { role: 'assistant', content: data.response }]);
    } catch (error) {
      console.error('Erro:', error);
      setMessages(prev => [...prev.slice(0, -1)]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StructurePages>
      <header className='text-center pb-4 sticky top-0 bg-[#11141800] z-10'>
        <h1 className='text-4xl font-bold bg-gradient-to-r from-[#FFF] via-[#346de9] to-[#2563EB] bg-clip-text text-transparent'>Lola Ai</h1>
        <p className='text-sm font-light text-gray-300 mt-2'>Pergunta e Converse com a Lola</p>
      </header>
      
      <main className="flex flex-col px-10 text-white w-full max-w-[500px] h-[calc(100vh-300px)] overflow-y-auto scrollbar-hide">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`my-2 p-4 rounded-lg max-w-[80%] ${
                msg.role === 'user'
                  ? 'bg-blue-600 text-white self-end rounded-br-none'
                  : 'bg-[#303030] text-gray-200 self-start rounded-bl-none'
              }`}
            >
              <p className="text-sm leading-relaxed">{msg.content || '...'}</p>
            </div>
          ))}
          <div ref={chatEndRef} />
      </main>

      <div className='mt-12 w-full max-w-[420px] flex flex-row justify-center gap-2 fixed bottom-[100px] left-1/2 -translate-x-1/2 px-4'>
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          onKeyDown={(e) => {if (e.key === "Enter") {handleSubmit();}}} 
          className='w-[80%] px-4 text-sm bg-[#303030] rounded-full focus:outline-none' 
          placeholder="Pergunte para Lola..."
        />
        <button 
          className='w-[13%] align-middle bg-gradient-to-r from-[#7685fa] via-[#346de9] to-[#2563EB] py-4 rounded-full' 
          onClick={handleSubmit}
        >
          <FontAwesomeIcon icon={faArrowRight} className="text-xl text-white text-center align-middle"></FontAwesomeIcon>
        </button>
      </div>

      <Footer estado="lola"></Footer>
    </StructurePages>
  );
};

export default LolaAi;