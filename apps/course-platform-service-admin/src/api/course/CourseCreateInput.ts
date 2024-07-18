import { LessonCreateNestedManyWithoutCoursesInput } from "./LessonCreateNestedManyWithoutCoursesInput";
import { PaymentCreateNestedManyWithoutCoursesInput } from "./PaymentCreateNestedManyWithoutCoursesInput";
import { EnrollmentCreateNestedManyWithoutCoursesInput } from "./EnrollmentCreateNestedManyWithoutCoursesInput";
import { UserCreateNestedManyWithoutCoursesInput } from "./UserCreateNestedManyWithoutCoursesInput";

export type CourseCreateInput = {
  price?: number | null;
  name?: string | null;
  description?: string | null;
  lessons?: LessonCreateNestedManyWithoutCoursesInput;
  payments?: PaymentCreateNestedManyWithoutCoursesInput;
  enrollments?: EnrollmentCreateNestedManyWithoutCoursesInput;
  title?: string | null;
  users?: UserCreateNestedManyWithoutCoursesInput;
};
