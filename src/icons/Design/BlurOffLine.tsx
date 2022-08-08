import React from "react";
import { Icon, IconProps } from "../Icon";

export type BlurOffLineProps = Omit<IconProps, "name">;

export const BlurOffLine = (props: BlurOffLineProps) => (
  <Icon name="blur-off-line" {...props} />
);
