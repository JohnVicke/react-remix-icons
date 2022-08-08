import React from "react";
import { Icon, IconProps } from "../Icon";

export type PolaroidLineProps = Omit<IconProps, "name">;

export const PolaroidLine = (props: PolaroidLineProps) => (
  <Icon name="polaroid-line" {...props} />
);
