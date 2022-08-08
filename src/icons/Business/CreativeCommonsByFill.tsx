import React from "react";
import { Icon, IconProps } from "../Icon";

export type CreativeCommonsByFillProps = Omit<IconProps, "name">;

export const CreativeCommonsByFill = (props: CreativeCommonsByFillProps) => (
  <Icon name="creative-commons-by-fill" {...props} />
);
