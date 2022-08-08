import React from "react";
import { Icon, IconProps } from "../Icon";

export type DropLineProps = Omit<IconProps, "name">;

export const DropLine = (props: DropLineProps) => (
  <Icon name="drop-line" {...props} />
);
