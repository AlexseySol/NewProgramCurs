import { LessonUpdateManyWithoutCoursesInput } from "./LessonUpdateManyWithoutCoursesInput";
import { PaymentUpdateManyWithoutCoursesInput } from "./PaymentUpdateManyWithoutCoursesInput";
import { EnrollmentUpdateManyWithoutCoursesInput } from "./EnrollmentUpdateManyWithoutCoursesInput";
import { UserUpdateManyWithoutCoursesInput } from "./UserUpdateManyWithoutCoursesInput";

export type CourseUpdateInput = {
  price?: number | null;
  name?: string | null;
  description?: string | null;
  lessons?: LessonUpdateManyWithoutCoursesInput;
  payments?: PaymentUpdateManyWithoutCoursesInput;
  enrollments?: EnrollmentUpdateManyWithoutCoursesInput;
  title?: string | null;
  users?: UserUpdateManyWithoutCoursesInput;
};
