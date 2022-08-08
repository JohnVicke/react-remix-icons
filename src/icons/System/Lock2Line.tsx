import React from "react";
import { Icon, IconProps } from "../Icon";

export type Lock2LineProps = Omit<IconProps, "name">;

export const Lock2Line = (props: Lock2LineProps) => (
  <Icon name="lock-2-line" {...props} />
);
