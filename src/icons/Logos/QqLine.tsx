import React from "react";
import { Icon, IconProps } from "../Icon";

export type QqLineProps = Omit<IconProps, "name">;

export const QqLine = (props: QqLineProps) => (
  <Icon name="qq-line" {...props} />
);
