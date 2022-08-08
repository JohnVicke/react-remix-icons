import React from "react";
import { Icon, IconProps } from "../Icon";

export type Briefcase3FillProps = Omit<IconProps, "name">;

export const Briefcase3Fill = (props: Briefcase3FillProps) => (
  <Icon name="briefcase-3-fill" {...props} />
);
