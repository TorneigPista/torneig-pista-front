// src/services/categoryService.js
import { apiGet } from './apiClient';

//TODO: Almacenar la id de la temporada actual
export async function getCategoriesWithTeams() {
  const temporadas = await apiGet('/temporadas/1?include=categorias.equipos');
  return temporadas.categorias;
}

export async function getCategories() {
  const temporadas = await apiGet('/temporadas/1?include=categorias');
  return temporadas.categorias;
}

export async function getAllNextMatches() {
  const matches = await apiGet('/proximos-partidos');
  return matches;
}

export async function getNextMatchesByCategory(categoryId) {
  const matches = await apiGet(`/proximos-partidos-categoria/${categoryId}`);
  return matches;
}

export async function getFields(categoryId) {
  const fields = await apiGet('/campos');
  return fields;
}
