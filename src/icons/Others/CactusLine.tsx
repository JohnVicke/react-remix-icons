import React from "react";
import { Icon, IconProps } from "../Icon";

export type CactusLineProps = Omit<IconProps, "name">;

export const CactusLine = (props: CactusLineProps) => (
  <Icon name="cactus-line" {...props} />
);
