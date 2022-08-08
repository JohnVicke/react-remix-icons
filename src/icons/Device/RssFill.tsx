import React from "react";
import { Icon, IconProps } from "../Icon";

export type RssFillProps = Omit<IconProps, "name">;

export const RssFill = (props: RssFillProps) => (
  <Icon name="rss-fill" {...props} />
);
