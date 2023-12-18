document.addEventListener("DOMContentLoaded", function () {
    const chatbotWindow = document.getElementById("chatbot-window");
    const chatbotBody = document.getElementById("chatbot-body");
    const userInputElement = document.getElementById("user-input");

    function toggleChatbotWindow() {
        chatbotWindow.style.display = chatbotWindow.style.display === "none" ? "block" : "none";
    }

    function addUserMessage(message) {
        const userMessage = document.createElement("div");
        userMessage.classList.add("user-message");
        userMessage.textContent = message;
        chatbotBody.appendChild(userMessage);
    }

    function addBotMessage(message) {
        const botMessage = document.createElement("div");
        botMessage.classList.add("bot-message");
        botMessage.textContent = message;
        chatbotBody.appendChild(botMessage);
    }

    function respondToUser(userMessage) {
        addUserMessage(userMessage);

        // Lógica para gerar resposta do bot (aqui você pode adicionar mais lógica)
        let botResponse = "Desculpe, não entendi. Como posso ajudar?";
        if (userMessage.toLowerCase().includes("contabilidade")) {
            botResponse = "Oferecemos serviços contábeis abrangentes. Como posso ajudar?";
        }

        addBotMessage(botResponse);
    }

    document.getElementById("chatbot-icon").addEventListener("click", toggleChatbotWindow);

    userInputElement.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const userMessage = userInputElement.value;
            respondToUser(userMessage);
            userInputElement.value = "";
        }
    });
});
/* respostas  para serviços*/
 document.addEventListener("DOMContentLoaded", function () {
    const chatbotWindow = document.getElementById("chatbot-window");
    const chatbotBody = document.getElementById("chatbot-body");
    const userInputElement = document.getElementById("user-input");

    function toggleChatbotWindow() {
        chatbotWindow.style.display = chatbotWindow.style.display === "none" ? "block" : "none";
    }

    function addUserMessage(message) {
        const userMessage = document.createElement("div");
        userMessage.classList.add("user-message");
        userMessage.textContent = message;
        chatbotBody.appendChild(userMessage);
    }

    function addBotMessage(message) {
        const botMessage = document.createElement("div");
        botMessage.classList.add("bot-message");
        botMessage.textContent = message;
        chatbotBody.appendChild(botMessage);
    }

    function respondToUser(userMessage) {
        addUserMessage(userMessage);

        let botResponse = "Desculpe, não entendi. Como posso ajudar?";

        // Associe respostas a serviços específicos
        if (userMessage.toLowerCase().includes("admissões e demissões de funcionários")) {
            botResponse = "Oferecemos serviços relacionados a admissões e demissões de funcionários. Podemos ajudar na preparação de documentos e cálculos necessários.";
        } else if (userMessage.toLowerCase().includes("entrega de obrigações acessórias")) {
            botResponse = "Nossos serviços incluem a entrega de obrigações acessórias, como declarações fiscais e sociais. Garantimos conformidade com as exigências legais.";
        }
        // Adicione mais casos para os outros serviços

        addBotMessage(botResponse);
    }

    document.getElementById("chatbot-icon").addEventListener("click", toggleChatbotWindow);

    userInputElement.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const userMessage = userInputElement.value;
            respondToUser(userMessage);
            userInputElement.value = "";
        }
    });
});
