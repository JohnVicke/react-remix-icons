import React from "react";
import { Icon, IconProps } from "../Icon";

export type MastercardLineProps = Omit<IconProps, "name">;

export const MastercardLine = (props: MastercardLineProps) => (
  <Icon name="mastercard-line" {...props} />
);
