# Documento de Arquitetura

## Histórico de Versão
| Data        |Versão   | Descrição        | Autor                                                    |
|-------------|---------|------------------|----------------------------------------------------------|
| 24/06/2022  | 0.1     | Abertura do documento  |[Kallyne M. Passos](https://github.com/kazpmcd)|
| 06/07/2022  | 0.2     | Adição de tópicos da representação arquitetural |[Leonardo Sobrinho](https://github.com/Leonardo0o0)|
| 29/07/2022  | 0.3     | Inclusão da introdução  |[Kallyne M. Passos](https://github.com/kazpmcd)|
| 31/07/2022  | 0.4     | Atualização do tópico 2 e adição dos tópicos 3 e 4   |[Leonardo Sobrinho](https://github.com/Leonardo0o0), [Kallyne M. Passos](https://github.com/kazpmcd)|
| 01/08/2022  | 0.5     | Adição do tópico 5   |[Kallyne M. Passos](https://github.com/kazpmcd)|
| 15/09/2022  | 0.6     | Finalização da documentação  |[Kallyne M. Passos](https://github.com/kazpmcd)|


## 1. Introdução

### 1.1. Objetivo

O documento presente objetiva trazer à vista o panorama arquitetural do sistema desenvolvido para que se torne de conhecimento público e interno os processos que envolvem o projeto, as decisões tomadas e as funções desempenhadas por cada componente.

### 1.2. Escopo

O documento presente trata do projeto PokéRanking, idealizado e desenvolvido por alunos da disciplina de Métodos de Desenvolvimento de Software, lecionada na Universidade de Brasília - Faculdade do Gama, que consiste em um sistema cuja meta é proporcionar aos seus usuários a possibilidade de classificação e ranqueamento entre diversos Pokemóns da franquia Pokémon-Nintendo®.

### 1.3. Definições, acrônimos e abreviações

|  Sigla/Termo/Acrônimo     | Definição   |
|-------------|--------------------|
|MDS	|Métodos de Desenvolvimento de Software|
|FGA	|Faculdade do Gama|
|UnB	|Universidade de Brasília|
|DOM    |Document Object Model|
|MVC	|Model View Controller|
|MC     |Model Controller| 
|MERN   |MongoDB, Express.js, React e Node.js


## 2. Representação arquitetural


O desenho arquitetural do projeto PokéRanking se faz por via do modelo de arquitetura monolítica de 3 tiers, sendo eles cliente, servidor e banco de dados, que se relacionam entre si. 

No back-end, é trabalhada a arquitetura MC (model-controller), derivada da arquitetura MVC que não conta com a view, pois a visualização é composta pelo React. 


### 2.1 JavaScript ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

JavaScript é uma linguagem leve, interpretada e baseada em objetos com funções de primeira classe, e é usada tanto em ambientes com ou sem browser apesar de ser mais conhecida como a linguagem de script para páginas Web.

O JavaScript é uma linguagem baseada em protótipos, multi-paradigma e dinâmica, que suporta tanto estilos imperativos e declarativos quanto estilos orientados a objetos.

#### 2.1.1 Node.JS ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

O Node.js é um ambiente de execução Javascript server-side, ou seja, a partir dele é possível criar aplicações Javascript para rodar como uma aplicação standalone em uma máquina.

Uma de suas principais vantagens é a sua alta capacidade de escala. Além disso, sua arquitetura, flexibilidade e baixo custo, o tornam uma boa escolha para implementação de Microsserviços e componentes da arquitetura Serverless.

#### 2.1.2 Mongoose

Mongoose é uma biblioteca de programação orientada a objetos JavaScript, ela cria uma ponte entre o MongoDB e o ambiente de tempo de execução JavaScript Node.js. No projeto, o Mongoose processa as consultas ao banco e foi utilizado para a população dos dados. 

#### 2.1.3 Express.JS ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel. O Express fornece um incremento de funcionalidades fundamentais para aplicativos da web, sem interferir com os recursos do Node.js, e atua como a API do projeto. 

#### 2.1.2 React ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
	
Uma biblioteca JavaScript para criar interfaces de usuário.

O React surgiu com o objetivo de otimizar a atualização e a sincronização de atividades simultâneas no feed de notícias da rede social, entre eles chat, status, listagem de contatos e outros.

A princípio, essas atividades tinham uma descrição muito complexa. O React deixa esta descrição mais simples, assim como a conexão entre HTML, CSS e JavaScript e todos os componentes de uma página também é simplificada.

### 2.2 CSS3 ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

CSS (Folhas de Estilo em Cascata) é uma linguagem usada para descrever a apresentação de um documento escrito em HTML ou em XML, ou seja, descreve como elementos são mostrados na tela.

CSS é uma das principais linguagens da open web e é padronizada em navegadores web de acordo com as especificações da WC3.

### 2.3 HTML5 ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web que define o significado e a estrutura do conteúdo da web. 

"Hipertexto" refere-se aos links que conectam páginas da Web entre si, seja dentro de um único site ou entre sites.

Pode ser usado em conjunto com CSS, para descrever a aparência/apresentação de uma página da web, e JavaScript, para descrever a funcionalidade/comportamento de uma página da web.

### 2.4 MongoDB ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

O MongoDB é um banco de dados orientado a documentos que possui código aberto (open source) e foi projetado para armazenar uma grande escala de dados, além de permitir que se trabalhe de forma eficiente com grandes volumes.

Ele é categorizado no banco de dados NoSQL (not only SQL) pois o armazenamento e a recuperação de dados no MongoDB não são feitas no formato de tabelas.

O banco de dados também fornece suporte oficial de driver para todas as linguagens populares como C, C ++, C # e .Net, Go, Java, Node.js, Perl, PHP, Python, Motor, Ruby, Scala, Swift, Mongoid. Assim, pode-se criar um aplicativo usando qualquer uma dessas linguagens.

No projeto, o MongoDB é utilizado em nuvem, através do Atlas MongoDB. 


## 3. Metas e Restrições arquiteturais

O desenvolvimento do projeto será em React 18.2.0, sendo necessário o requerimento do Node.JS 16.16.0.

O desenvolvimento deverá estar seguir as boas práticas de programação e estar em conforme com os requisitos não funcionais definidos para que seja viável a manutenção por mantenedores e interessados.

O PokéRanking é uma aplicação otimizada para uso web.


### 3.1 Suportabilidade

Por ter a natureza de um ranking online, o software deve ser suportado pelos principais navegadores de internet (2022) para maior comodidade do usuário.

### 3.2 Usabilidade

A interface do sistema deve ser intuitiva, de facil acesso, sem a neecessidade de realizar login ou cadastro para desfrutar de todas as funcionalidades.

### 3.3 Ferramentas de Desenvolvimento

O projeto deve ser desenvolvido em HTML, CSS e JavaScript, com o uso da biblioteca React para a criação da interface e Express.js, um framework Node.js, para a construção do servidor.

O gerenciamento dos dados deve ser realizado por meio do Atlas MongoDB, que permite armazenar um banco de dados não relacional, com uso Mongoose, que realiza a ligação entre o banco de dados e o back-end (server-side da aplicação).

### 3.4 Confiabilidade

É estimado que o sistema tenha uma cobertura de testes de 90%, buscando garantir que suas funcionalidades foram suficientemente testadas e tenham uma garantia de funcionalidade.


## 4. Visão de Casos de Uso

Lista de casos de uso: 

- Ver o ranking de Pokémons através dos filtros disponíveis (status, tipo e geração*)
- Montar uma equipe composta por 6 Pokémons
- Comparar os status de 2 Pokémons entre si 
- Visualizar os Pokémons por ordem de pokédex
- Visualizar o mapa de regiões

*Cada geração corresponde a uma região Pokémon diferente. Por exemplo, as criaturas da primeira geração de Pokémons (nº 1-151 da Pokédex) são todas oriundas de Kanto. 

### 4.1 Usuário

O usuário da aplicação deve ser capaz de interagir com ela conforme as visões de casos de uso e ter uma experiência no site conforme descrito na Usabilidade.

### 4.2 Diagrama de casos de uso
![photo_2022-08-02_08-37-34](https://user-images.githubusercontent.com/65683663/182368258-6da7bd21-94da-421a-bbb2-e1d28495122c.jpg)



## 5. Visão de implementação

### 5.1 Diagrama de pacotes
![img](https://i.ibb.co/6WpRgYc/Modelar-bancos-de-dados-3.png) 

### 5.2 Diagrama de classes
![img](https://i.ibb.co/H758M6p/Modelar-bancos-de-dados-2.png)

## 6. Visão Lógica

![image](https://miro.medium.com/max/1400/1*7A5EI0yO6sH9FUz6AxIsrg.png)

A aplicação é desenvolvida a partir da combinação MERN (MongoDB, Express.js, React e Node.js), com base JavaScript.

A parte majoritária das ações tomadas pelo usuário precisarão consultar o banco de dados, através do servidor, para serem concluídas, o que torna necessário o envio uma solicitação (request) ao servidor pelo cliente React, utilizando o protocolo de comunicação HTTP.

### 6.1 Arquitetura Node.js 
Na execução do software, o  Node.js aparece como forma de executar o JavaScript do lado do servidor (server-side) da aplicação, na qual interage com uma base de dados MongoDB por meio do Mongoose, conforme a seguinte ordem de ações:

* Os usuários enviam solicitações (bloqueando ou não bloqueando) ao servidor para realizar operações > As solicitações entram na fila de eventos, primeiramente no server-side > A fila de eventos transmite as solicitações sequencialmente para o loop de eventos > O loop de eventos verifica a natureza da solicitação (bloqueio ou não bloqueante) > O loop de eventos processa as solicitações não bloqueantes que não requerem recursos externos e retorna as respostas aos clientes correspondentes > Para solicitações de bloqueio, um único fio (thread) é atribuído ao processo para concluir a tarefa usando recursos externos > Após a conclusão da operação, a solicitação é redirecionada para o loop de eventos, que entrega a resposta de volta ao cliente.
![image](https://media.geeksforgeeks.org/wp-content/uploads/20211017212721/NWAGFGdrawio.png)<center>Fluxo de trabalho de servidor Node.js </center>

### 6.2 Arquitetura React
Assim que a solicitação é processada, o servidor deve interpretá-la e produzir uma resposta a partir das informações recebidas e, neste ponto, o cliente React recupera o que foi requisitado, respeitando o protocolo HTTP. A partir disso, o React cria um template que permite a visualização e interação com os dados pelo usuário. 

* De maneira mais aprofundada, para otimizar o desempenho do tempo de execução, os componentes do React são renderizados primeiro em um DOM virtual gerenciado. É necessário especificar a hierarquia de componentes de interface do usuário da Web para que o DOM virtual do React seja alimentado. Posteriormente, o React cuida da sincronização da UI da aplicação com o DOM real do navegador.

![image](https://developer.ibm.com/developer/default/tutorials/wa-react-intro/images/figure1.png)<center>Fluxo de operações React</center>




## Referências

Documentation | Node.js. Disponível em: https://nodejs.org/en/docs/. Acesso em 14 set de 2022.

MDN Web Docs. Disponível em: https://developer.mozilla.org/pt-br/. Acesso em 06 jul 2022.

MERN STACK. Disponível em: https://www.mongodb.com/mern-stack. Acesso em 14 set 2022.