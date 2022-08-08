import React from "react";
import { Icon, IconProps } from "../Icon";

export type Lock2FillProps = Omit<IconProps, "name">;

export const Lock2Fill = (props: Lock2FillProps) => (
  <Icon name="lock-2-fill" {...props} />
);
