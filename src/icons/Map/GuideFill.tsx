import React from "react";
import { Icon, IconProps } from "../Icon";

export type GuideFillProps = Omit<IconProps, "name">;

export const GuideFill = (props: GuideFillProps) => (
  <Icon name="guide-fill" {...props} />
);
