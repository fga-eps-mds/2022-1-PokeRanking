![image](https://user-images.githubusercontent.com/82467659/182052506-180e65ac-719e-4d3d-a1aa-c60f8a3d8755.png)
  
  
  
O PokéRanking é uma aplicação que fornece um sistema de ranqueamento e classificação de pokémons de todas as gerações! <img src="https://thumbs.gfycat.com/SharpBriefAsianlion.webp" width="20" height="15" />

Com ele você pode rankear os pokémons aplicando filtros, fazer comparações entre criaturas diversas, além de visualizar informações e detalhes individuais dos pokémons e fazer uma simulação de equipe!

O projeto foi criado para a disciplina de Métodos de Desenvolvimento de Software do curso de Engenharia de Software da Universidade de Brasília (UnB), Campus Gama. Para mais informações, consulte a aba [Documentação](Documentação/Termo-de-Abertura.md).

# Equipe

<style>
   @font-face {
        font-family: 'Flexo Bold';
        src: url(fonts/Flexo-Bold.ttf);
    }

    @font-face {
        font-family: 'Flexo Demi';
        src: url(fonts/Flexo-Demi.ttf);
    }

    @font-face {
        font-family: 'Flexo Medium';
        src: url(fonts/Flexo-Medium.ttf);
    }

    .team {
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

    .card {
        margin: 0;
        padding: 0;
        width: 200px;
        height: 310px;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        background-color: white;
    }

    .card-joao:hover {
        box-shadow: #f366b9 0px 5px 15px;
    }

    .card-thiago-leo:hover {
        box-shadow: #a38621 0px 5px 15px;
    }

    .card-julio-maciel:hover {
        box-shadow: #FD7D24 0px 5px 15px;
    }
    .card-charles:hover {
        box-shadow: #4592C4 0px 5px 15px;
    }

    .card-kallyne:hover {
        box-shadow: #7B62A3 0px 5px 15px;
    }

    .card-artur:hover {
        box-shadow: #f16e57 0px 5px 15px;
    }

    .pic {
        margin: 0;
        padding: 0;
        width: 200px;
        height: 200px;
        border-radius: 5px;
    }

    .num {
        margin: 0;
        padding: 0;
        font-size: 15px;
        margin-left: 7.67px;
        font-family: 'Flexo Bold', Arial, sans-serif;
        color: #919191;
    }
    
    .name {
        margin: 0;
        padding: 0;
        font-size: 20px;
        margin-left: 7.67px;
        margin-top: 9.2px;
        margin-bottom: 5px;
        font-family: 'Flexo Demi', Arial, sans-serif;
        color: #212121;
    }
    
    .role {
        margin: 0;
        padding: 0;
        width: 150px;
        border-radius: 5px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        margin-left: 7.67px;
        font-family: 'Flexo Medium', Arial, sans-serif;
        font-size: 16px;
    }

    .poke-container {
        margin-top: -142px;
        margin-left: 55%;
    }

    .pokemon {
        width: 80px;
        height: 80px;
        background-color: white; 
        border-radius: 50%;
    }

    .joao {
        background-color: #f366b9;
        color: white;
    }

    .thiago-leo {
        background-color: #a38621;
        color: white;
    }

    .julio-maciel {
        background-color: #FD7D24;
        color: white;
    }

    .charles {
        background-color: #4592C4;
        color: white;
    }

    .kallyne {
        background-color: #7B62A3;
        color: white;
    }

    .artur {
        background-color: #f16e57;
        color: white;
    }   
</style>

<div class="team">
    <a href="https://github.com/JoaoSchmitz">
        <div class="card card-joao">
            <img src="https://avatars.githubusercontent.com/u/79875786?v=4" alt="joao" class="pic">
            <p class="num">Nº249 </p>
            <p class="name">João Matheus</p>
            <p class="role joao">Scrum Master</p>
            <div class="poke-container"><img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/249.png" alt="" class="pokemon"></div>
        </div>
    </a>
    <a href="https://github.com/Thiago-Cerq">
        <div class="card card-thiago-leo">
            <img src="https://avatars.githubusercontent.com/u/65683663?v=4" alt="thiago" class="pic">
            <p class="num">Nº248 </p>
            <p class="name">Thiago</p>
            <p class="role thiago-leo">Scrum Master</p>
            <div class="poke-container"><img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/248.png" alt="" class="pokemon"></div>
        </div>
    </a>
    <a href="https://github.com/Julio-eng">
        <div class="card card-julio-maciel">
            <img src="https://avatars.githubusercontent.com/u/78378116?v=4" alt="julio" class="pic">
            <p class="num">Nº006 </p>
            <p class="name">Júlio César</p>
            <p class="role julio-maciel">Product Owner</p>
            <div class="poke-container"><img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png" alt="" class="pokemon"></div>
        </div>
    </a>
    <a href="https://github.com/charles-serafim">
        <div class="card card-charles">
            <img src="https://avatars.githubusercontent.com/u/75335915?v=4" alt="charles" class="pic">
            <p class="num">Nº054 </p>
            <p class="name">Charles</p>
            <p class="role charles">Product Owner</p>
            <div class="poke-container"><img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/054.png" alt="" class="pokemon"></div>
        </div>
    </a>
    <a href="https://github.com/kazpmcd">
        <div class="card card-kallyne">
            <img src="https://avatars.githubusercontent.com/u/71143609?v=4" alt="kallyne" class="pic">
            <p class="num">Nº094 </p>
            <p class="name">Kallyne</p>
            <p class="role kallyne">Software Architect</p>
            <div class="poke-container"><img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/094.png" alt="" class="pokemon"></div>
        </div>
    </a>
    <a href="https://github.com/Leonardo0o0">
        <div class="card card-thiago-leo">
            <img src="https://avatars.githubusercontent.com/u/82467659?v=4" alt="leo" class="pic">
            <p class="num">Nº745 </p>
            <p class="name">Leonardo</p>
            <p class="role thiago-leo">Software Architect</p>
            <div class="poke-container"><img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/745.png" alt="" class="pokemon"></div>
        </div>
    </a>
    <a href="https://github.com/artur-seppa">
        <div class="card card-artur">
            <img src="https://avatars.githubusercontent.com/u/82611794?v=4" alt="artur" class="pic">
            <p class="num">Nº149 </p>
            <p class="name">Artur Seppa</p>
            <p class="role artur">Developer</p>
            <div class="poke-container"><img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/149.png" alt="" class="pokemon"></div>
        </div>
    </a>
    <a href="https://github.com/macieljuniormax">
        <div class="card card-julio-maciel">
            <img src="https://avatars.githubusercontent.com/u/66387901?v=4" alt="maciel" class="pic">
            <p class="num">Nº004 </p>
            <p class="name">Maciel Júnior</p>
            <p class="role julio-maciel">Developer</p>
            <div class="poke-container"><img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png" alt="" class="pokemon"></div>
        </div>
    </a>
</div>

