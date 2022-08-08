import React from "react";
import { Icon, IconProps } from "../Icon";

export type PassportFillProps = Omit<IconProps, "name">;

export const PassportFill = (props: PassportFillProps) => (
  <Icon name="passport-fill" {...props} />
);
