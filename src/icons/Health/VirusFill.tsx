import React from "react";
import { Icon, IconProps } from "../Icon";

export type VirusFillProps = Omit<IconProps, "name">;

export const VirusFill = (props: VirusFillProps) => (
  <Icon name="virus-fill" {...props} />
);
