import React from "react";
import { Icon, IconProps } from "../Icon";

export type TempColdFillProps = Omit<IconProps, "name">;

export const TempColdFill = (props: TempColdFillProps) => (
  <Icon name="temp-cold-fill" {...props} />
);
