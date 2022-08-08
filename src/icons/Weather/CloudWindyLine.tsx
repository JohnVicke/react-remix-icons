import React from "react";
import { Icon, IconProps } from "../Icon";

export type CloudWindyLineProps = Omit<IconProps, "name">;

export const CloudWindyLine = (props: CloudWindyLineProps) => (
  <Icon name="cloud-windy-line" {...props} />
);
