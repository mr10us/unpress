export const generateNews = async (subject) => {
  const token = getBase64UTCDate();

  try {
    const response = await fetch("http://89.116.236.210/api/generate-article", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Auth-Token": token,
      },
      body: JSON.stringify({ subject }),
    });

    if (!response.ok) {
      throw new Error("Fetch error");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

function getBase64UTCDate() {
  const now = new Date();

  // Получаем компоненты UTC времени
  const year = now.getUTCFullYear();
  const month = String(now.getUTCMonth() + 1).padStart(2, "0");
  const day = String(now.getUTCDate()).padStart(2, "0");
  const hour = String(now.getUTCHours()).padStart(2, "0");

  const formatted = `${year}/${month}/${day}.${hour}`;

  // Кодируем в Base64
  const base64 = btoa(formatted);

  return base64;
}

