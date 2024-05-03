export const getUsers = async () => {
  try {
    const response = await fetch("http://localhost:8080/users");
    const users = await response.json();
    return users;
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return [];
  }
};
