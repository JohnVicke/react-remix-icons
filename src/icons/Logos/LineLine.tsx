import React from "react";
import { Icon, IconProps } from "../Icon";

export type LineLineProps = Omit<IconProps, "name">;

export const LineLine = (props: LineLineProps) => (
  <Icon name="line-line" {...props} />
);
