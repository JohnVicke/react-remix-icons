import React from "react";
import { Icon, IconProps } from "../Icon";

export type Briefcase4LineProps = Omit<IconProps, "name">;

export const Briefcase4Line = (props: Briefcase4LineProps) => (
  <Icon name="briefcase-4-line" {...props} />
);
