import React from "react";
import { Icon, IconProps } from "../Icon";

export type BoxingLineProps = Omit<IconProps, "name">;

export const BoxingLine = (props: BoxingLineProps) => (
  <Icon name="boxing-line" {...props} />
);
