import React from "react";
import { Icon, IconProps } from "../Icon";

export type ExchangeFillProps = Omit<IconProps, "name">;

export const ExchangeFill = (props: ExchangeFillProps) => (
  <Icon name="exchange-fill" {...props} />
);
