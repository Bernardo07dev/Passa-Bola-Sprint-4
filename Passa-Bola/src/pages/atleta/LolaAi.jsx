import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import StructurePages from "../../components/StructurePages";
import Footer from "../../components/footer";

const LolaAi = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Scroll to the bottom of the chat on new messages
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Fetch the initial greeting from Lola
  useEffect(() => {
    const getInitialMessage = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:3001/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: 'initial', history: [] }),
        });
        const data = await response.json();
        if (data.success) {
          setMessages([{ role: 'model', content: data.response }]);
        }
      } catch (error) {
        console.error('Erro ao buscar mensagem inicial:', error);
        setMessages([{ role: 'model', content: 'Olá! Não consegui me conectar. Tente recarregar a página. 😕' }]);
      } finally {
        setLoading(false);
      }
    };
    getInitialMessage();
  }, []);

  const handleSubmit = async () => {
    if (!input.trim()) return;

    const currentInput = input;
    const userMessage = { role: 'user', content: currentInput };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);

    setInput('');
    setLoading(true);

    // The history sent to the API should be the conversation that has already occurred.
    const historyForApi = messages.map(msg => ({ role: msg.role, parts: [{ text: msg.content }] }));

    try {
      const response = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: currentInput, history: historyForApi })
      });

      const data = await response.json();
      
      setMessages(prev => [...prev, { role: 'model', content: data.response }]);
    } catch (error) {
      console.error('Erro:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StructurePages>
      <header className='text-center pt-12 pb-12 sticky top-0 bg-[#111418] z-10'>
        <h1 className='text-4xl font-bold bg-gradient-to-r from-[#FFF] via-[#346de9] to-[#2563EB] bg-clip-text text-transparent'>Lola Ai</h1>
        <p className='text-sm font-light text-gray-300 mt-2'>Pergunta e Converse com a Lola</p>
      </header>
      
      <main className="flex flex-col px-16 text-white w-full max-w-[500px] mx-auto h-[calc(100vh-300px)] mb-12 overflow-y-auto scrollbar-hide">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`my-2 p-3 rounded-lg max-w-[80%] ${
              msg.role === 'user'
                ? 'bg-blue-600 text-white self-end rounded-br-none'
                : 'bg-[#303030] text-gray-200 self-start rounded-bl-none'
            }`}
          >
            <p className="text-sm leading-relaxed">{msg.content}</p>
          </div>
        ))}
        <div ref={chatEndRef} />

        <div className='w-[420px] flex flex-row justify-center gap-2 fixed bottom-[100px] left-[555px]'>
          <input 
            value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => {if (e.key === "Enter") {handleSubmit();}}} className='w-[80%] px-4 text-sm bg-[#303030] rounded-full focus:outline-none' placeholder="Pergunte para Lola..."/>
          <button className='w-[13%] align-middle bg-gradient-to-r from-[#7685fa] via-[#346de9] to-[#2563EB] py-4 rounded-full' onClick={handleSubmit}>
            <FontAwesomeIcon icon={faArrowRight} className="text-xl text-white text-center align-middle"></FontAwesomeIcon>
          </button>
        </div>
      </main>

      <Footer estado="lola" />
    </StructurePages>
  );
};

export default LolaAi;