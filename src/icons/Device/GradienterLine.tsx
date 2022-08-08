import React from "react";
import { Icon, IconProps } from "../Icon";

export type GradienterLineProps = Omit<IconProps, "name">;

export const GradienterLine = (props: GradienterLineProps) => (
  <Icon name="gradienter-line" {...props} />
);
