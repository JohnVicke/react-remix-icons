import React from "react";
import { Icon, IconProps } from "../Icon";

export type Refund2FillProps = Omit<IconProps, "name">;

export const Refund2Fill = (props: Refund2FillProps) => (
  <Icon name="refund-2-fill" {...props} />
);
