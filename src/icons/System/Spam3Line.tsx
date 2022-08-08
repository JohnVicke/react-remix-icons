import React from "react";
import { Icon, IconProps } from "../Icon";

export type Spam3LineProps = Omit<IconProps, "name">;

export const Spam3Line = (props: Spam3LineProps) => (
  <Icon name="spam-3-line" {...props} />
);
