import React from "react";
import { Icon, IconProps } from "../Icon";

export type Subscript2Props = Omit<IconProps, "name">;

export const Subscript2 = (props: Subscript2Props) => (
  <Icon name="subscript-2" {...props} />
);
