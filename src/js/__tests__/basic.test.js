import getByAttack from '../basic';

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

test('ordinary array', () => {
  const result = [8, 'Двойной выстрел', 'http://...', 'Двойной выстрел наносит двойной урон'];
  const test = getByAttack(character, 8);
  expect(test).toEqual(result);
});

test('array without type description', () => {
  const result = [9, 'Нокаутирующий удар', 'http://...', 'Описание недоступно'];
  const test = getByAttack(character, 9);
  expect(test).toEqual(result);
});
