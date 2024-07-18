import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { EnrollmentListRelationFilter } from "../enrollment/EnrollmentListRelationFilter";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  payments?: PaymentListRelationFilter;
  enrollments?: EnrollmentListRelationFilter;
  title?: StringNullableFilter;
  content?: StringNullableFilter;
  course?: CourseWhereUniqueInput;
};
