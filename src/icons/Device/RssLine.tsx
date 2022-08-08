import React from "react";
import { Icon, IconProps } from "../Icon";

export type RssLineProps = Omit<IconProps, "name">;

export const RssLine = (props: RssLineProps) => (
  <Icon name="rss-line" {...props} />
);
