import React from "react";
import { Icon, IconProps } from "../Icon";

export type LuggageDepositLineProps = Omit<IconProps, "name">;

export const LuggageDepositLine = (props: LuggageDepositLineProps) => (
  <Icon name="luggage-deposit-line" {...props} />
);
