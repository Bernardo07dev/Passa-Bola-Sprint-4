Para ver a documentação completa da API, clique [aqui](README_API_ENDPOINTS.md).

# 🏀 Passa Bola - Sprint 4

O **Passa Bola** é uma plataforma desenvolvida para conectar **treinadoras e jogadoras**, facilitando a descoberta de talentos e o gerenciamento de perfis esportivos.
Nesta **Sprint 4**, o foco foi aprimorar a **experiência da atleta**, implementando a página **AtletaHome** e integrando **Inteligência Artificial Generativa** para análise e suporte ao conteúdo exibido.

---

## 🚀 Visão Geral

A página **AtletaHome** foi desenvolvida para proporcionar uma visão personalizada ao perfil da jogadora, exibindo dados, oportunidades, estatísticas e sugestões inteligentes.
A integração com **GenAI (Groq + LLaMA)** permite a análise automatizada de informações esportivas e a geração de insights relevantes para o usuário.

---

## ✨ Funcionalidades

* 🧍‍♀️ **Perfil da Atleta** – informações personalizadas e interface otimizada
* 💬 **Sugestões via IA** – recomendações e insights gerados por modelo LLaMA com Groq
* 🔔 **Notificações e atualizações esportivas**
* 🔎 **Busca de oportunidades** e interação com treinadoras
* 📱 **Design responsivo e moderno**, com foco em experiência do usuário
* ⚡ **Performance otimizada** usando componentes reutilizáveis e Tailwind CSS

---

## 🧠 Integração GenAI (Groq + LLaMA)

A plataforma utiliza **Groq API** integrada ao modelo **LLaMA 3** para oferecer recomendações inteligentes e geração de conteúdo contextualizado, auxiliando atletas e treinadoras na análise de oportunidades e desempenho.

---

## 🛠️ Tecnologias Utilizadas

| Categoria              | Tecnologias        |
| ---------------------- | ------------------ |
| **Front-end**          | React.js           |
| **Back-end**           | Express            |
| **Estilização**        | Tailwind CSS       |
| **IA Generativa**      | Groq API + LLaMA 3 |
| **Controle de versão** | Git + GitHub       |
| **Deploy**             | Vercel             |

---

## 💻 Como Executar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/Bernardo07dev/Passa-Bola-Sprint-4.git
   ```
2. Acesse o diretório do projeto:

   ```bash
   cd Passa-Bola-Sprint-4
   ```
3. Instale as dependências:

   ```bash
   npm install
   ```
4. Crie um arquivo `.env` na raiz do projeto e adicione sua chave da API do Groq:

   ```env
   VITE_GROQ_API_KEY=sua_chave_aqui
   ```
5. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```
6. Acesse no navegador:

   ```
   http://localhost:5173
   ```

---

## 🌐 Deploy

O projeto está hospedado na Vercel e pode ser acessado em:
👉 **[https://passa-bola-sprint-4.vercel.app/AtletaHome](https://passa-bola-sprint-4.vercel.app/AtletaHome)**

---

## 👥 Integrantes do Grupo

| Nome                              | RM     |
| --------------------------------- | ------ |
| **Bruna Sadi Duarte**             | 561870 |
| **Bernardo Moreira**              | 564103 |
| **Francisco Nogueira de Queiroz** | 566309 |
| **Sara Maragon**                  | 563807 |
| **Rhariel**                       | 566310 |

---

## 📄 Licença

Projeto desenvolvido para fins educacionais – **Sprint 4 | FIAP**.
© 2025 – Todos os direitos reservados ao grupo.

