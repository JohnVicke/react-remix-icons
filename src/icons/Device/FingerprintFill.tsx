import React from "react";
import { Icon, IconProps } from "../Icon";

export type FingerprintFillProps = Omit<IconProps, "name">;

export const FingerprintFill = (props: FingerprintFillProps) => (
  <Icon name="fingerprint-fill" {...props} />
);
