import React from "react";
import { Icon, IconProps } from "../Icon";

export type CreativeCommonsByLineProps = Omit<IconProps, "name">;

export const CreativeCommonsByLine = (props: CreativeCommonsByLineProps) => (
  <Icon name="creative-commons-by-line" {...props} />
);
