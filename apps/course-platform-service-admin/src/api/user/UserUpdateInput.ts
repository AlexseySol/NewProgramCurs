import { InputJsonValue } from "../../types";
import { PaymentUpdateManyWithoutUsersInput } from "./PaymentUpdateManyWithoutUsersInput";
import { EnrollmentUpdateManyWithoutUsersInput } from "./EnrollmentUpdateManyWithoutUsersInput";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  payments?: PaymentUpdateManyWithoutUsersInput;
  enrollments?: EnrollmentUpdateManyWithoutUsersInput;
  title?: string | null;
  content?: string | null;
  course?: CourseWhereUniqueInput | null;
};
