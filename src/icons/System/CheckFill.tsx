import React from "react";
import { Icon, IconProps } from "../Icon";

export type CheckFillProps = Omit<IconProps, "name">;

export const CheckFill = (props: CheckFillProps) => (
  <Icon name="check-fill" {...props} />
);
