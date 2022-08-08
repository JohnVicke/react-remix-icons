import React from "react";
import { Icon, IconProps } from "../Icon";

export type Strikethrough2Props = Omit<IconProps, "name">;

export const Strikethrough2 = (props: Strikethrough2Props) => (
  <Icon name="strikethrough-2" {...props} />
);
