import React from "react";
import { Icon, IconProps } from "../Icon";

export type FinderFillProps = Omit<IconProps, "name">;

export const FinderFill = (props: FinderFillProps) => (
  <Icon name="finder-fill" {...props} />
);
