import React from "react";
import { Icon, IconProps } from "../Icon";

export type BookletLineProps = Omit<IconProps, "name">;

export const BookletLine = (props: BookletLineProps) => (
  <Icon name="booklet-line" {...props} />
);
