import { SortOrder } from "../../util/SortOrder";

export type EnrollmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  enrolledAt?: SortOrder;
  userId?: SortOrder;
  courseId?: SortOrder;
};
