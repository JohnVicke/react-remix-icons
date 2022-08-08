import React from "react";
import { Icon, IconProps } from "../Icon";

export type FingerprintLineProps = Omit<IconProps, "name">;

export const FingerprintLine = (props: FingerprintLineProps) => (
  <Icon name="fingerprint-line" {...props} />
);
