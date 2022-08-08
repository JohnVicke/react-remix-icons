import React from "react";
import { Icon, IconProps } from "../Icon";

export type Refund2LineProps = Omit<IconProps, "name">;

export const Refund2Line = (props: Refund2LineProps) => (
  <Icon name="refund-2-line" {...props} />
);
