import React from "react";
import { Icon, IconProps } from "../Icon";

export type Screenshot2LineProps = Omit<IconProps, "name">;

export const Screenshot2Line = (props: Screenshot2LineProps) => (
  <Icon name="screenshot-2-line" {...props} />
);
