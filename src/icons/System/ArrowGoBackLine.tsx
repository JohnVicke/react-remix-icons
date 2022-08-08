import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowGoBackLineProps = Omit<IconProps, "name">;

export const ArrowGoBackLine = (props: ArrowGoBackLineProps) => (
  <Icon name="arrow-go-back-line" {...props} />
);
