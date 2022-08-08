import React from "react";
import { Icon, IconProps } from "../Icon";

export type RemixiconLineProps = Omit<IconProps, "name">;

export const RemixiconLine = (props: RemixiconLineProps) => (
  <Icon name="remixicon-line" {...props} />
);
