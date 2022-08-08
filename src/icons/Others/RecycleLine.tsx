import React from "react";
import { Icon, IconProps } from "../Icon";

export type RecycleLineProps = Omit<IconProps, "name">;

export const RecycleLine = (props: RecycleLineProps) => (
  <Icon name="recycle-line" {...props} />
);
