


// Podemos criar um modulo para resolver problemas de acessibilidade.
var moduloControleUsuario = (function () {
  // Aqui vou colocar todo meu código.
  // Aqui tudo é primvado.

  var listaUsuarios;
  var usuarioSelecionado;

  let btnAdicionar = document.getElementById('btn-adicionar-usuario');
  let tabelaUsuarios = document.querySelector('table.table tbody');

  let edtNome = document.getElementById('nome');
  let cbFuncao = document.getElementById('funcao');
  let edtSobreNome = document.getElementById('sobrenome');
  let edtEmail = document.getElementById('email');
  let edtObs = document.getElementById('observacao');

  let btnGravar = document.getElementById('btn-gravar-usuario');

  btnGravar.addEventListener('click', () => {
    _gravarUsuario();
    usuarioSelecionado = null;
  });

  btnAdicionar.addEventListener('click', () => {
    usuarioSelecionado = null;
    _abrirModal();

  });

  function obterUsuarios() {
    apiUsuario.obterTodos()
      .then(response => {
        console.log(response);
        //aqui qu eu vou popular a tabela
        _popularTabela(response.map(elemento => new Usuario(elemento)));
      })
      .catch(error => alert('Deu ruim...'))
  }

  function _popularTabela(result) {

    listaUsuarios = result;

    tabelaUsuarios.textContent = "";

    listaUsuarios.map(u => {
      var tr = document.createElement('tr');

      var tdId = document.createElement('td');
      var tdNome = document.createElement('td');
      var tdSobreNome = document.createElement('td');
      var tdEmail = document.createElement('td');
      var tdFuncao = document.createElement('td');
      var tdStatus = document.createElement('td');
      var tdAcoes = document.createElement('td');

      tdId.textContent = u.id;
      tdNome.textContent = u.nome;
      tdSobreNome.textContent = u.sobrenome;
      tdEmail.textContent = u.email;
      tdFuncao.textContent = u.funcao;
      
      if(u.status){
        tdStatus.textContent = "Ativo";
      }else{
        tdStatus.textContent = "Inativo";
      }

      tdAcoes.innerHTML = `<button class="btn-editar btn btn-outline-primary" ><i class="fas fa-pencil-alt"></i> Editar</button>
                           <button class="btn-excluir btn btn-outline-primary" ><i class="fas fa-trash-alt"></i> Excluir</button>`;

      tr.appendChild(tdId);
      tr.appendChild(tdNome);
      tr.appendChild(tdSobreNome);
      tr.appendChild(tdEmail);
      tr.appendChild(tdFuncao);
      tr.appendChild(tdStatus);
      tr.appendChild(tdAcoes);

      tabelaUsuarios.appendChild(tr);

    })
  }


  // O _ é uma convenção para programadores que não devemos colocar a função publica.
  function _abrirModal() {
    $('#modal-adicionar-usuario').modal({ backdrop: "static" });

    if (usuarioSelecionado) {
      edtNome.value = usuarioSelecionado.nome;
      edtSobreNome.value = usuarioSelecionado.sobrenome;
      edtEmail.value = usuarioSelecionado.email;
      cbFuncao.value = usuarioSelecionado.funcao;
      edtObs.value = usuarioSelecionado.obs;

    } else {
      usuarioSelecionado = new Usuario();
      edtNome.value = "";
      edtSobreNome.value = "";
      edtEmail.value = "";
      cbFuncao.value = "Administrador";
      edtObs.value = "";
    }

  }

  function _fecharModal() {
    $('#modal-adicionar-usuario').modal('hide');
  }


  obterUsuarios();

  function _gravarUsuario() {

    if(!!!(edtNome.value && cbFuncao.value)){
      alert('Preencha os campos nome e funcao!')
      return;
    }

    usuarioSelecionado.nome = edtNome.value;
    usuarioSelecionado.sobrenome = edtSobreNome.value;
    usuarioSelecionado.email = edtEmail.value;
    usuarioSelecionado.funcao = cbFuncao.value;
    usuarioSelecionado.obs = edtObs.value;

    apiUsuario.gravarUsuario(usuarioSelecionado)
      .then(response => {
        console.log(response);
        obterUsuarios();
        swal("Usuario Gravado", "", "success");

      })
      .catch(error => swal("Erro", "", "error"));

     _fecharModal();  

  }

  $('#tabela-usuario').on('click', 'button.btn-excluir', function () {
    var indexRow = this.parentNode.parentNode.rowIndex - 1;
    var usuario = listaUsuarios[indexRow];


    swal({
      title: `Deseja Excluir o Usuario: ${usuario.nome}`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if(willDelete){
        apiUsuario.excluiUsuario(usuario.id)
        .then(response => {
          console.log(response);
          obterUsuarios();
          swal("Usuario Excluido", "", "success");
  
        })
        .catch(error => alert('Deu ruim...'))
      }
    });
  });

  $('#tabela-usuario').on('click', 'button.btn-editar', function () {
    var indexRow = this.parentNode.parentNode.rowIndex - 1;
    usuarioSelecionado = listaUsuarios[indexRow];
    _abrirModal();
  });



})()




