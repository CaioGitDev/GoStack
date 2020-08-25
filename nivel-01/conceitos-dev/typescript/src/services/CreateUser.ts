
interface TechObject {
  title: string;
  experience: number;
}

interface User {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObject>
}

export default function createUser(user: User) {
  const createdUser = {
    name: user.name,
    email: user.email,
    password: user.password,
  };
  return createdUser;
}
