import React from "react";
import { Icon, IconProps } from "../Icon";

export type RemixiconFillProps = Omit<IconProps, "name">;

export const RemixiconFill = (props: RemixiconFillProps) => (
  <Icon name="remixicon-fill" {...props} />
);
