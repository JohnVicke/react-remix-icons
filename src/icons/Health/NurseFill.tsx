import React from "react";
import { Icon, IconProps } from "../Icon";

export type NurseFillProps = Omit<IconProps, "name">;

export const NurseFill = (props: NurseFillProps) => (
  <Icon name="nurse-fill" {...props} />
);
