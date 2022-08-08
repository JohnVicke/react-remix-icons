import React from "react";
import { Icon, IconProps } from "../Icon";

export type Briefcase4FillProps = Omit<IconProps, "name">;

export const Briefcase4Fill = (props: Briefcase4FillProps) => (
  <Icon name="briefcase-4-fill" {...props} />
);
