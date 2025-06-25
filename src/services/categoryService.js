// src/services/categoryService.js
import { apiGet } from './apiClient';

//TODO: Almacenar la id de la temporada actual
export async function getCategoriesWithTeams() {
  const temporadas = await apiGet('/temporadas/1?include=categorias.equipos');
  return temporadas.categorias;
}

