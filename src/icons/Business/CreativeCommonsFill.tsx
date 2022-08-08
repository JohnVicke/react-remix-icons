import React from "react";
import { Icon, IconProps } from "../Icon";

export type CreativeCommonsFillProps = Omit<IconProps, "name">;

export const CreativeCommonsFill = (props: CreativeCommonsFillProps) => (
  <Icon name="creative-commons-fill" {...props} />
);
