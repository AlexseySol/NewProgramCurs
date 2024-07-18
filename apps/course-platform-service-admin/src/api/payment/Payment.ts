import { User } from "../user/User";
import { Course } from "../course/Course";

export type Payment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  paymentDate: Date | null;
  user?: User | null;
  course?: Course | null;
};
