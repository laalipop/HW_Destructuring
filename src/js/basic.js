export default function getByAttack(obj) {
  const result = [];
  for (const item of obj.special) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = item;
    const resultArr = {
      id, name, icon, description,
    };
    result.push(resultArr);
  }
  return result;
}
