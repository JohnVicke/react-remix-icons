import React from "react";
import { Icon, IconProps } from "../Icon";

export type BoxingFillProps = Omit<IconProps, "name">;

export const BoxingFill = (props: BoxingFillProps) => (
  <Icon name="boxing-fill" {...props} />
);
