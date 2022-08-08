import React from "react";
import { Icon, IconProps } from "../Icon";

export type Window2LineProps = Omit<IconProps, "name">;

export const Window2Line = (props: Window2LineProps) => (
  <Icon name="window-2-line" {...props} />
);
