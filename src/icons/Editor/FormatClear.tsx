import React from "react";
import { Icon, IconProps } from "../Icon";

export type FormatClearProps = Omit<IconProps, "name">;

export const FormatClear = (props: FormatClearProps) => (
  <Icon name="format-clear" {...props} />
);
