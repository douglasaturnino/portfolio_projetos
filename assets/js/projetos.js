$(document).ready(function () {
    // Array com os nomes dos arquivos dos projetos
    var projetos = [
        "testeA-B.html",
        "predicao-dificuldades-financeiras-nos-proximos-dois-anos.html",
        "interpretacao-de-modelos-de-machine-learning-usando-shap.html",
        "previsao-de-vendas-de-lojas-dos-proximos-6-semanas.html",
        "maximizacao-de-lucro-de-imobiliaria-na-compra-e-revenda-de-imoveis.html",
        "venda-cruzada-de-seguro-de-automoveis-com-python.html",
        "venda-cruzada-de-seguro-de-automoveis-com-r.html",
        "desenvolvimento-de-um-painel-gerencial-para-negocio-com-o-streamlit.html",
        "previsao-de-trajetoria-de-taxi.html",
        "ensaios-machine-de-learning.html",
        "etl-para-monitoramento-de-precos.html",
        "criacao-de-um-data-warehouse-e-carga-de-dados.html",
        "extracao-de-dados-de-artistas.html",
        "elasticidade-preco.html",
        "automacao-de-processos-com-ETL.html",
        "monitoramento-de-preco-com-web-scraping-e-notificacoes-no-telegram.html",
        "fome-zero.html"
    ];

    // Função para carregar os projetos
    function carregarProjetos() {
        $.each(projetos, function (index, projeto) {
            $.ajax({
                url: 'projetos/' + projeto,
                cache: false,
                success: function (html) {
                    $("#posts").append(html);
                }
            });
        });
    }

    // Chamar a função para carregar os projetos ao carregar a página
    carregarProjetos();
});