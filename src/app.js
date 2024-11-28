/* Este es el mismo proyecto del excuse generator, pero refactorizado.
Debajo dejo el código original para la comparación*/

function getRandomElement(listElements) {
  let element = listElements[Math.floor(Math.random() * listElements.length)];
  return element;
}

function excuseGeneratorNimbus2000() {
  const who = getRandomElement(["Carlos", "Hans", "Un alemán"]);
  const action = getRandomElement(["se comió", "quemó", "vendió"]);
  const what = getRandomElement(["mi ordenador", "España", "mi casa"]);
  const when = getRandomElement(["hoy", "ayer", "no sé cuando"]);
  return who + " " + action + " " + what + " " + when;
}
document.getElementById(
  "excuseGeneratorNimbus2000"
).innerHTML = excuseGeneratorNimbus2000();

/*
function getRandomWho() {
  const tipesOfName = new Array("Carlos", "Hans", "Un alemán");
  let rnd = Math.random();
  const randomPositionOfName = Math.floor(rnd * tipesOfName.length);
  return tipesOfName[randomPositionOfName];
}

function getRandomAction() {
  const tipesOfName = new Array("se comió", "quemó", "vendió");
  let rnd = Math.random();
  const randomPositionOfName = Math.floor(rnd * tipesOfName.length);
  return tipesOfName[randomPositionOfName];
}

function getRandomWhat() {
  const tipesOfName = new Array("mi ordenador", "España", "mi casa");
  let rnd = Math.random();
  const randomPositionOfName = Math.floor(rnd * tipesOfName.length);
  return tipesOfName[randomPositionOfName];
}
function getRandomWhen() {
  const tipesOfName = new Array("hoy", "ayer", "no sé cuando");
  let rnd = Math.random();
  const randomPositionOfName = Math.floor(rnd * tipesOfName.length);
  return tipesOfName[randomPositionOfName];
}

function excuseGeneratorNimbus2000() {
  const who = getRandomWho();
  const action = getRandomAction();
  const what = getRandomWhat();
  const when = getRandomWhen();
  return who + " " + action + " " + what + " " + when;
*/
