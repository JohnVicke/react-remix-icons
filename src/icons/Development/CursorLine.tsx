import React from "react";
import { Icon, IconProps } from "../Icon";

export type CursorLineProps = Omit<IconProps, "name">;

export const CursorLine = (props: CursorLineProps) => (
  <Icon name="cursor-line" {...props} />
);
