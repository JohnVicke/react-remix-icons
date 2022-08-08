import React from "react";
import { Icon, IconProps } from "../Icon";

export type TaxiWifiFillProps = Omit<IconProps, "name">;

export const TaxiWifiFill = (props: TaxiWifiFillProps) => (
  <Icon name="taxi-wifi-fill" {...props} />
);
