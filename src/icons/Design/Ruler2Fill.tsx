import React from "react";
import { Icon, IconProps } from "../Icon";

export type Ruler2FillProps = Omit<IconProps, "name">;

export const Ruler2Fill = (props: Ruler2FillProps) => (
  <Icon name="ruler-2-fill" {...props} />
);
