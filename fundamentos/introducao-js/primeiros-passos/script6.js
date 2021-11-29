let peca = "RAINHA";

peca = peca.toLowerCase();

if (peca == "peão") {
    console.log("Pra frente")
} else if (peca == "bispo") {
    console.log("Diagonal")
} else if (peca == "torre") {
    console.log("Horizontal e vertical")
} else if (peca == "cavalo") {
    console.log("Pula duas casas")
} else if (peca == "rainha") {
    console.log("Em linha reta pra qualquer direção")
} else if (peca == "rei") {
    console.log("Uma casa adjacente")
} else {
    console.log("Não é uma peça de xadrez")
}