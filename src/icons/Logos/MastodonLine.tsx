import React from "react";
import { Icon, IconProps } from "../Icon";

export type MastodonLineProps = Omit<IconProps, "name">;

export const MastodonLine = (props: MastodonLineProps) => (
  <Icon name="mastodon-line" {...props} />
);
