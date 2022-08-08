import React from "react";
import { Icon, IconProps } from "../Icon";

export type AlipayFillProps = Omit<IconProps, "name">;

export const AlipayFill = (props: AlipayFillProps) => (
  <Icon name="alipay-fill" {...props} />
);
