/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  Min,
  Max,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { LessonCreateNestedManyWithoutCoursesInput } from "./LessonCreateNestedManyWithoutCoursesInput";
import { Type } from "class-transformer";
import { PaymentCreateNestedManyWithoutCoursesInput } from "./PaymentCreateNestedManyWithoutCoursesInput";
import { EnrollmentCreateNestedManyWithoutCoursesInput } from "./EnrollmentCreateNestedManyWithoutCoursesInput";
import { UserCreateNestedManyWithoutCoursesInput } from "./UserCreateNestedManyWithoutCoursesInput";

@InputType()
class CourseCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => LessonCreateNestedManyWithoutCoursesInput,
  })
  @ValidateNested()
  @Type(() => LessonCreateNestedManyWithoutCoursesInput)
  @IsOptional()
  @Field(() => LessonCreateNestedManyWithoutCoursesInput, {
    nullable: true,
  })
  lessons?: LessonCreateNestedManyWithoutCoursesInput;

  @ApiProperty({
    required: false,
    type: () => PaymentCreateNestedManyWithoutCoursesInput,
  })
  @ValidateNested()
  @Type(() => PaymentCreateNestedManyWithoutCoursesInput)
  @IsOptional()
  @Field(() => PaymentCreateNestedManyWithoutCoursesInput, {
    nullable: true,
  })
  payments?: PaymentCreateNestedManyWithoutCoursesInput;

  @ApiProperty({
    required: false,
    type: () => EnrollmentCreateNestedManyWithoutCoursesInput,
  })
  @ValidateNested()
  @Type(() => EnrollmentCreateNestedManyWithoutCoursesInput)
  @IsOptional()
  @Field(() => EnrollmentCreateNestedManyWithoutCoursesInput, {
    nullable: true,
  })
  enrollments?: EnrollmentCreateNestedManyWithoutCoursesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutCoursesInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutCoursesInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutCoursesInput, {
    nullable: true,
  })
  users?: UserCreateNestedManyWithoutCoursesInput;
}

export { CourseCreateInput as CourseCreateInput };