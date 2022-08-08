import React from "react";
import { Icon, IconProps } from "../Icon";

export type LuggageDepositFillProps = Omit<IconProps, "name">;

export const LuggageDepositFill = (props: LuggageDepositFillProps) => (
  <Icon name="luggage-deposit-fill" {...props} />
);
