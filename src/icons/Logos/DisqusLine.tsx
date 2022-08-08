import React from "react";
import { Icon, IconProps } from "../Icon";

export type DisqusLineProps = Omit<IconProps, "name">;

export const DisqusLine = (props: DisqusLineProps) => (
  <Icon name="disqus-line" {...props} />
);
