import React from "react";
import { Icon, IconProps } from "../Icon";

export type AlipayLineProps = Omit<IconProps, "name">;

export const AlipayLine = (props: AlipayLineProps) => (
  <Icon name="alipay-line" {...props} />
);
