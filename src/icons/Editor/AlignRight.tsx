import React from "react";
import { Icon, IconProps } from "../Icon";

export type AlignRightProps = Omit<IconProps, "name">;

export const AlignRight = (props: AlignRightProps) => (
  <Icon name="align-right" {...props} />
);
