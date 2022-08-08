import React from "react";
import { Icon, IconProps } from "../Icon";

export type ReactjsLineProps = Omit<IconProps, "name">;

export const ReactjsLine = (props: ReactjsLineProps) => (
  <Icon name="reactjs-line" {...props} />
);
