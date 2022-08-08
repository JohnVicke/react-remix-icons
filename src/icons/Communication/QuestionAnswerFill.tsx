import React from "react";
import { Icon, IconProps } from "../Icon";

export type QuestionAnswerFillProps = Omit<IconProps, "name">;

export const QuestionAnswerFill = (props: QuestionAnswerFillProps) => (
  <Icon name="question-answer-fill" {...props} />
);
