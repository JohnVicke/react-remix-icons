import React from "react";
import { Icon, IconProps } from "../Icon";

export type WaterFlashLineProps = Omit<IconProps, "name">;

export const WaterFlashLine = (props: WaterFlashLineProps) => (
  <Icon name="water-flash-line" {...props} />
);
