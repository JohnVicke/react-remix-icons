import React from "react";
import { Icon, IconProps } from "../Icon";

export type QuillPenLineProps = Omit<IconProps, "name">;

export const QuillPenLine = (props: QuillPenLineProps) => (
  <Icon name="quill-pen-line" {...props} />
);
