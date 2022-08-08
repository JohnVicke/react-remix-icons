import React from "react";
import { Icon, IconProps } from "../Icon";

export type ScissorsLineProps = Omit<IconProps, "name">;

export const ScissorsLine = (props: ScissorsLineProps) => (
  <Icon name="scissors-line" {...props} />
);
