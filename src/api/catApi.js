const API_KEY = 'live_Mu5mJ7oGLnoY4n13exzSVftaWPi137NSSZwkxHr4vbgLfvICJo4y7Vpq2gXCT5cN';
const API_URL = 'https://api.thecatapi.com/v1/breeds';

export async function fetchBreeds() {
  try {
    const response = await fetch(API_URL, {
      headers: { 'x-api-key': API_KEY }
    });
    if (!response.ok) throw new Error('Ошибка загрузки');
    return await response.json();
  } catch (error) {
    console.error('Ошибка загрузки данных:', error);
    return [];
  }
}