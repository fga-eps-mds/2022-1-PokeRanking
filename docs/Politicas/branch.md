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

