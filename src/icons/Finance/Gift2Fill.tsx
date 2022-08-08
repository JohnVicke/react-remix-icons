import React from "react";
import { Icon, IconProps } from "../Icon";

export type Gift2FillProps = Omit<IconProps, "name">;

export const Gift2Fill = (props: Gift2FillProps) => (
  <Icon name="gift-2-fill" {...props} />
);
