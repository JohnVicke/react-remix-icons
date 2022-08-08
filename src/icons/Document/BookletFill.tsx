import React from "react";
import { Icon, IconProps } from "../Icon";

export type BookletFillProps = Omit<IconProps, "name">;

export const BookletFill = (props: BookletFillProps) => (
  <Icon name="booklet-fill" {...props} />
);
