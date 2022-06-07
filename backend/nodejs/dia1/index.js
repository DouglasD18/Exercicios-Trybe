const tolls = require('./imc');
const readln = require('readline-sync');

const weigth = readln.questionFloat('What is your weigth? (kg)');
const heigth = readln.questionFloat('What is your heigth? (m)');

const result = tolls.imcCalc(weigth, heigth);
tolls.imcAnswer(result);