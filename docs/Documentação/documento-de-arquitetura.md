# Documento de Arquitetura

## Histórico de Versão
| Data        |Versão   | Descrição        | Autor                                                    |
|-------------|---------|------------------|----------------------------------------------------------|
| 24/06/2022  | 0.1     | Abertura do documento  |[Kallyne M. Passos](https://github.com/kazpmcd)|
| 06/07/2022  | 0.2     | Adição de tópicos da representação arquitetural |[Leonardo Sobrinho](https://github.com/Leonardo0o0)|
| 29/07/2022  | 0.3     | Inclusão da introdução  |[Kallyne M. Passos](https://github.com/kazpmcd)|


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
|MVC	|Model View Controller|

## 2. Representação arquitetural

### 2.1 JavaScript

JavaScript é uma linguagem leve, interpretada e baseada em objetos com funções de primeira classe, e é usada tanto em ambientes com ou sem browser apesar de ser mais conhecida como a linguagem de script para páginas Web.

O JavaScript é uma linguagem baseada em protótipos, multi-paradigma e dinâmica, que suporta tanto estilos imperativos e declarativos quanto estilos orientados a objetos.

#### 2.1.1 Node.js

O Node.js é um ambiente de execução Javascript server-side, ou seja, a partir dele é possível criar aplicações Javascript para rodar como uma aplicação standalone em uma máquina.

Uma de suas principais vantagens é a sua alta capacidade de escala. Além disso, sua arquitetura, flexibilidade e baixo custo, o tornam uma boa escolha para implementação de Microsserviços e componentes da arquitetura Serverless.

#### 2.1.2 React
	
Uma biblioteca JavaScript para criar interfaces de usuário.

O React surgiu com o objetivo de otimizar a atualização e a sincronização de atividades simultâneas no feed de notícias da rede social, entre eles chat, status, listagem de contatos e outros.

A princípio,essas atividades tinham uma descrição muito complexa. O React deixa esta descrição mais simples, assim como, a conexão entre HTML, CSS e JavaScript e todos os componentes de uma página, também é simplificada

### 2.2 CSS

CSS (Folhas de Estilo em Cascata) é uma linguagem usada para descrever a apresentação de um documento escrito em HTML ou em XML, ou seja, descreve como elementos são mostrados na tela.

CSS é uma das principais linguagens da open web e é padronizada em navegadores web de acordo com as especificações da WC3.

### 2.3 HTML

HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web que define o significado e a estrutura do conteúdo da web. 

"Hipertexto" refere-se aos links que conectam páginas da Web entre si, seja dentro de um único site ou entre sites.

Pode ser usado em conjunto com CSS, para descrever a aparência/apresentação de uma página da web, e JavaScript, para descrever a funcionalidade/comportamento de uma página da web.

### 2.4 Mongodb

O MongoDB é um banco de dados orientado a documentos que possui código aberto (open source) e foi projetado para armazenar uma grande escala de dados, além de permitir que se trabalhe de forma eficiente com grandes volumes.

Ele é categorizado no banco de dados NoSQL (not only SQL) pois o armazenamento e a recuperação de dados no MongoDB não são feitas no formato de tabelas.

O banco de dados também fornece suporte oficial de driver para todas as linguagens populares como C, C ++, C # e .Net, Go, Java, Node.js, Perl, PHP, Python, Motor, Ruby, Scala, Swift, Mongoid. Assim, pode-se criar um aplicativo usando qualquer uma dessas linguagens.

### 2.5 Metabase

O Metabase é uma ferramenta que permite coletar, processar e analisar dados. A ferramenta é capaz de transformar os dados e suas estruturas em algo palpável através de filtros orgânicos e uma estética confortável para a visualização. 

Nela os dados são transformados em dashboards atualizadas, e em relatórios e gráficos simples e rápidos, facilmente entendidos.

## 3. Metas e Restrições arquiteturais

### 3.1 Suportabilidade

### 3.2 Usabilidade

### 3.3 Ferramentas de Desenvolvimento

### 3.4 Confiabilidade


## 4. Visão de Casos de Uso


## 5. Visão Lógica



## 6. Visão de implementação

### 6.1 Diagrama de classes 

### 6.2 Banco de Dados

## Referências
