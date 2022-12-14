import { Techno } from '../technos';

export const adaptApiToTechno = (input: any): Techno[] => {
  const technos: Techno[] = [];

  input.data.map((element: any) => {
    const techno: Techno = {
      id: element.id,
      name: element.attributes.name,
      hook: element.attributes.hook,
      content: element.attributes.content,
      image: {
        thumbnail: `http://localhost:1337${element.attributes.image.data.attributes.formats.thumbnail.url}`,
        medium: `http://localhost:1337${element.attributes.image.data.attributes.formats.medium.url}`,
      },
    };
    technos.push(techno);
  });
  return technos;
};
