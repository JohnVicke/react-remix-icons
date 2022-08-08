import React from "react";
import { Icon, IconProps } from "../Icon";

export type CloudWindyFillProps = Omit<IconProps, "name">;

export const CloudWindyFill = (props: CloudWindyFillProps) => (
  <Icon name="cloud-windy-fill" {...props} />
);
