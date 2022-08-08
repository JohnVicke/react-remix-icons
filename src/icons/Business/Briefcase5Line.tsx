import React from "react";
import { Icon, IconProps } from "../Icon";

export type Briefcase5LineProps = Omit<IconProps, "name">;

export const Briefcase5Line = (props: Briefcase5LineProps) => (
  <Icon name="briefcase-5-line" {...props} />
);
