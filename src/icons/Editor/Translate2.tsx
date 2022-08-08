import React from "react";
import { Icon, IconProps } from "../Icon";

export type Translate2Props = Omit<IconProps, "name">;

export const Translate2 = (props: Translate2Props) => (
  <Icon name="translate-2" {...props} />
);
