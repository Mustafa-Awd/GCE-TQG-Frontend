import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export async function generateQuestions(payload) {
  try {
    const response = await axios.post(`${API_URL}/generate`, payload);

    return response.data;
  } catch (error) {
    console.error("Question generation failed: ", error);

    throw error;
  }
}

export async function getTopics(filename = "ICT") {
  try {
    const response = await axios.get(`${API_URL}/topics:${filename}`);

    return response.data;
  } catch (error) {
    console.error("Getting topics failed: ", error);

    throw error;
  }
}
