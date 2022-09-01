# Guia de Estilo e Identidade Visual

# Histórico de Revisão


| Data   | Versão | Modificação  | Autor  |
| :- | :- | :- | :- |
| 25/08/2022 | 0.3 | Legendas, descrições e componentes | Kallyne M. Passos |
| 20/08/2022 | 0.2 | Estruturação do Guia | Kallyne M. Passos |
| 08/08/2022 | 0.1 | Criação da versão inicial do documento | Leonardo S. Aguiar |

# 1. Introdução

Para que possa ser entregue consistência na identidade visual do projeto aqui apresentado, este Guia visa estabelecer um padrão de desenvolvimento para aplicação, de forma a documentar estilos, fontes, cores, dentre outros aspectos visuais. 

# 2. Detalhamento e Justificativas

## 2.1. Nome da aplicação

O nome da aplicação veio das palavras de maior importância na formação do conceito inicial de desenvolvimento: criar uma ferramenta que ranqueia pokémons.

Assim foram mescladas as palavras "Pokémon" e "Ranking" para criar PokeRanking, nome relacionado com o objetivo do projeto.

## 2.2. Fontes

As principais fontes utilizadas no projeto são: 

- __Inter__ ([Link para download](https://rsms.me/inter/download/).)

Família tipográfica open-source desenhada para o uso em telas de computadores, com foco em legibilidade, utilizada nos menus, filtros e rodapé do site. 

 - __Press Start 2P__ ([Link para download](https://www.dafont.com/press-start-2p.font).)
 
Fonte _bitmap_ base para o display de pokémons e seus status, que remete a jogos retrô. 


 ### Instalação
Para instalar as fontes em máquina local, baixe o arquivo desejado, descompacte-o e o instale conforme o instalador do sistema operacional, na pasta Fonts. 

 ### Utilização no projeto:
Antes de alterar o HTML e o CSS, é necessária a adição da pasta contendo a fonte no repositório local do projeto. 


#### Incluindo no HTML

No <__head__>, adicione:

	<link href="caminho_da_fonte*" rel="stylesheet">
* Caminho em texto da pasta onde foi realizada a instalação da fonte. Ex: "C:\Users\usuario1\Fonts\Inter-3.19\Inter Desktop"
	

#### Incluindo no CSS

Coloca-se no css, para a utilização da fonte:

	
    font-family: 'Inter';
	font-style: normal;

	font-family: 'Press Start 2P';
	font-style: normal;

## 2.3 Logo
| ![img](https://i.ibb.co/CBhpzZM/Frame-3.png) |
| :- | 
| <b><center>Logotipo - Variação Branca </center></b> |

A logo foi desenhada de maneira a transmitir a essência da aplicação, contendo seu nome por extenso e a imagem do pokemón Lugia, que leva junto consigo uma pokébola "vitoriosa", em representação da ideia de estar no topo dos rankings gerados, ou seja, de ser o pokémon mais forte entre os demais, conforme suas características e status.
	
### 2.3.1 Variação

Para melhor adaptação visual e configuração de contrastes na página, a logotipo é primariamente exibida na sua variação branca. Entretanto, também conta com a versão vermelha, vista no README e em documentações. 

| <center> ![Logo](https://user-images.githubusercontent.com/82467659/182052506-180e65ac-719e-4d3d-a1aa-c60f8a3d8755.png) </center> | 
| :- | 
| <b><center>Logotipo - Variação Vermelha </center></b> |
	

# 3. Paleta de cores

| <center> ![img](https://i.ibb.co/V3kHmNL/pokeranking.png) </center> |
| :- | 
| <b><center>Paleta de Cores - PokéRanking </center></b> |

A paleta de cores foi desenvolvida de forma com que seu estilo remetesse ao original Pokémon mas também adicionasse a própria identidade do projeto, destoando de aplicativos similares. A ferramenta coolors foi utilizada para sua criação.
	
As cores __#63337A__ (_Eminence_) e __#3B9D8B__ (_Persian Green_) aparecem no fundo de páginas e cartões de detalhes, enquanto __#2E3F7C__ (_Dark Cornflower Blue_) é referência no menu e rodapé, ao passo que __#41BC52__ (_Dark Pastel Green_) e __#C63838__ (_Madder Lake_) são cores de acento, vísiveis nos filtros e na descrição de status de cada Pokémon. As cores bases são utilizadas também com gradientes, e as tipografias seguem a tonalidade __#F5F5F5__ (_Whitesmoke_), cor secundária no projeto. 

## 3.1 Acessibilidade

Foram realizados testes de contraste, que obtiveram resultados satisfatórios, e testes de daltonismo, que garantiram distinção entre cores e tonalidades para oito variações da perturbação visual.  

<center><a href="https://ibb.co/TcLVcsS"><img src="https://i.ibb.co/4Wd6WHG/contrast1.png" alt="contrast1" border="0" width="200" height="40"></a>
<a href="https://ibb.co/hLpW4w0"><img src="https://i.ibb.co/zQKRBDd/contrast2.png" alt="contrast2" border="0" width="200" height="40"></a>
<a href="https://ibb.co/hgbPw3N"><img src="https://i.ibb.co/0nTgvHL/contrast3.png" alt="contrast3" border="0" width="200" height="40"></a>
<a href="https://ibb.co/h2Djpgf"><img src="https://i.ibb.co/MPM4qg6/contrast4.png" alt="contrast4" border="0" width="200" height="40"></a>
<a href="https://ibb.co/QMD9kkV"><img src="https://i.ibb.co/bXb1FFV/contrast5.png" alt="contrast5" border="0" width="200" height="40"></a>
<a href="https://ibb.co/25b9w5n"><img src="https://i.ibb.co/nRWGTRg/contrast6.png" alt="contrast6" border="0" width="200" height="40"></a></center> 
<b><center>Testes de contraste</center></b>

<br/>

<center><a href="https://ibb.co/Gkc4sgR"><img src="https://i.ibb.co/y5WchLq/daltonismo1.png" alt="daltonismo1" border="0" width="200" height="100"></a>
<a href="https://ibb.co/mcDsVrh"><img src="https://i.ibb.co/hm75Jx2/daltonismo2.png" alt="daltonismo2" border="0" width="200" height="100"></a>
<a href="https://ibb.co/sq01xss"><img src="https://i.ibb.co/QM2HSYY/daltonismo3.png" alt="daltonismo3" border="0" width="200" height="100"></a>
<a href="https://ibb.co/XW3kczH"><img src="https://i.ibb.co/cyCX4Nq/daltonismo4.png" alt="daltonismo4" border="0" width="200" height="100"></a>
<a href="https://ibb.co/hHCyw9k"><img src="https://i.ibb.co/gw63h9G/daltonismo5.png" alt="daltonismo5" border="0" width="200" height="100"></a>
<a href="https://ibb.co/fkZvYSx"><img src="https://i.ibb.co/N9fS63y/daltonismo6.png" alt="daltonismo6" border="0" width="200" height="100"></a>
<a href="https://ibb.co/Hxgbtyv"><img src="https://i.ibb.co/jW4QyYK/daltonismo7.png" alt="daltonismo7" border="0" width="200" height="100"></a>
<a href="https://ibb.co/PM9xDHD"><img src="https://i.ibb.co/vhQ1XnX/daltonismo8.png" alt="daltonismo8" border="0" width="200" height="100"></a></center>
<b><center>Testes de daltonismo, da esquerda para a direita: protanopia, deuteranopia, tritanopia, acromatopsia, protanomalia, deuteranomalia, tritanomalia, acromatomalia.</center></b>



## 3.2 Adicionais

Dado em conta que cada tipo de Pokémon requer uma representação visual diferente, indicando sua maior fonte de poder, também são utilizados no fundo da aplicação as cores referência: 
	
| <center> ![tipos](https://i.ibb.co/dmh2Kx6/Tipos-Pokemon.png) </center> | 
| :- | 
| <b><center>Cores que representam os tipos de Pokémon, traduzidos, da esquerda para direita: Ferro, fogo, grama, elétrico, água, gelo, terra, pedra, fada, veneno, inseto, dragão, psíquico, voador, lutador, fantasma, sombrio e normal. </center></b> |

Para que não ocorra disturbância visual ou quebra de identidade, as cores apresentadas são exibidas com contraste e opacidade reduzidas. 

	
<!-- # 4. Componentes

## 4.1. Botões

## 4.2. Navbar

## 4.4. Footer

### Para website --!>

