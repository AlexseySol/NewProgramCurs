import { JsonValue } from "type-fest";
import { Course } from "../course/Course";

export type Lesson = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  content: string | null;
  video: JsonValue;
  photo: JsonValue;
  course?: Course | null;
};
