import { SortOrder } from "../../util/SortOrder";

export type LessonOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  content?: SortOrder;
  video?: SortOrder;
  photo?: SortOrder;
  courseId?: SortOrder;
};
