import React from "react";
import { Icon, IconProps } from "../Icon";

export type Briefcase3LineProps = Omit<IconProps, "name">;

export const Briefcase3Line = (props: Briefcase3LineProps) => (
  <Icon name="briefcase-3-line" {...props} />
);
