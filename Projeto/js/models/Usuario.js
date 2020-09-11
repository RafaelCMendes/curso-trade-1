 class Usuario {
    constructor(obj){

        obj = (obj) ? obj : {};
        // obj = obj || {}; 

        this.id = obj.id;
        this.nome = obj.nome;
        this.sobrenome = obj.sobrenome;
        this.funcao = obj.funcao;
        this.email = obj.email;
        this.status = obj.status;
        this.obs = obj.obs;
    }

 }