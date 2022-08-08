import React from "react";
import { Icon, IconProps } from "../Icon";

export type MastercardFillProps = Omit<IconProps, "name">;

export const MastercardFill = (props: MastercardFillProps) => (
  <Icon name="mastercard-fill" {...props} />
);
