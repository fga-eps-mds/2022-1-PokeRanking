# Protocolo de atualização do GitHub Pages + MkDocs + Material for MkDocs

## Histórico de Versão
| Data        |Versão   | Descrição        | Autor                                                          |
|-------------|---------|------------------|----------------------------------------------------------------|
| 24/06/2022  | 1.0     | Abertura do documento  |[Charles M. S. Morais](https://github.com/charles-serafim)|

<br>


## 1. Objetivo

Este protocolo tem como objetivo facilitar a atualização da documentação no GitHub Pages do projeto, assim como estabelecer padrões para que o deploy seja feio de forma mais prática por qualquer membro do time.

<br>


## 2. Padrões

Para facilitar a integração do GitHub Pages com o que é atualizado no repositório, é importante seguir os padrões de commit e nomeações de arquivos, a exemplo do que é feito com a documentação das Sprints:

![Exemplo de organização de arquivos](Imagens\exemplo-arquivos.PNG)

<br>


## 3. Deploy com MkDocs + Material for MkDocs

Para fazer modificações na GitHub Page do projeto, seguir os passos de instalação do MkDocs e do Material for MkDocs, pacote que utilizamos na página. Links:

<br>

- [Guia de instalação - MkDocs](https://www.mkdocs.org/getting-started/)
- [Guia de instalação - Material for MkDocs](https://squidfunk.github.io/mkdocs-material/getting-started/)

<br>

Com os pacotes instalados, agora você pode descer o repositório pra sua máquina, utilizando os comandos `git clone` ou `git pull`, caso queira apenas atualizar as últimas modificações que não estão salvas no diretório local. Seguem abaixo links com alguns comandos git:

<br>

- [Lista de comandos úteis do GIT](https://gist.github.com/leocomelli/2545add34e4fec21ec16)
- [Top 25 comandos do Git - Código Fonte](https://www.codigofonte.com.br/artigos/top-25-comandos-do-git)
- [Comandos Git - Aprenda Git do básico ao avançado](https://comandosgit.github.io/)

<br>

Em seguida, é só entrar no diretório do projeto na sua máquina e fazer as modificações que desejar nos arquivos. O arquivo que contém mais diretivas sobre o tema da GitHub Page e também sobre a forma que são organizadas as abas e documentações é o arquivo nomeado como [`mkdocs.yml`](https://github.com/fga-eps-mds/2022-1-PokeRanking/blob/main/mkdocs.yml).

Conforme atualiza os arquivos, é possível visualizar as modificações feitas na página com o comando `mkdocs serve`, que vai servir a página em um servidor local na sua máquina, atualizando-a a cada modificação salva no diretório local do projeto.

Com todas as modificações feitas, visualizadas, conferidas e aprovadas, agora é só fazer o commit destas modificações para o repositório do projeto e em seguida realizar o deploy da página com o comando `mkdocs gh-deploy`.

Em alguns instantes após este passo, a página contendo as novas atualizações vai estar no ar no link do github.io do projeto.

Para visualizar como a GitHub Page do projeto PokéRanking se encontra neste momento, acesse este [link](https://fga-eps-mds.github.io/2022-1-PokeRanking/).