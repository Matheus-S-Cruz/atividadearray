let listaNome = [];
let listaProfissao = [];

function ver() {
    console.log(listaNome);
    console.log(listaProfissao);
}

function adc(){
    let nome = document.getElementById("nome").value;
    let profissao = document.getElementById("profissao").value;
    listaNome.push(nome);
    listaProfissao.push(profissao);
    console.log(listaNome);
    console.log(listaProfissao);
    Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'A pessoa '+nome+ ' foi adicionada!',
      })
}

function rmv(){
    let nome = document.getElementById("nome").value;
    let pos = listaNome.indexOf(nome);
    if(pos == -1){
        Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'A pessoa '+nome+' não foi encontrada na lista!'
          })
    }
    else{
        listaNome.splice(pos, 1);
        listaProfissao.splice(pos, 1);
        Swal.fire({
            icon: 'success',
            title: 'Sucesso',
            text: 'A pessoa '+nome+ ' foi removida!',
          })
    }
}
