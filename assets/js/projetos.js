$(document).ready(function () {
    async function obterArquivosDaPasta() {
        try {
            // Usando fetch API para ler diretório
            const response = await fetch('../../projetos/');
            const diretorio = await response.text();

            // Extrair nomes dos arquivos usando regex
            const arquivos = [...diretorio.matchAll(/href="([^"]*\.html)"/g)]
                .map(match => match[1]);

            return arquivos;
        } catch (erro) {
            console.error('Erro ao obter lista de arquivos:', erro);
            return [];
        }
    }

    async function carregarProjetos() {
        const arquivos = await obterArquivosDaPasta();

        if (!arquivos || !arquivos.length) {
            console.warn('Nenhum arquivo encontrado na pasta projetos');
            return;
        }

        for (const arquivo of arquivos) {
            try {
                const resposta = await fetch(`${arquivo}`);
                const conteudo = await resposta.text();

                $("#posts").append(conteudo);
            } catch (erro) {
                console.error(`Erro ao carregar ${arquivo}:`, erro);
            }
        }
    }

    carregarProjetos();
});