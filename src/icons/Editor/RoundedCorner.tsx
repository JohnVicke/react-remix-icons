import React from "react";
import { Icon, IconProps } from "../Icon";

export type RoundedCornerProps = Omit<IconProps, "name">;

export const RoundedCorner = (props: RoundedCornerProps) => (
  <Icon name="rounded-corner" {...props} />
);
