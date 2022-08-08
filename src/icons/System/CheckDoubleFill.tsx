import React from "react";
import { Icon, IconProps } from "../Icon";

export type CheckDoubleFillProps = Omit<IconProps, "name">;

export const CheckDoubleFill = (props: CheckDoubleFillProps) => (
  <Icon name="check-double-fill" {...props} />
);
