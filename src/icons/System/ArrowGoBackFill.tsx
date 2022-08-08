import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowGoBackFillProps = Omit<IconProps, "name">;

export const ArrowGoBackFill = (props: ArrowGoBackFillProps) => (
  <Icon name="arrow-go-back-fill" {...props} />
);
