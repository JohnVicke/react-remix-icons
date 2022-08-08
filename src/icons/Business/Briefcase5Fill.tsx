import React from "react";
import { Icon, IconProps } from "../Icon";

export type Briefcase5FillProps = Omit<IconProps, "name">;

export const Briefcase5Fill = (props: Briefcase5FillProps) => (
  <Icon name="briefcase-5-fill" {...props} />
);
