import { InputJsonValue } from "../../types";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type LessonUpdateInput = {
  title?: string | null;
  content?: string | null;
  video?: InputJsonValue;
  photo?: InputJsonValue;
  course?: CourseWhereUniqueInput | null;
};
