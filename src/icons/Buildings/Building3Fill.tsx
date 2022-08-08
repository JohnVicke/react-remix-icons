import React from "react";
import { Icon, IconProps } from "../Icon";

export type Building3FillProps = Omit<IconProps, "name">;

export const Building3Fill = (props: Building3FillProps) => (
  <Icon name="building-3-fill" {...props} />
);
