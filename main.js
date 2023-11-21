function tocarSomVideo (){
    document.querySelector('#som_tecla_VideoPhone').play();
    document.querySelector('.tecla_VideoPhone').onclick = tocarSomVideo;
    }
    
    function tocarSomDejaVu (){
    document.querySelector('#som_tecla_DejaVu').play();
    document.querySelector('.tecla_DejaVu').onclick = tocarSomDejaVu;
    }
    
    function tocarSomLondon (){
    document.querySelector('#som_tecla_LondonBridge').play();
    document.querySelector('.tecla_LondonBridge').onclick = tocarSomLondon;
    }
    
    function tocarSomTelephone (){
    document.querySelector('#som_tecla_Telephone').play();
    document.querySelector('.tecla_Telephone').onclick = tocarSomTelephone;
    }
    
    function tocarSomsXmas (){
    document.querySelector('#som_tecla_XmasIsYou').play();
    document.querySelector('.tecla_XmasIsYou').onclick = tocarSomsXmas;
    }
    
    function tocarSomHalo (){
    document.querySelector('#som_tecla_Halo').play();
    document.querySelector('.tecla_Halo').onclick = tocarSomHalo;
    }
    
    function tocarSomCircus (){
    document.querySelector('#som_tecla_Circus').play();
    document.querySelector('.tecla_Circus').onclick = tocarSomCircus;
    }
    
    function tocarSomAlejandro (){
    document.querySelector('#som_tecla_Alejandro').play();
    document.querySelector('.tecla_Alejandro').onclick = tocarSomAlejandro;
    }
    
    function tocarSomUmbrella (){
    document.querySelector('#som_tecla_Umbrella').play();
    document.querySelector('.tecla_Umbrella').onclick = tocarSomUmbrella;
    }
    
    function tocarSom (idElementoAudio){
    document.querySelector (idElementoAudio).play();
    }
    
    document.querySelectorAll('.tecla'); //a funçao determina a generalização das classes que contém o nome escrito tecla
    
    const ListaDeTeclas = document.querySelectorAll('.tecla');
    
    ListaDeTeclas [0].onclick = tocarSomVideo;
    ListaDeTeclas [1].onclick = tocarSomDejaVu;
    ListaDeTeclas [2].onclick = tocarSomLondon;
    ListaDeTeclas [3].onclick = tocarSomTelephone;
    ListaDeTeclas [4].onclick = tocarSomsXmas;
    ListaDeTeclas [5].onclick = tocarSomHalo;
    ListaDeTeclas [6].onclick = tocarSomCircus;
    ListaDeTeclas [7].onclick = tocarSomAlejandro;
    ListaDeTeclas [8].onclick = tocarSomUmbrella;
    
    let contador = 0;
    
    //ADICIONANDO A CONDICIONAL WHILE 
    while (contador <ListaDeTeclas.length) {
    
    // listaDeTeclas [contador].onclick= tocarSom;
    //contador = contador + 1;
    //console.log (contador);
    
    const tecla = ListaDeTeclas [contador];
    const instrumento = tecla.classList [1];
    
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function () { 
    tocarSom (idAudio);
    
    } 
    contador = contador + 1;
    }
    