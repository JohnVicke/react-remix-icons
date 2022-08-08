import React from "react";
import { Icon, IconProps } from "../Icon";

export type RidingFillProps = Omit<IconProps, "name">;

export const RidingFill = (props: RidingFillProps) => (
  <Icon name="riding-fill" {...props} />
);
