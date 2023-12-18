document.addEventListener("DOMContentLoaded", function () {
    const contadorServicosElement = document.getElementById("contador-servicos");

    const servicos = [
        "Admissões e demissões de funcionários",
        "Entrega de obrigações acessórias",
        "Emissão de guias de tributos e Certidões Negativas de Débitos (CNDs)",
        "Escrituração contábil",
        "Processamento da folha de pagamentos",
        "Abertura e fechamento de empresa",
        "Assessoria para planejamento tributário",
        "Auditoria contábil",
        "Business Valuation",
        "Consultoria financeira empresarial e controle patrimonial",
        "Contabilidade gerencial",
        "Planejamento estratégico"
    ];

    function exibirServicos() {
        let listaServicos = "<ul class='animate__animated animate__fadeIn'>";
        servicos.forEach(function (servico, index) {
            listaServicos += `<li class='animate__animated animate__fadeIn animate__delay-${index + 1}s'>${servico}</li>`;
        });
        listaServicos += "</ul>";
        contadorServicosElement.innerHTML = listaServicos;
    }

    exibirServicos();
});
document.addEventListener("DOMContentLoaded", function () {
    const parallaxElements = document.querySelectorAll('.parallax');

    window.addEventListener('scroll', function () {
        parallaxElements.forEach(function (element) {
            const scrolled = window.scrollY;
            const speed = element.getAttribute('data-speed');
            element.style.backgroundPositionY = -scrolled * speed + 'px';
        });
    });
});
