import { SortOrder } from "../../util/SortOrder";

export type CourseOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  price?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  title?: SortOrder;
};
