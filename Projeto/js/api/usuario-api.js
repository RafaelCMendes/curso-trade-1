var apiUsuario = (() => {
    const URL = "http://localhost:3000";


    function obterTodos() {

        return new Promise((resolve, reject) => {
            fetch(`${URL}/usuarios`)
                .then(response => response.json())
                .then(response => resolve(response))
                .catch(error => reject(error))
        });
    }

    function gravarUsuario(usuario) {
        if (!usuario.id) {
            return new Promise((resolve, reject) => {
                fetch(`${URL}/usuarios`, {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(usuario)
                }).then(response => resolve(response))
                    .catch(error => reject(error));
            });

        } else {
            return new Promise((resolve, reject) => {
                fetch(`${URL}/usuarios/` + usuario.id, {
                    method: 'put',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(usuario)
                }).then(response => resolve(response))
                    .catch(error => reject(error));
            });
        }
    }

    function excluiUsuario(id) {
        return new Promise((resolve, reject) => {
            fetch(`${URL}/usuarios/` + id, {
                method: 'delete',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
            }).then(response => resolve(response))
                .catch(error => reject(error));
        });
    }



    return {
        obterTodos,
        gravarUsuario,
        excluiUsuario
    }
})()