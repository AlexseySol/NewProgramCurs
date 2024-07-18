import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type LessonWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  content?: StringNullableFilter;
  video?: JsonFilter;
  photo?: JsonFilter;
  course?: CourseWhereUniqueInput;
};
