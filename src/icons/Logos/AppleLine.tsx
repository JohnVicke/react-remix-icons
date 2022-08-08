import React from "react";
import { Icon, IconProps } from "../Icon";

export type AppleLineProps = Omit<IconProps, "name">;

export const AppleLine = (props: AppleLineProps) => (
  <Icon name="apple-line" {...props} />
);
