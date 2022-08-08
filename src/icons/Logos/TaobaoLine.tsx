import React from "react";
import { Icon, IconProps } from "../Icon";

export type TaobaoLineProps = Omit<IconProps, "name">;

export const TaobaoLine = (props: TaobaoLineProps) => (
  <Icon name="taobao-line" {...props} />
);
