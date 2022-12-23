import { User } from "./User";

export interface Post {
  user: User;
  id: number;
  title: string;
  body: string;
}
