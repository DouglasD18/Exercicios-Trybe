const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (strength) => {
  const mult = strength - 15;
  const damage = Math.floor(Math.random() * mult) + 15;
  return damage;
};

const warriorDamage = (strength, weaponDmg) => {
  const factor = strength * weaponDmg;
  const mult = factor - strength;
  const damage = Math.floor(Math.random() * mult) + strength;
  return damage;
};

const magoAtack = (mana, intelligence) => {
  if (mana < 15) {
    return { dano: "Não possui mana suficiente", manaRestante: mana };
  }
  const mult = intelligence;
  const damage = Math.floor(Math.random() * mult) + intelligence;
  mana -= 15;
  return { dano: damage, manaRestante: mana };
};

const gameActions = {
  warriorTurn: function (warriorDamage) {
    const warriorStrength = warrior.strength;
    const warriorWeaponDmg = warrior.weaponDmg; 
    const warriorAtack = warriorDamage(warriorStrength, warriorWeaponDmg);
    warrior.damage = warriorAtack;
    dragon.healthPoints -= warriorAtack;
  },
  mageTurn: function (magoAtack) {
    let mageMana = mage.mana;
    const mageIntelligence = mage.intelligence;
    const objeto = magoAtack(mageMana, mageIntelligence);
    const mageDamage = Object.values(objeto)[0];
    mage.damage = mageDamage;
    mageMana = Object.values(objeto)[1];
    mage.mana = mageMana;
    dragon.healthPoints -= mageDamage;
  },
  dragonTurn: function (dragonDamage) {
    const dragonStrength = dragon.strength;
    const dragonAtack = dragonDamage(dragonStrength);
    dragon.damage = dragonAtack;
    mage.healthPoints -= dragonAtack;
    warrior.healthPoints -= dragonAtack;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(magoAtack);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.turnResults());