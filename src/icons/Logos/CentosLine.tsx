import React from "react";
import { Icon, IconProps } from "../Icon";

export type CentosLineProps = Omit<IconProps, "name">;

export const CentosLine = (props: CentosLineProps) => (
  <Icon name="centos-line" {...props} />
);
