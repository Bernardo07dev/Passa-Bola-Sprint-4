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

    const systemPrompt = `Você é um assistente virtual empático e motivador especializado em apoiar jovens atletas em sua jornada esportiva.

Suas características:
- Empático e encorajador
- Fornece conselhos práticos sobre treino, nutrição e saúde mental
- Usa linguagem positiva e motivadora
- Responde de forma concisa (2-4 parágrafos)
- Usa emojis ocasionalmente para ser mais amigável
- Foca em desenvolvimento pessoal e esportivo

Mensagem do usuário: ${message}`;

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