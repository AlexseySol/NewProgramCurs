import { Lesson } from "../lesson/Lesson";
import { Payment } from "../payment/Payment";
import { Enrollment } from "../enrollment/Enrollment";
import { User } from "../user/User";

export type Course = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  price: number | null;
  name: string | null;
  description: string | null;
  lessons?: Array<Lesson>;
  payments?: Array<Payment>;
  enrollments?: Array<Enrollment>;
  title: string | null;
  users?: Array<User>;
};
