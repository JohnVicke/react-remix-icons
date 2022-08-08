import React from "react";
import { Icon, IconProps } from "../Icon";

export type SliceFillProps = Omit<IconProps, "name">;

export const SliceFill = (props: SliceFillProps) => (
  <Icon name="slice-fill" {...props} />
);
