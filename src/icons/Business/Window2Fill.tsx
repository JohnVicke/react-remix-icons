import React from "react";
import { Icon, IconProps } from "../Icon";

export type Window2FillProps = Omit<IconProps, "name">;

export const Window2Fill = (props: Window2FillProps) => (
  <Icon name="window-2-fill" {...props} />
);
