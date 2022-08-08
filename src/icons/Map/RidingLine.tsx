import React from "react";
import { Icon, IconProps } from "../Icon";

export type RidingLineProps = Omit<IconProps, "name">;

export const RidingLine = (props: RidingLineProps) => (
  <Icon name="riding-line" {...props} />
);
