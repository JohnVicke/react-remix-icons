import React from "react";
import { Icon, IconProps } from "../Icon";

export type RecycleFillProps = Omit<IconProps, "name">;

export const RecycleFill = (props: RecycleFillProps) => (
  <Icon name="recycle-fill" {...props} />
);
