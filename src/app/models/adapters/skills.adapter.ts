import { Skill } from '../skills';

export const adaptApiToSkill = (input: any): Skill[] => {
  const skills: Skill[] = [];

  input.data.map((element: any) => {
    skills.push(adaptApiToOneSkill(element));
  });
  return skills;
};

export const adaptApiToOneSkill = (input: any): Skill => {
  const skill: Skill = {
    id: input.id,
    name: input.attributes.name,
    hook: input.attributes.hook,
    content: input.attributes.content,
    image: {
      thumbnail: `http://localhost:1337${input.attributes.image.data.attributes.formats.thumbnail.url}`,
      medium: `http://localhost:1337${input.attributes.image.data.attributes.formats.medium.url}`,
    },
  };
  return skill;
};
