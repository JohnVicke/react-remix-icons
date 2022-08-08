import React from "react";
import { Icon, IconProps } from "../Icon";

export type DisqusFillProps = Omit<IconProps, "name">;

export const DisqusFill = (props: DisqusFillProps) => (
  <Icon name="disqus-fill" {...props} />
);
