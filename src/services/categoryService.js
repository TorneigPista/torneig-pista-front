// src/services/categoryService.js
import { apiGet } from './apiClient';

export async function getCurrentCategory() {
  const categorias = await apiGet('/categorias?include=temporadas,equipos');

  const currentYear = new Date().getFullYear();

  // Filtra categorías que tengan alguna temporada del año actual
  const categoriasFiltradas = categorias.filter(cat =>
    cat.temporadas && cat.temporadas.some(temp => {
      const fecha = new Date(temp.fecha_inicio);
      return fecha.getFullYear() === currentYear;
    })
  );

  return categoriasFiltradas;
}
