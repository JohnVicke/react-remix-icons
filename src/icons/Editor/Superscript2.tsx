import React from "react";
import { Icon, IconProps } from "../Icon";

export type Superscript2Props = Omit<IconProps, "name">;

export const Superscript2 = (props: Superscript2Props) => (
  <Icon name="superscript-2" {...props} />
);
