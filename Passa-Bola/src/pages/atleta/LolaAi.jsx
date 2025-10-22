import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('SUA_API_KEY_AQUI');
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

const callGeminiAPI = async (userMessage) => {
  const prompt = `Você é um assistente virtual empático e motivador para jovens atletas. 
  Responda de forma curta, positiva e encorajadora sobre: treinamento, motivação, nutrição, 
  saúde mental e desenvolvimento esportivo. Mensagem do usuário: ${userMessage}`;
  
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
};