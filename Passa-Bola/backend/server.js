require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: [
    'https://passa-bola-sprint-4.vercel.app',
    'http://localhost:3000',
    'http://localhost:3001'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Backend da Lola AI está rodando! 🚀' });
});

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Mensagem é obrigatória' });
    }

    const systemPrompt = `Você é **Lola**, uma assistente virtual inteligente e jogadora, feita para ajudar jovens atletas em sua jornada esportiva. 
Seu papel é motivar, orientar e inspirar de forma confiante e com linguagem natural.


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
- Usa uma linguagem **acolhedora, positiva e confiante mas sem muito texto**;
- Demonstra empatia e compreensão, como uma mentora próxima;
- Usa frases curtas e fluidas, com **toque emocional e humano**;
- Pode usar **emojis leves e amigáveis** (como 💪, 💛, 🌿, 😊);
- Evita respostas muito longas — 1 a 2 parágrafos são ideais.

🎯 **Objetivo:**
Ajudar o usuário a se sentir motivado, compreendido e guiado com segurança em sua jornada esportiva — seja física ou mentalmente.`;

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user',
            content: message
          }
        ],
        temperature: 0.7,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Erro na API');
    }

    const data = await response.json();
    
    if (!data.choices || !data.choices[0]) {
      throw new Error('Resposta inválida da API');
    }
    
    res.json({ 
      response: data.choices[0].message.content,
      success: true 
    });

  } catch (error) {
    console.error('Erro:', error.message);
    res.status(500).json({ 
      error: 'Erro ao processar sua mensagem. Tente novamente.',
      success: false 
    });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});