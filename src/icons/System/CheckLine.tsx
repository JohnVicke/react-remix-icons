import React from "react";
import { Icon, IconProps } from "../Icon";

export type CheckLineProps = Omit<IconProps, "name">;

export const CheckLine = (props: CheckLineProps) => (
  <Icon name="check-line" {...props} />
);
