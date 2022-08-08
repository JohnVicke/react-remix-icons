import React from "react";
import { Icon, IconProps } from "../Icon";

export type WaterFlashFillProps = Omit<IconProps, "name">;

export const WaterFlashFill = (props: WaterFlashFillProps) => (
  <Icon name="water-flash-fill" {...props} />
);
