import React from "react";
import { Icon, IconProps } from "../Icon";

export type GlobeFillProps = Omit<IconProps, "name">;

export const GlobeFill = (props: GlobeFillProps) => (
  <Icon name="globe-fill" {...props} />
);
