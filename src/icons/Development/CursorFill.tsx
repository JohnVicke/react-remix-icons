import React from "react";
import { Icon, IconProps } from "../Icon";

export type CursorFillProps = Omit<IconProps, "name">;

export const CursorFill = (props: CursorFillProps) => (
  <Icon name="cursor-fill" {...props} />
);
