import React from "react";
import { Icon, IconProps } from "../Icon";

export type Screenshot2FillProps = Omit<IconProps, "name">;

export const Screenshot2Fill = (props: Screenshot2FillProps) => (
  <Icon name="screenshot-2-fill" {...props} />
);
