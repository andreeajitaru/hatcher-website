import { TFunction } from "react-i18next";
export interface ContentBlockProps {
  title: string;
  content: string;
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  icon?: string;
  video?: any;
  button?: (
    | {
        title: string;
        color?: undefined;
      }
    | {
        title: string;
        color: string;
      }
  )[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
}
