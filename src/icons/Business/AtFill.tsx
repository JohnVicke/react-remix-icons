import React from "react";
import { Icon, IconProps } from "../Icon";

export type AtFillProps = Omit<IconProps, "name">;

export const AtFill = (props: AtFillProps) => (
  <Icon name="at-fill" {...props} />
);
