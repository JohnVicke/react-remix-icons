import React from "react";
import { Icon, IconProps } from "../Icon";

export type TempHotLineProps = Omit<IconProps, "name">;

export const TempHotLine = (props: TempHotLineProps) => (
  <Icon name="temp-hot-line" {...props} />
);
