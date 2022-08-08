import React from "react";
import { Icon, IconProps } from "../Icon";

export type Gift2LineProps = Omit<IconProps, "name">;

export const Gift2Line = (props: Gift2LineProps) => (
  <Icon name="gift-2-line" {...props} />
);
