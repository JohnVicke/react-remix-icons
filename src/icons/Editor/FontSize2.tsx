import React from "react";
import { Icon, IconProps } from "../Icon";

export type FontSize2Props = Omit<IconProps, "name">;

export const FontSize2 = (props: FontSize2Props) => (
  <Icon name="font-size-2" {...props} />
);
