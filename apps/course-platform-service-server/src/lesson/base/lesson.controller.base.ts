/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { LessonService } from "../lesson.service";
import { LessonCreateInput } from "./LessonCreateInput";
import { Lesson } from "./Lesson";
import { LessonFindManyArgs } from "./LessonFindManyArgs";
import { LessonWhereUniqueInput } from "./LessonWhereUniqueInput";
import { LessonUpdateInput } from "./LessonUpdateInput";

export class LessonControllerBase {
  constructor(protected readonly service: LessonService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Lesson })
  async createLesson(@common.Body() data: LessonCreateInput): Promise<Lesson> {
    return await this.service.createLesson({
      data: {
        ...data,

        course: data.course
          ? {
              connect: data.course,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        content: true,
        video: true,
        photo: true,

        course: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Lesson] })
  @ApiNestedQuery(LessonFindManyArgs)
  async lessons(@common.Req() request: Request): Promise<Lesson[]> {
    const args = plainToClass(LessonFindManyArgs, request.query);
    return this.service.lessons({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        content: true,
        video: true,
        photo: true,

        course: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Lesson })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async lesson(
    @common.Param() params: LessonWhereUniqueInput
  ): Promise<Lesson | null> {
    const result = await this.service.lesson({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        content: true,
        video: true,
        photo: true,

        course: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Lesson })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLesson(
    @common.Param() params: LessonWhereUniqueInput,
    @common.Body() data: LessonUpdateInput
  ): Promise<Lesson | null> {
    try {
      return await this.service.updateLesson({
        where: params,
        data: {
          ...data,

          course: data.course
            ? {
                connect: data.course,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          title: true,
          content: true,
          video: true,
          photo: true,

          course: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Lesson })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLesson(
    @common.Param() params: LessonWhereUniqueInput
  ): Promise<Lesson | null> {
    try {
      return await this.service.deleteLesson({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          title: true,
          content: true,
          video: true,
          photo: true,

          course: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}