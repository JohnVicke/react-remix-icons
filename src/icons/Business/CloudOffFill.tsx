import React from "react";
import { Icon, IconProps } from "../Icon";

export type CloudOffFillProps = Omit<IconProps, "name">;

export const CloudOffFill = (props: CloudOffFillProps) => (
  <Icon name="cloud-off-fill" {...props} />
);
