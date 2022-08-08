import React from "react";
import { Icon, IconProps } from "../Icon";

export type TempHotFillProps = Omit<IconProps, "name">;

export const TempHotFill = (props: TempHotFillProps) => (
  <Icon name="temp-hot-fill" {...props} />
);
