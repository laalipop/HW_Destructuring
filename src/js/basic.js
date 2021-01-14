export default function getByAttack(obj, idAttack) {
  const { special } = obj;
  const attackArr = special.find((item) => item.id === idAttack);

  if (attackArr.description === undefined) {
    attackArr.description = 'Описание недоступно';
  }
  const resultArr = [attackArr.id, attackArr.name, attackArr.icon, attackArr.description];
  // console.log(resultArr);
  return resultArr;
}
