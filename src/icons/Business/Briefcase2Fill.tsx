import React from "react";
import { Icon, IconProps } from "../Icon";

export type Briefcase2FillProps = Omit<IconProps, "name">;

export const Briefcase2Fill = (props: Briefcase2FillProps) => (
  <Icon name="briefcase-2-fill" {...props} />
);
