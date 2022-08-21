
| Data  | Versão   | Descrição                    |  Autor(es) |
| ------ | ---------- | ------------------------------ |  ----- |
| 21/08/2022   | 1.0 | Criação do documento  | [Leonardo Sobrinho](https://github.com/Leonardo0o0) |

## 1. Introdução

Este documento busca informar os possíveis riscos que o projeto está sujeito.

A gerência de riscos é o processo de definir como reagir aos riscos que podem impactar o projeto.

## 2. Estrutura Analítica de Riscos - EAR

![Riscos](https://user-images.githubusercontent.com/82467659/185800204-69b82559-6934-4baf-b712-8122143a6f35.png)


### 2.1 Categoria dos Riscos

#### 2.1.1 Externo

- **Problemas Pessoais**: Riscos associados a fatores pessoais.
- **Curso**: Riscos associados a relação dos integrantes da equipe com a disciplina.

#### 2.1.2 Organizacional

- **Estimativa**: Riscos associados à falta de experiência com o escopo trabalhado o que leva a estimativas erradas.
- **Priorização**: Riscos associados à priorização de atividades a serem executadas no projeto.
- **Experiência**: Riscos associados às capacidades e habilidades pessoais dos integrantes da equipe.

#### 2.1.3 Técnico

- **Tecnologias**: Riscos associados com as tecnologias utilizadas no projeto.
- **Arquitetura**: Riscos associados com a Organização do software.
- **Requisitos**: Riscos associados aos requisitos formalizados.
- **Qualidade**: Riscos associados às características de qualidade do produto.

#### 2.1.4 gerenciamento de Projeto

- **Pessoas**: Risco associado aos integrantes do grupo.
- **Planejamento**: Risco associado ao planejamento do projeto.
- **Comunicação**: Risco associado à comunicação do grupo.

## 3. Análise Quantitativa dos Riscos

### 3.1 Probabilidade de riscos e impactos

| Escala | Probabilidade | Nível |
|:-:|:-:| :-: |
| Muito Baixa | <5% | 1 |
| Baixa | 6-15% | 2 |
| Média | 16-30% | 3 |
| Alta | 31-60% | 4 |
| Muito Alta | 61-100% | 5 |


### 3.2 Impactos dos riscos

| Escala | Impacto | Nível | Descrição |
|:-:|:-:|:-:|--|
| Muito baixo | <5% | 1 | Impacto pouco expressivo no desenvolvimento do projeto |
| Baixo | 6-15% | 2 | Pouco impacto no desenvolvimento do projeto |
| Médio | 16-30% | 3 | Possui certo impacto porém é facilmente recuperado |
| Alto | 31-50% | 4 | Há grande impacto no desenvolvimento do projeto |
| Muito Alto | 51-80% | 5 | O impacto quase inviabiliza o projeto |


### 3.3 Avaliação dos riscos

| Probabilidade\Impacto| n1 | n2 | n3 | n4 | n5 |
|:-:|:-:|:-:| :-:| :-: | :-: |
| n1 | 1 | 2 | 3 | 4| 5 |
| n2 | 2 | 4 | 6 | 8 | 10 |
| n3 | 3 | 6 | 9 | 12 | 15 |
| n4 | 4 | 8 | 12 | 16 | 20 |
| n5 | 5 | 10 | 15 | 20 | 25 |

A multiplicação do nível da probabilidade com o impacto da uma estimativa da dificuldade que o risco deve proporcionar.

## 4. Riscos Levantados

### 4.1 Externo

| ID |Risco| Impacto | Probabilidade | Prevenção | Resposta | Nível de dificuldade |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| RE 1 | Abandono do projeto | Muito Alto | Muito Baixa | Manter todos atualizados com a disciplina | Desligar o projeto | 5 |
| RE 2 | Alteração drástica de escopo | Muito Alto | Baixa | Validar as atividades recem feitas sempre que possível | Tentar adequar o projeto ao novo escopo, replanejar | 10 |
| RE 3 | Integrante ficar incapacitada por motivo de saúde | Médio | Média | - | Continuar o planejamento levando em conta as pendências extras | 9 |
| RE 4 | Integrantes abandonarem disciplina | Alto | Média | Manter todos atualizados com a disciplina | Continuar o planejamento levando em conta as pendências extras | 12  |
| RE 5 | Novos integrantes entrarem para o time | Médio | Muito baixa | - | Ajustar o planejamento para que todos trabalhem | 3 |

### 4.2 Organizacional

| ID |Risco| Impacto | Probabilidade | Prevenção | Resposta | Nível de dificuldade |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| RO 1 | Pessoa não conseguir realizar sua issue | Alto | Média | Conhecer melhor as habilidades dos integrantes | Realocar a tarefa para outro integrante ou procurar estudar para realiza-la depois | 12 |
| RO 2 | Priorizar uma tarefa ou história de usuário errado | Alto | Baixa | discutir com o grupo de forma a todos concordarem sobre a importância | Atualizar a priorização | 8 |
| RO 3 | Montar um pareamento desbalanceado | Alto | Média | Utilizar o quadro de conhecimentos, prezar pela atualização do quadro de conhecimento constantemente e exigir feedbacks acerca do andamento da tarefa | Realocar a tarefa ou realocar as duplas | 12|

### 4.3 Técnico

| ID |Risco| Impacto | Probabilidade | Prevenção | Resposta | Nível de dificuldade |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| RT 1 | Escolher uma tecnologia que não colabora para a solução | Muito Alto | Baixo | Estudar as tecnologias | Trocar a tecnologia ou procurar uma solução com essa | 10 |
| RT 2 | Tomar uma decisão arquitetural que comprometa o desenvolvimento do produto | Muito Alto | Média | Estudar os problemas a serem resolvidos, decidir em equipe, levar em conta os requisitos e prioridades do negócio | Reagir da melhor forma possível | 15 |
| RT 3 | Tomar decisão de infraestrutura que afete o produto | Médio | Baixo | Ler acerca dos termos de uso da infraestrutura, suas capacidades e limitações  | Trocar de infraestrutura | 6 |
| RT 4 | Definir requisitos que não resolvem totalmente o problema | Alto | Alto | Elicitar os requisitos em equipe, envolver o cliente e validar os requisitos definidos | Alterar baseline de requisitos | 16 |
| RT 5 | Definir um escopo que não condiz com o propósito do produto | Alto | Muito baixa | Estudar o Usuário alvo e buscar feedback do cliente | Alterar o escopo para possibilitar a resolução do problema | 4 |
| RT 6 | Priorizar um atributo de qualidade que não é de fato importante | Médio | Baixa | Utilizar uma técnica bem definida para o processo de exploração e priorização | Continuar o desenvolvimento | 6 |
| RT 7 | Não priorizar um atributo de qualidade que seria importante  | Alto | Baixa | Utilizar uma técnica bem definida para o processo de exploração e priorização | Priorizar esse atributo | 8 |

### 4.4 Gerenciamento de Projeto

| ID |Risco| Impacto | Probabilidade | Prevenção | Resposta | Nível de dificuldade |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| RG 1 | Estimar de maneira errada atividades do projeto | Alto | Média | Quebrar as atividades em atividades mais estimáveis, utilizar técnicas de estimativa, considerar o histórico da equipe | Atualizar o cronograma e continuar o desenvolvimento | 15 |
| RG 2 | Planejar as atividades de maneira errada | Muito alto | Média | Planejar junto com a equipe, estudar técnicas de planejamento | Mudar a estratégia de planejamento | 20 |
| RG 3 | Executar uma atividade de maneira a não resolver o problema | Alto | Média | Fazer o pareamento de maneira estratégica | Explicar a atividade para todos, Realocar a atividade | 15 |

## 5. Referências

> PMI. Um guia do conhecimento em gerenciamento de projetos. Guia PMBOK 5a. ed. - EUA: Project Management Institute, 2013.

> [2021-2-SysArq-Doc](https://fga-eps-mds.github.io/2021-2-SysArq-Doc/planejamento/riscos/)

> [2021.2-INDICAA ](https://fga-eps-mds.github.io/2021.2-INDICAA-Wiki/documentacao/gerenciamento_de_riscos/)
