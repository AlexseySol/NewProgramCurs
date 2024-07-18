import { InputJsonValue } from "../../types";
import { PaymentCreateNestedManyWithoutUsersInput } from "./PaymentCreateNestedManyWithoutUsersInput";
import { EnrollmentCreateNestedManyWithoutUsersInput } from "./EnrollmentCreateNestedManyWithoutUsersInput";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  payments?: PaymentCreateNestedManyWithoutUsersInput;
  enrollments?: EnrollmentCreateNestedManyWithoutUsersInput;
  title?: string | null;
  content?: string | null;
  course?: CourseWhereUniqueInput | null;
};
