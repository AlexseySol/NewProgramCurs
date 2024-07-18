import { JsonValue } from "type-fest";
import { Payment } from "../payment/Payment";
import { Enrollment } from "../enrollment/Enrollment";
import { Course } from "../course/Course";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  payments?: Array<Payment>;
  enrollments?: Array<Enrollment>;
  title: string | null;
  content: string | null;
  course?: Course | null;
};
