import React from "react";
import { Icon, IconProps } from "../Icon";

export type GlobeLineProps = Omit<IconProps, "name">;

export const GlobeLine = (props: GlobeLineProps) => (
  <Icon name="globe-line" {...props} />
);
