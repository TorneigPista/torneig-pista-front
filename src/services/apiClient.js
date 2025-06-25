const BASE_URL = 'http://host.docker.internal/api/v1';
export async function apiGet(endpoint) {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}