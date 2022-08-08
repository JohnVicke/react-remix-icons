import React from "react";
import { Icon, IconProps } from "../Icon";

export type PassportLineProps = Omit<IconProps, "name">;

export const PassportLine = (props: PassportLineProps) => (
  <Icon name="passport-line" {...props} />
);
