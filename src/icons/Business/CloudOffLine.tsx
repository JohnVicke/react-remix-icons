import React from "react";
import { Icon, IconProps } from "../Icon";

export type CloudOffLineProps = Omit<IconProps, "name">;

export const CloudOffLine = (props: CloudOffLineProps) => (
  <Icon name="cloud-off-line" {...props} />
);
