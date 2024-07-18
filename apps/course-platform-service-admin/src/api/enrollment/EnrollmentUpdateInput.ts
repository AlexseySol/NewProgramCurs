import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type EnrollmentUpdateInput = {
  enrolledAt?: Date | null;
  user?: UserWhereUniqueInput | null;
  course?: CourseWhereUniqueInput | null;
};
