const testingScope = (escopo) => {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';

    escopo === true ? console.log(ifScope) : console.log(elseScope);
}

testingScope(true);
