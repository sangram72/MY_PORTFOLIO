interface ContactData {
  name: string;
  email: string;
  message: string;
}

interface ContactResponse {
  message: string;
}

const API_URL = "https://my-portfolio-backend-0pzm.onrender.com/api";

export const sendContactMessage = async (
  contactData: ContactData
): Promise<ContactResponse> => {
  const response = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Unable to send your message."
    );
  }

  return data;
};
