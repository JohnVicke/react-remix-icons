import React from "react";
import { Icon, IconProps } from "../Icon";

export type QuillPenFillProps = Omit<IconProps, "name">;

export const QuillPenFill = (props: QuillPenFillProps) => (
  <Icon name="quill-pen-fill" {...props} />
);
