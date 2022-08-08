import React from "react";
import { Icon, IconProps } from "../Icon";

export type QuestionAnswerLineProps = Omit<IconProps, "name">;

export const QuestionAnswerLine = (props: QuestionAnswerLineProps) => (
  <Icon name="question-answer-line" {...props} />
);
