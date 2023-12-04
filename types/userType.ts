export type userType = {
  _id: string;
  name: string;
  email: string;
  password: string;
  image: string;
  address?: string;
  occupation?: string;
  role: "user" | "admin";
  createdAt: string;
  updatedAt: string;
  __v: number;
};
