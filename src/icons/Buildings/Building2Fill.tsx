import React from "react";
import { Icon, IconProps } from "../Icon";

export type Building2FillProps = Omit<IconProps, "name">;

export const Building2Fill = (props: Building2FillProps) => (
  <Icon name="building-2-fill" {...props} />
);
