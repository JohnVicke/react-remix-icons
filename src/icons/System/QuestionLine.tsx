import React from "react";
import { Icon, IconProps } from "../Icon";

export type QuestionLineProps = Omit<IconProps, "name">;

export const QuestionLine = (props: QuestionLineProps) => (
  <Icon name="question-line" {...props} />
);
