import { InputJsonValue } from "../../types";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type LessonCreateInput = {
  title?: string | null;
  content?: string | null;
  video?: InputJsonValue;
  photo?: InputJsonValue;
  course?: CourseWhereUniqueInput | null;
};
