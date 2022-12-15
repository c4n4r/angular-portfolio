export interface Skill {
  id: number;
  name: string;
  hook: string;
  content: string;
  image?: {
    thumbnail: string;
    medium: string;
  };
}
