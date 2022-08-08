import React from "react";
import { Icon, IconProps } from "../Icon";

export type FocusLineProps = Omit<IconProps, "name">;

export const FocusLine = (props: FocusLineProps) => (
  <Icon name="focus-line" {...props} />
);
