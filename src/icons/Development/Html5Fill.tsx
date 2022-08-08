import React from "react";
import { Icon, IconProps } from "../Icon";

export type Html5FillProps = Omit<IconProps, "name">;

export const Html5Fill = (props: Html5FillProps) => (
  <Icon name="html5-fill" {...props} />
);
