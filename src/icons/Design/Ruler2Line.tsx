import React from "react";
import { Icon, IconProps } from "../Icon";

export type Ruler2LineProps = Omit<IconProps, "name">;

export const Ruler2Line = (props: Ruler2LineProps) => (
  <Icon name="ruler-2-line" {...props} />
);
