import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type PaymentWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  paymentDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
  course?: CourseWhereUniqueInput;
};
