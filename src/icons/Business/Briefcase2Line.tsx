import React from "react";
import { Icon, IconProps } from "../Icon";

export type Briefcase2LineProps = Omit<IconProps, "name">;

export const Briefcase2Line = (props: Briefcase2LineProps) => (
  <Icon name="briefcase-2-line" {...props} />
);
