import React from "react";
import { Icon, IconProps } from "../Icon";

export type LightbulbFlashLineProps = Omit<IconProps, "name">;

export const LightbulbFlashLine = (props: LightbulbFlashLineProps) => (
  <Icon name="lightbulb-flash-line" {...props} />
);
