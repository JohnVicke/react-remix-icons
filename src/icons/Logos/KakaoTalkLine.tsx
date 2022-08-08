import React from "react";
import { Icon, IconProps } from "../Icon";

export type KakaoTalkLineProps = Omit<IconProps, "name">;

export const KakaoTalkLine = (props: KakaoTalkLineProps) => (
  <Icon name="kakao-talk-line" {...props} />
);
