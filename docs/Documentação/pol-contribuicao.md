# Como contribuir

| Data  | Versão   | Descrição                    |  Autor(es) |
| ------ | ---------- | ------------------------------ |  ----- |
| 14/09/2022   | 1.1 | Adição da política de pull requests e issues  | [Kallyne M. Passos](https://github.com/kazpmcd) |
| 05/09/2022   | 1.0 | Criação do documento  | [Kallyne M. Passos](https://github.com/kazpmcd) |


O documento presente exibe o processo de desenvolvimento do projeto PokeRanking, de forma a viabilizar contribuições externas vindas de quem desejar fazer parte.


# Politica de branches

## Objetivo

O objetivo da política de branches é padronizar o nome das branches criadas no projeto. Os nomes conterão informações uteis para identificar o objetivo daquela branch e a qual issue esta atrelada.

## Implementação

Existem dois tipos de branches, as regulares e as temporárias. A política de branches se refere ao segundo tipo.

### Branches temporárias

As branches temporárias podem ser divididas em categorias, inicialmente utilizaremos as seguintes categorias:

- Bug Fix - branches na qual são feitas as correções de bugs.
- Hot Fix - São branches no qual são realizadas correções de bugs críticos encontrados em ambiente de produção, e que por isso são criadas a partir da branch master.
- Feature - Essas são as branches na qual são desenvolvidos novos recursos ao projeto.
- Documentation - Essas são as branches na qual são desenvolvidos os documentos do projeto.

### Como nomear uma branch

O nome da branch começara com uma das seguintes palavras:

- bug
- hotfix
- feat
- doc

```
feat
```

Logo após, separado por um um hífen, virá o numero da issue que esta branch está atrelada:

```
feat-31
```

Depois, separada por um hífen, virá a descrição da tarefa. Cada palavra da descrição também será separada por um hifén:

```
feat-31-nova-funcionalidade
```

Todas as palavras serão escritas com letras minúsculas.


# Política de commits

## Objetivo

Padronizar os commits do projetos.

## Implementação

Com o objetivo de padronizar os commits do projeto utilizaremos o [Gitmoji](https://gitmoji.dev/), uma iniciativa que padroniza o uso de emojis para facilmente identificar o objetivo de um commit. Veja mais no [repositorio do Gitmoji](https://github.com/carloscuesta/gitmoji).

## Instalação

Para utilizar o Gitmoji através da linha de comandos é necessário instalar o [gitmoji-cli](https://github.com/carloscuesta/gitmoji-cli).

```bash
npm i -g gitmoji-cli
```

## Utilização

Após a instalação do gitmoji-cli, para abrir a tela interativa de commit, utilize o seguinte comando:

```bash
gitmoji -c
```

Para um guia mais detalhado de utilização assista este [video sobre o gitmoji](https://youtu.be/49a9M17ZikI?t=59)

## Princípios básicos e Anatomia do commit

### Faça commits atômicos

Sempre dividir o trabalho em pequenos e significativos commits fazendo com que cada commit implemente apenas uma funcionalidade.

### Título do commit

- Utilizar no maximo 48 caracteres para o titulo do commit
- Começar com letra minúscula

### Mensagem do commit

Se é necessário contextualizar o commit e explicar o porquê das mudanças, descreva, em quantas linhas forem necessárias, na mensagem do commit de acordo com o seguinte:

- Deve conter o o que e o por que foi feito
- Máximo de 72 caracteres por linha


# Issues
   As issues podem ser iniciadas para resolução de dúvidas e problemas, sinalização de bugs, sugestão de melhorias e também para registro de atividades realizadas. Ao desenvolver novas features do projeto, corrigir erros ou documentar alterações, é necessária a criação de issue que apresente:
   - Um problema inédito, ou seja, não se deve repetir issues que já existem e já estão abertas.
   -  Título e descrição claras e coesas.
   -  O template do projeto (para [bug](https://github.com/fga-eps-mds/2022-1-PokeRanking/blob/main/.github/ISSUE_TEMPLATE/bug.md) e para [task](https://github.com/fga-eps-mds/2022-1-PokeRanking/blob/main/.github/ISSUE_TEMPLATE/task.md)).
   -  Pessoa atribuída e revisador (mantenedor do repositório). 


# Política de pull requests
O pull request  deve ser feito assim que a atividade desenvolvida na branch for concluída, seguindo os seguintes padrões:

- O título, descrição e o comentário devem ser claros e coesos.
- Funcionalidades incluídas no pull request devem ter sido testadas anteriormente e exibirem funcionamento pleno. 
- Uso e preenchimento correto do [template](https://github.com/fga-eps-mds/2022-1-PokeRanking/blob/main/.github/pull_request_template.md) de pull request para issues.
