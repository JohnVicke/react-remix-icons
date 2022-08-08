import React from "react";
import { Icon, IconProps } from "../Icon";

export type FinderLineProps = Omit<IconProps, "name">;

export const FinderLine = (props: FinderLineProps) => (
  <Icon name="finder-line" {...props} />
);
