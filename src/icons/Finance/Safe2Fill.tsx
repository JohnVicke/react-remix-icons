import React from "react";
import { Icon, IconProps } from "../Icon";

export type Safe2FillProps = Omit<IconProps, "name">;

export const Safe2Fill = (props: Safe2FillProps) => (
  <Icon name="safe-2-fill" {...props} />
);
