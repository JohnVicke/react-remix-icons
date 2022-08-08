import React from "react";
import { Icon, IconProps } from "../Icon";

export type WubiInputProps = Omit<IconProps, "name">;

export const WubiInput = (props: WubiInputProps) => (
  <Icon name="wubi-input" {...props} />
);
