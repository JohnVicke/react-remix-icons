import React from "react";
import { Icon, IconProps } from "../Icon";

export type PolaroidFillProps = Omit<IconProps, "name">;

export const PolaroidFill = (props: PolaroidFillProps) => (
  <Icon name="polaroid-fill" {...props} />
);
