import React from "react";
import { Icon, IconProps } from "../Icon";

export type BehanceFillProps = Omit<IconProps, "name">;

export const BehanceFill = (props: BehanceFillProps) => (
  <Icon name="behance-fill" {...props} />
);
