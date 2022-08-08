import React from "react";
import { Icon, IconProps } from "../Icon";

export type Building2LineProps = Omit<IconProps, "name">;

export const Building2Line = (props: Building2LineProps) => (
  <Icon name="building-2-line" {...props} />
);
