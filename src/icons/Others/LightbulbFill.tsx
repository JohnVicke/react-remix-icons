import React from "react";
import { Icon, IconProps } from "../Icon";

export type LightbulbFillProps = Omit<IconProps, "name">;

export const LightbulbFill = (props: LightbulbFillProps) => (
  <Icon name="lightbulb-fill" {...props} />
);
