const prompt =require('prompt-sync')();

//let continuar = true;
let time = [];

function buscarJogador(nomeDesejado){
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado ainda!")
        return;
    }

    for(let i = 0;i < time.length; i++){
        let jogadorAtual = time[i];

        if (jogadorAtual.nome == nomeDesejado) {
            console.log("JOGADOR ENCONTRADO!");
            console.log("\nperfil do Jogador(a)!");
            console.log("=========================");
            console.log("NOME: ",jogadorAtual.nome,"\nFUNÇÃO: ",jogadorAtual.funcao,"\nPONTUAÇÃO: ",jogadorAtual.pontuacao);
            //console.log("NOME: ",time[i].nome,"\nFUNÇÃO: ",time[i].funcao,"\nPONTUAÇÃO: ",time[i].pontuacao);
            console.log("=========================");
            return;
        }
                         
    }
    
    console.log("Jogador(a) ",nomeDesejado,"Nao foi encontrado!")
}

function atualizarPontuacao(){
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado ainda!")
        return;
    }

    let nomeDesejadoAtz = prompt("Qual o nome do jogador que você quer atualizar?: ");

    for(let i = 0;i < time.length; i++){
        let jogadorAtual = time[i];

        if (jogadorAtual.nome == nomeDesejadoAtz) {
            console.log("JOGADOR ENCONTRADO!");
            console.log("\nperfil do Jogador(a)!");
            console.log("=========================");
            console.log("NOME: ",jogadorAtual.nome,"\nFUNÇÃO: ",jogadorAtual.funcao,"\nPONTUAÇÃO: ",jogadorAtual.pontuacao);
            console.log("=========================");

            let pontosNovos = Number(prompt("Quantos pontos ele ganhou?"));
            jogadorAtual.pontuacao = (jogadorAtual.pontuacao + pontosNovos);

            console.log("Pontuação atualizada com sucesso!");
            return;
        }

    }
    console.log("Jogador(a) ",nomeDesejadoAtz,"Nao foi encontrado!")

}

function mostrarEquipe() {
    if(time.length == 0){
        console.log("Nenhuma equipe cadastrada!");
        return;
    }

    for(let i = 0; i < time.length; i++){
        let jogador = time[i];
        console.log((i + 1) + ". "+ jogador.nome + " | Função: "+ jogador.funcao + "| Pontuação: "+ jogador.pontuacao);
    }

}

function cadastrarJogador(){
    let nomeJogador = prompt("Digite o nome do Jogador:");
    let funcaoJogador = prompt("Digite a função do jogador:");
    let pontuacaoJogador = Number(prompt("Digite a pontuação:"));

    if (isNaN(pontuacaoJogador)) {//isNaN -> isso nao é um numero/ se for, ela retorna True e entra no if, se nao, ela retorna False e nao entra
        console.log("Pontuação invalida!");
        return;
    }
    else{
        let recruta = {
            nome: nomeJogador,
            funcao: funcaoJogador,
            pontuacao: pontuacaoJogador 
        }

        time.push(recruta); 
        console.log("Jogador", nomeJogador," foi cadastrado com sucesso!");
    }

     
}

function deletarJogador(){
    if (time.length == 0) {
            console.log("nenhum jogador cadastrado!");
            return;//o return pode ser usado como um continue
        }

    let nomeDeletado = prompt("Digite o nome do jogador para deletar:")
    let indexDeletado = -1;
    for(let i = 0; i < time.length; i++){

        if(time[i].nome === nomeDeletado){
            indexDeletado = i;
            break;
        }
    }
    
    if (indexDeletado == -1) {
        // Quando o index retorna -1:significa que o é elemento nao foi encontrado na lista.
        console.log("Jogador não encontrado!...");
        return;
    }

    time.splice(indexDeletado,1);// funcao usada para deletar elemento da lista
    console.log("Jogador execluido com sucesso!\n",time);
}

function mostrarMenu(){

    console.log("----------- SISTEMA DE GAMERS -------------");
    console.log("============= MENU ====================");
    console.log("[1] - Cadastrar novo Jogador");
    console.log("[2] - Excluir Jogador");
    console.log("[3] - Mostrar Equipe");
    console.log("[4] - Calculo da media da Equipe");
    console.log("[5] - Pesquisar Jogador");
    console.log("[6] - Atualizar Pontos");
    console.log("[7] - Sair");
    console.log("=======================================");
    
}

function calculoDaMedia(){
    if (time.length == 0) {
        console.log("nenhum jogador cadastrado!");
        return;//o return pode ser usado como um continue
    }

    let totalPontos = 0;

    for(let i = 0; i < time.length; i++){
        totalPontos = totalPontos + time[i].pontuacao;//ex: time[0].pontuacao -> recruta.pontuacao = 50
    }

    let mediaPontos = (totalPontos / time.length)
    console.log("O time possui uma pontuação Média de :",mediaPontos);
}

while(true){
    //menu
    mostrarMenu()
    let opcao = Number(prompt("Informe: "));

    //[1] - Cadastrar novo Jogador
    if(opcao == 1){
        cadastrarJogador()
    }
    //[2] - Excluir Jogador
    else if (opcao == 2) {
        deletarJogador();
    }

    else if (opcao == 3) {   
        mostrarEquipe();  
    }

    else if (opcao == 4) {
        calculoDaMedia();
    }

    else if (opcao == 5) {
        let nomeDesejado = prompt("Pesquisar jogador: ");
        buscarJogador(nomeDesejado);
    }

    else if (opcao == 6) {
        atualizarPontuacao();
    }

    else if (opcao == 7) {
        console.log("saindo do programa...")
        break;
    }
    
    else{
        console.log("Opção invalida, digite outra opcao...")
    }
    
}

