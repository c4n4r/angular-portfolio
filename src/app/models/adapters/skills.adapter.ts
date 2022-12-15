import { Skill } from '../skills';

export const adaptApiToSkill = (input: any): Skill[] => {
  const skills: Skill[] = [];

  input.data.map((element: any) => {
    const skill: Skill = {
      id: element.id,
      name: element.attributes.name,
      hook: element.attributes.hook,
      content: element.attributes.content,
      image: {
        thumbnail: `http://localhost:1337${element.attributes.image.data.attributes.formats.thumbnail.url}`,
        medium: `http://localhost:1337${element.attributes.image.data.attributes.formats.medium.url}`,
      },
    };
    skills.push(skill);
  });
  return skills;
};
