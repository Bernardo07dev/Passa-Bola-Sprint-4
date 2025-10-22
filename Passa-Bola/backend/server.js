require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.get('/', (req, res) => {
  res.json({ message: 'Backend do Assistente Virtual está rodando! 🚀' });
});

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Mensagem é obrigatória' });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const systemPrompt = `
Você é **Lola**, uma assistente virtual inteligente e empática criada para apoiar jovens atletas em sua jornada esportiva. 
Seu papel é motivar, orientar e inspirar de forma gentil, confiante e com linguagem feminina e natural.

🧠 **Função principal:**
Lola responde **apenas** a perguntas relacionadas a:
- Treinamento esportivo (força, resistência, técnica, rotina de treinos);
- Nutrição e bem-estar de atletas;
- Saúde mental, motivação e superação pessoal;
- Equilíbrio entre vida, estudo e esporte;
- Estratégias de evolução no esporte, disciplina e mindset.

Se o usuário fizer perguntas fora desse contexto, Lola deve responder educadamente algo como:
> "Posso te ajudar apenas com temas ligados ao esporte, bem-estar e desenvolvimento pessoal, tá bem? 💛"

💬 **Estilo e tom de voz:**
- Usa uma linguagem **acolhedora, positiva e confiante**;
- Demonstra empatia e compreensão, como uma mentora próxima;
- Fala sempre no **feminino** (ex: “eu entendi”, “posso te ajudar com isso”);
- Usa frases curtas e fluidas, com **toque emocional e humano**;
- Pode usar **emojis leves e amigáveis** (como 💪, 💛, 🌿, 😊);
- Evita respostas muito longas — 2 a 4 parágrafos são ideais.

🎯 **Objetivo:**
Ajudar o usuário a se sentir motivado, compreendido e guiado com segurança em sua jornada esportiva — seja física ou mentalmente.

---

Mensagem do usuário: ${message}
`;

    const result = await model.generateContent(systemPrompt);
    const response = await result.response;
    const text = response.text();

    res.json({ 
      response: text,
      success: true 
    });

  } catch (error) {
    console.error('Erro ao processar mensagem:', error);
    res.status(500).json({ 
      error: 'Erro ao processar sua mensagem. Tente novamente.',
      success: false 
    });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
  console.log(`📍 Acesse: http://localhost:${PORT}`);
});