let listaNome = [];
let listaProf = [];

function ver() {
    console.log(listaNome);
    console.log(listaProf);
}

function adc(){
    let nome = document.getElementById("nome").value;
    let prof = document.getElementById("prof").value;
    var nomeMaiusc = nome.toUpperCase();
    var profMaiusc = prof.toUpperCase();
    if(listaNome.includes(nomeMaiusc) == true){
        Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'A pessoa '+nome+' não foi encontrada na lista!'
          })
    }else{
    listaNome.push(nomeMaiusc);
    listaProf.push(profMaiusc);
    console.log(listaNome);
    console.log(listaProf);
    Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'A pessoa '+nome+ ' foi adicionada!',
      })}
}

function rmv(){
    let nome = document.getElementById("nome").value;
    var nomeMaiusc = nome.toUpperCase();
    let pos = listaNome.indexOf(nomeMaiusc);
    if(pos == -1){
        Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'A pessoa '+nome+' não foi encontrada na lista!'
          })
    }
    else{
        listaNome.splice(pos, 1);
        listaProf.splice(pos, 1);
        Swal.fire({
            icon: 'success',
            title: 'Sucesso',
            text: 'A pessoa '+nome+ ' foi removida!',
            
          })
          console.log(listaNome);
          console.log(listaProf);
    }
    
}
