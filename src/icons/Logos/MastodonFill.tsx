import React from "react";
import { Icon, IconProps } from "../Icon";

export type MastodonFillProps = Omit<IconProps, "name">;

export const MastodonFill = (props: MastodonFillProps) => (
  <Icon name="mastodon-fill" {...props} />
);
