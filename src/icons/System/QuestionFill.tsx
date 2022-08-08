import React from "react";
import { Icon, IconProps } from "../Icon";

export type QuestionFillProps = Omit<IconProps, "name">;

export const QuestionFill = (props: QuestionFillProps) => (
  <Icon name="question-fill" {...props} />
);
