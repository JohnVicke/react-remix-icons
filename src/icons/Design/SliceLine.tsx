import React from "react";
import { Icon, IconProps } from "../Icon";

export type SliceLineProps = Omit<IconProps, "name">;

export const SliceLine = (props: SliceLineProps) => (
  <Icon name="slice-line" {...props} />
);
