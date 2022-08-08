import React from "react";
import { Icon, IconProps } from "../Icon";

export type LightbulbFlashFillProps = Omit<IconProps, "name">;

export const LightbulbFlashFill = (props: LightbulbFlashFillProps) => (
  <Icon name="lightbulb-flash-fill" {...props} />
);
