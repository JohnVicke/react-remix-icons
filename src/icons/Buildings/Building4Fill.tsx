import React from "react";
import { Icon, IconProps } from "../Icon";

export type Building4FillProps = Omit<IconProps, "name">;

export const Building4Fill = (props: Building4FillProps) => (
  <Icon name="building-4-fill" {...props} />
);
