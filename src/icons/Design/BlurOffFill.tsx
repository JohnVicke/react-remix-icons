import React from "react";
import { Icon, IconProps } from "../Icon";

export type BlurOffFillProps = Omit<IconProps, "name">;

export const BlurOffFill = (props: BlurOffFillProps) => (
  <Icon name="blur-off-fill" {...props} />
);
