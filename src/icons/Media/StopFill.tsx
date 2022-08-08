import React from "react";
import { Icon, IconProps } from "../Icon";

export type StopFillProps = Omit<IconProps, "name">;

export const StopFill = (props: StopFillProps) => (
  <Icon name="stop-fill" {...props} />
);
