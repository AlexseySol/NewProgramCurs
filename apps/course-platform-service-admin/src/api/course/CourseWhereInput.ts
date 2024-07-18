import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LessonListRelationFilter } from "../lesson/LessonListRelationFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { EnrollmentListRelationFilter } from "../enrollment/EnrollmentListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type CourseWhereInput = {
  id?: StringFilter;
  price?: FloatNullableFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  lessons?: LessonListRelationFilter;
  payments?: PaymentListRelationFilter;
  enrollments?: EnrollmentListRelationFilter;
  title?: StringNullableFilter;
  users?: UserListRelationFilter;
};
