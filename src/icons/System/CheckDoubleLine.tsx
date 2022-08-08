import React from "react";
import { Icon, IconProps } from "../Icon";

export type CheckDoubleLineProps = Omit<IconProps, "name">;

export const CheckDoubleLine = (props: CheckDoubleLineProps) => (
  <Icon name="check-double-line" {...props} />
);
