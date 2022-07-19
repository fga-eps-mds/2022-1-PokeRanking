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

