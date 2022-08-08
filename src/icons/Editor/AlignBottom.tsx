import React from "react";
import { Icon, IconProps } from "../Icon";

export type AlignBottomProps = Omit<IconProps, "name">;

export const AlignBottom = (props: AlignBottomProps) => (
  <Icon name="align-bottom" {...props} />
);
