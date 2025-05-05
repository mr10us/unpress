export const generateNews = async (subject) => {
  const currentDate = new Date().toISOString();
  const token = btoa(currentDate);

  try {
    const response = await fetch(
      "/api/generate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Auth-Token": token,
        },
      },
      {
        body: JSON.stringify({ subject }),
      }
    );

    if (!response.ok) {
      throw new Error("Fetch error");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
