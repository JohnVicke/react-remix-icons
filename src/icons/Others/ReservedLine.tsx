import React from "react";
import { Icon, IconProps } from "../Icon";

export type ReservedLineProps = Omit<IconProps, "name">;

export const ReservedLine = (props: ReservedLineProps) => (
  <Icon name="reserved-line" {...props} />
);
