import React from "react";
import { Icon, IconProps } from "../Icon";

export type Bookmark3FillProps = Omit<IconProps, "name">;

export const Bookmark3Fill = (props: Bookmark3FillProps) => (
  <Icon name="bookmark-3-fill" {...props} />
);
