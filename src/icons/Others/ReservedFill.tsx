import React from "react";
import { Icon, IconProps } from "../Icon";

export type ReservedFillProps = Omit<IconProps, "name">;

export const ReservedFill = (props: ReservedFillProps) => (
  <Icon name="reserved-fill" {...props} />
);
