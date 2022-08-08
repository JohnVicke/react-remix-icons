import React from "react";
import { Icon, IconProps } from "../Icon";

export type TempColdLineProps = Omit<IconProps, "name">;

export const TempColdLine = (props: TempColdLineProps) => (
  <Icon name="temp-cold-line" {...props} />
);
