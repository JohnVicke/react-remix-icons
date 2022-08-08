import React from "react";
import { Icon, IconProps } from "../Icon";

export type Html5LineProps = Omit<IconProps, "name">;

export const Html5Line = (props: Html5LineProps) => (
  <Icon name="html5-line" {...props} />
);
