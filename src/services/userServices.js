export const authenticateUser = async (name, password) => {
  try {
    const response = await fetch("http://localhost:8080/users");
    const { users } = await response.json();

    return users;
  } catch (error) {
    console.error("Error al autenticar usuario:", error);
    return false;
  }
};
