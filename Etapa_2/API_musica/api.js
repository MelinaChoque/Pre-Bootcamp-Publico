import { faker } from "@faker-js/faker";
export const canciones = Array.from({ length: 5 }, () => ({
id: faker.string.uuid(),
  titulo: faker.music.songName(),
  artista: faker.person.fullName(),
  album: faker.word.words(2),
  duracion: `${faker.number.int({ min: 2, max: 5 })}:${faker.number.int({ min: 0, max: 59 }).toString().padStart(2, "0")}`,
  genero: faker.music.genre(),
  fechaLanzamiento: faker.date.past({ years: 5 }).toISOString().split("T")[0] 
}));

export const playlist = {
  id: faker.string.uuid(),
  nombre: faker.word.words(3),
  creador: faker.person.fullName(),
  descripcion: faker.lorem.sentence(),
  generoPrincipal: faker.music.genre(),
  canciones: canciones 
};