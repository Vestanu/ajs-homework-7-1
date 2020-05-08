
import {
  Character, Bowerman, Swordsman, Magician, Daemon, Undead, Zombie,
} from '../src/character';

test('Создается новый класс bowerman с нужными параметрами', () => {
  const newPlayer = new Bowerman('Player');
  expect(newPlayer).toEqual({ attack: 25, defense: 25, name: 'Player' });
});

test('Создается новый класс swordsman с нужными параметрами', () => {
  const newPlayer = new Swordsman('Player');
  expect(newPlayer).toEqual({ attack: 40, defense: 10, name: 'Player' });
});

test('Создается новый класс magician с нужными параметрами', () => {
  const newPlayer = new Magician('Player');
  expect(newPlayer).toEqual({ attack: 10, defense: 40, name: 'Player' });
});

test('Создается новый класс daemon с нужными параметрами', () => {
  const newPlayer = new Daemon('Player');
  expect(newPlayer).toEqual({ attack: 10, defense: 40, name: 'Player' });
});

test('Создается новый класс undead с нужными параметрами', () => {
  const newPlayer = new Undead('Player');
  expect(newPlayer).toEqual({ attack: 25, defense: 25, name: 'Player' });
});

test('Создается новый класс zombie с нужными параметрами', () => {
  const newPlayer = new Zombie('Player');
  expect(newPlayer).toEqual({ attack: 40, defense: 10, name: 'Player' });
});

test('Создается новый класс Character с нужными параметрами', () => {
  const newPlayer = new Character('Player');
  expect(newPlayer).toEqual({ name: 'Player' });
});
