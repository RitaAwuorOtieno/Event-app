export const API_BASE_URL = "http://localhost:5000";

export async function fetchEvents() {
  const response = await fetch(`${API_BASE_URL}/events`);
  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }
  return response.json();
}
