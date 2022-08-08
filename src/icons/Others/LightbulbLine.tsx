import React from "react";
import { Icon, IconProps } from "../Icon";

export type LightbulbLineProps = Omit<IconProps, "name">;

export const LightbulbLine = (props: LightbulbLineProps) => (
  <Icon name="lightbulb-line" {...props} />
);
