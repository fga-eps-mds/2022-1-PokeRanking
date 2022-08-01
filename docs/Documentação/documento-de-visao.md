# Documento de Visão

## Histórico de Versão
| Data        |Versão   | Descrição        | Autor                                                    |
|-------------|---------|------------------|----------------------------------------------------------|
| 20/06/2022  |0.1      |Estrutura inicial |[Charles M. S. Morais](https://github.com/charles-serafim)|
| 03/07/2022  |0.2      |Atualização dos tópicos: Introdução, Propósito, Escopo, Definições e Visão Geral |[Artur Seppa Reiman](https://github.com/artur-seppa)|
| 01/08/2022  |1.0      |Atualização dos tópicos: Introdução, Posicionamento, Descrições do Usuário, Envolvidos, visão geral do produto, Recursos do produto, Restrições, Requisitos funcionais e não funcionais, Outros requisitos do produto |[Charles M. S. Morais](https://github.com/charles-serafim)|


Introdução, Posicionamento, Descrições do Usuário, Envolvidos, visão geral do produto, Recursos do produto, Restrições, Requisitos funcionais e não funcionais, Outros requisitos do produto

## 1. Introdução
Este documento tem como objetivo apresentar o PokéRanking, explicando pontos sobre o escopo, posicionamento, requisitos e recursos para auxiliar desenvolvedores e usuários a compreender o produto e suas especificidades.

### 1.1. Propósito
A finalidade desse documento é informar ao leitor a sobre a aplicação PokeRanking. Sendo apresentados diversos aspectos relacionados a esse software de forma clara e precisa.

### 1.2. Escopo
Esse projeto tem como objetivo de desenvolver uma aplicação web responsiva com a finalidade de auxiliar jogadores casuais de Pokémon a escolher entre as diferentes criaturas para formar suas equipes. 

Como forma de auxilio, o usuário poderá exercer a pesquisa, filtragem e comparação entre os mais diversos pokémons, além de conseguir visualizar o status, número de geração e tipo de raridade das criaturas. 

### 1.3. Definições, acrônimos e abreviações
Termos, acrônimos e abreviações utilizados no desenvolvimento deste documento:

| Sigla/Termo/Acrônimo | Definição |
| ----- | ----- |
| MDS   | Métodos de Desenvolvimento de Software |
| UnB   | Universidade de Brasília |
| FGA   | 	Faculdade do Gama |

### 1.4. Referências
- DOCUMENTO de Visão. IBM, 2021. Disponível em: <<https://www.ibm.com/docs/pt-br/elm/6.0.5?topic=requirements-vision-document>>. Acesso em: 01 de ago. de 2022.

- DESENVOLVENDO uma Visão. IBM, 2021. Disponível em: <<https://www.ibm.com/docs/pt-br/elm/6.0.5?topic=release-developing-vision>>. Acesso em: 01 de ago. de 2022.

- CARVALHO, Durval; et al. Documento de Visão - Acacia. Disponível em: <<https://fga-eps-mds.github.io/2019.2-Acacia/#/vision_document>>. Acesso em: 01 de ago. de 2022. 

- GIFFONI, Erick; et al. Documento de Visão - Ada. Disponível em: <<https://fga-eps-mds.github.io/2019.1-ADA/#/docs/product/vision_document>>. Acesso em: 01 de ago. de 2022.

- CLEYDSON, Rafael; et al. Documento de Visão - Anunbis. Disponível em: <<https://fga-eps-mds.github.io/2020.2-Anunbis/documentacao/documento-de-visao/>>. Acesso em: 01 de ago. de 2022. 

- FÉLIX, Bruno; et al. Documento de Visão - Vamos Cuidar. Disponível em: <<https://fga-eps-mds.github.io/2020.1-VC_Usuario/#/docs/Documento_de_Visao>>. Acesso em: 01 de ago. de 2022. 

- AMIKA - Documento de Visão. Disponível em <<https://fga-eps-mds.github.io/2019.2-Amika-Wiki/#/docs/projeto/documentovisao>>. Acesso em: 01 de ago. de 2022. 

### 1.5. Visão geral
Este documento é dividido em 9 tópicos, nos quais descrevem em detalhes as características do software proposto. Sendo composto por:

* Introdução: Fornece uma visão geral sobre o todo o documento;

* Posicionamento: Descreve a situação problema do projeto, abordando sobre o público alvo, oportunidade de negócio e a solução trazida pelo PokeRanking.

* Descrição do Usúario: Descreve os grupos, entidades e/ou pessoas que utilizarão o produto.

* Envolvidos: Descreve a equipe responsável pelo desenvolvimento do produto.

* Visão Geral do Produto: Descreve um breve resumo do que consiste o projeto e o que ele faz. Capacidades do produto, interfaces para outros aplicativos e configurações dos sistemas.

* Recursos do Produto: Descreve as capacidades de alto nível do sistema que são necessários para entregar benefícios aos usuários.

* Restrições: Retrata sobre as diversas restrições da aplicação.

* Requisistos Funcionais e não Funcionais: Descreve os requisitos funcionais e não funcionais, dependências e prioridades do software.

* Outros Requisitos do Produto: lista os padrões aplicáveis, os requisitos de hardware ou plataforma, sistema, os requisitos de desempenho e os requisitos ambientais.


## 2. Posicionamento

### 2.1. Oportunidade de negócio
Pokémon é uma franquia de mídia que pertence a The Pokémon Company, da qual fazem parte jogos, cartas colecionáveis, série de televisão, além de filmes, mangás e brinquedos. Ela é centrada em criaturas ficcionais chamadas "Pokémon", que os seres humanos capturam e os treinam para lutarem entre si com seus ataques de diversos tipos.

A franquia de mídia conta com diversos títulos de jogos eletrônicos, e é a segunda franquia de mídia de jogos mais bem sucedida e lucrativa do mundo, atrás da franquia de Mario, da Nintendo.

O universo Pokémon apresenta um sistema de atributos e pontuações para as diferentes criaturas, que são base para as mecânicas de combate entre os pokémons nos jogos e outras mídias da série.

Desta forma, ter à disposição informações sobre os atributos e pontuações de cada pokémon é um recurso muito útil para os jogadores de Pokémon, enriquecendo a experiência com os jogos e facilitanto as decisões que o usuário precisa tomar.

É neste contexto que o PokéRanking se situa, propondo-se a ser uma ferramenta que apresenta funcionalidades diversas e úteis que enriquecem a jogabilidade dos títulos da série, contando com sistemas de ranqueamento, classificação e simulação de equipes de pokémons de todas as gerações.

### 2.2. Descrição do problema
| Tipo        | Descrição                                                                 |
|-------------|---------------------------------------------------------------------------|
| Problema    | Falta de ferramentas com recursos ricos de comparação entre pokémons      |
| Afetados    | Jogadores de Pokémon                                                      |
| Impactos    | Dificuldade na escolha de pokémons e montagem de equipes para os combates |
| Solução     | Site com sistemas de ranqueamento, classificação e simulação de equipes de pokémons de todas as gerações |

### 2.3. Descrição da posição do produto
Para jogadores de Pokémon que tem a necessidade de obter informações sobre pokémons e seus atributos, assim como comparações entre o poder dos diversos pokémons, o PokéRanking é uma aplicação web que oferece recursos de ranqueamento, comparação e simulação de equipes pokémon.  
De outro modo, há alternativas na web que contém informações sobre pokémons, como o [site oficial de Pokémon](https://www.pokemon.com/br/), que apresenta notícias e artigos relacionados ao universo Pokémon, além de informações sobre cada pokémon presente na Pokédex, permitindo buscas individuais sobre as criaturas. Nosso produto se diferencia da solução atual na medida em que fornece recursos extras, como o ranqueamento e classificação de poder das criaturas e também a simulação de montagem de equipe.


## 3. Descrições do Usuário

### 3.1. Resumo do usuário
| Nome                 | Descrição                                   |
|----------------------|---------------------------------------------|
| Jogadores de Pokémon | Pessoas que jogam os jogos da série Pokémon |

### 3.2. Principais necessidades do usuário
| Usuário              | Necessidade                                                                      | Problema                                            | Solução Proposta                                                          | Solução atual                                                                                               |
|----------------------|----------------------------------------------------------------------------------|-----------------------------------------------------|---------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| Jogadores de Pokémon | Ter informações sobre os pokémons e sua performance em relação a outros pokémons | A falta de ferramentas de comparação entre pokémons | Sistema de ranqueamento, classificação de pokémons e simulação de equipes | Pokédex do [site oficial de Pokémon](https://www.pokemon.com/br/), com informações individuais dos pokémons |

### 3.3. Ambiente do usuário
Site (aplicação web) acessível através de navegadores/browsers diversos.


## 4. Envolvidos
Envolvidos: equipe responsável pelo desenvolvimento do produto.

| Nome            | Descrição             | Principais responsabilidades |
|-----------------|-----------------------|------------------------------|
| Equipe de Desenvolvimento de _Software_ | Estudantes da disciplina de Métodos de Desenvolvimento de Software, do curso de Engenharia de Software da Universidade de Brasília (UnB), Campus FGA - Gama. | Criar e manter a documentação do produto, tomar decisões a respeito do mesmo, desenvolver e testar o _software_ |
| Equipe de orientação | Professora [Carla Rocha](https://github.com/RochaCarla) e monitores da disciplina MDS | Avaliar, auxiliar e guiar a equipe durante o desenvolvimento da projeto |


## 5. Visão Geral do Produto

### 5.1. Perspectiva do Produto
O PokéRanking tem como objetivo principal ser uma ferramenta utilizada por jogadores de Pokémon que fornece aos seus usuários um ambiente com ferramentas de ranqueamento e classificação de pokémons.  
Assim, desdobram-se objetivos específicos, como: fornecer informações individuais sobre pokémons e seus atributos; permitir a visualização dos pokémons em uma lista ranqueada onde podem-se aplicar filtros diversos; possibilitar a comparação entre os atributos de um pokémon específico com outro; oferecer o recurso de simulação de uma equipe de seis pokémons com informações sobre o poder da equipe.

### 5.2. Resumo das capacidades
| Benefício para o usuário                                           | Recursos de Suporte                                                                                         |
|--------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| Facilidade em consultar informações sobre um pokémon através do número da Pokédex ou nome | A aplicação fornece um campo de pesquisa para consultas de informações individuais dos pokémons    |
| Possibilidade a classificação de um pokémon em relação ao total de atributos ou em relação a um atributo ou tipo específico | A partir dos dados sobre os atributos, a aplicação fornece uma interface de visualização de ranking pokémon, que conta com filtros disponíveis para customização da visualização |
| Possibilidade de montar uma equipe com 6 pokémons, visualizando seu desempenho | A aplicação fornece a simulação de equipes e a visualização das suas métricas, atributos e qualidade geral |
| Possobilidade de visualizar o mapa Pokémon e ver os pokémons da região | É fornecido também o recurso do mapa, onde pode-se visualizar os pokémons de diversas regiões |


## 6. Recursos do Produto

O usuário do site PokéRanking pode fazer a utilização dos diversos recursos da plataforma:
* Visualizar lista dos pokémons por ordem da Pokédex
* Pesquisar um pokémon pelo seu número da Pokédex ou pelo seu nome
* Visualizar detalhes individuais de cada pokémon, seu tipo e atributos
* Ranquear os pokémons de acordo com seu poder total de atributos
* Customizar o ranking de pokémons de acordo com um atributo ou tipo específico
* Adicionar pokémons a uma equipe simulada e visualizar detalhes sobre o poder e qualidade da equipe
* Visualizar o mapa das regiões pokémon, podendo consultar quais são os pokémons de cada região


## 7. Restrições
* O sistema será implementado utilizando as tecnologias JavaScript, HTML5, CSS3 e o banco de dados MongoDB. Serão também utilizados os seguintes frameworks e bibliotecas: Node.js, Express.js, React, Mongoose e Metabase.
* Para acesso ao sistema, é necessária a utilização de um navegador web e conexão com a internet. 


## 8. Requisitos funcionais e não funcionais
Requisitos funcionais e não funcionais, dependências e prioridades.

Lista de categorias de prioridades para requisitos:
| Tipo          | Descrição                                                                                                                       |
|---------------|---------------------------------------------------------------------------------------------------------------------------------|
| Alta	        | Requisitos indispensáveis para o funcionamento do sistema                                                                       |
| Intermediária	| Requisitos importantes para o sistema, mas caso não sejam implementados não resultará em um mal funcionamento do sistema        |
| Útil	        | Requisitos que não são usados com tanta frequência e não são tão significativos na satisfação que o usuário tem sobre o sistema |

Lista de requisitos:
| Identificador | Requisito                                                                      | Depende de | Prioridade |
|---------------|--------------------------------------------------------------------------------|------------|------------|
| RF01          | Fornecer a visualização dos pokémons por ordem da Pokedex                      | ---        | Alta       |
| RF02          | Permitir a filtragem dos pokémons por tipo                                     | RF01       | Alta       |
| RF03          | Fornecer o ranking dos pokémons pelo total de atributos                        | ---        | Alta       |
| RF04          | Fornecer o ranking dos pokémons por atributos especificos                      | RF03       | Alta       |
| RF05          | Permitir a pesquisa de pokémons pelo nome                                      | RF01       | Média      |
| RF06          | Permitir a pesquisa de pokémons pelo número da Pokédex                         | RF01       | Baixa      |
| RF07          | Permitir a visualização de detalhes de um pokémon ao clicar sobre ele          | RF01       | Média      |
| RF08          | Permitir a adição de um pokémon à equipe pelo card de detalhes                 | RF07       | Baixa      |
| RF09          | Fornecer a visualização do mapa geral das regiões                              | ---        | Média      |
| RF10          | Permitir a visualização dos pokémons de uma região do mapa ao clicar sobre ela | RF09       | Baixa      |
| RF11          | Permitir a seleção de pokémons para comparação                                 | RF01       | Média      |
| RF12          | Permitir a retirada de um pokémon da lista de comparação                       | RF11       | Baixa      |
| RF13          | Permitir a adição de pokémons à uma simulação de equipe                        | RF01       | Média      |
| RF14          | Permitir a retirada de pokémons de uma simulação de equipe                     | RF13       | Baixa      |
| RF15          | Fornecer a visualização das métricas da equipe                                 | RF13       | Baixa      |
| RF16          | Fornecer a visualização do(s) atributo(s) foco da equipe                       | RF13       | Baixa      |
| RF17          | Fornecer a visualização da qualidade geral da equipe                           | RF13       | Média      |
| RNF18         | Suporte para principais navegadores web atuais                                 | ---        | Média      |