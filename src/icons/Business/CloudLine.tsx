import React from "react";
import { Icon, IconProps } from "../Icon";

export type CloudLineProps = Omit<IconProps, "name">;

export const CloudLine = (props: CloudLineProps) => (
  <Icon name="cloud-line" {...props} />
);
