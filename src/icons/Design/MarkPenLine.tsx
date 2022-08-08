import React from "react";
import { Icon, IconProps } from "../Icon";

export type MarkPenLineProps = Omit<IconProps, "name">;

export const MarkPenLine = (props: MarkPenLineProps) => (
  <Icon name="mark-pen-line" {...props} />
);
