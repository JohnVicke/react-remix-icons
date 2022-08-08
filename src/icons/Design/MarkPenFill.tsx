import React from "react";
import { Icon, IconProps } from "../Icon";

export type MarkPenFillProps = Omit<IconProps, "name">;

export const MarkPenFill = (props: MarkPenFillProps) => (
  <Icon name="mark-pen-fill" {...props} />
);
