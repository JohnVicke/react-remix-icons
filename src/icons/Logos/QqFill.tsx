import React from "react";
import { Icon, IconProps } from "../Icon";

export type QqFillProps = Omit<IconProps, "name">;

export const QqFill = (props: QqFillProps) => (
  <Icon name="qq-fill" {...props} />
);
