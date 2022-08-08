import React from "react";
import { Icon, IconProps } from "../Icon";

export type TaobaoFillProps = Omit<IconProps, "name">;

export const TaobaoFill = (props: TaobaoFillProps) => (
  <Icon name="taobao-fill" {...props} />
);
