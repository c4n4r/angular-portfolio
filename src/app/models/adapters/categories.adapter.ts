import { Category } from '../categories';

export const adaptApiToCategory = (input: any): Category[] => {
  const categories: Category[] = [];

  //adapt
  input.data.map((element: any) => {
    const category: Category = {
      id: element.id,
      name: element.attributes.name,
      image: {
        thumbnail: `http://localhost:1337${element.attributes.image.data.attributes.formats.thumbnail.url}`,
        medium: `http://localhost:1337${element.attributes.image.data.attributes.formats.medium.url}`,
      },
    };
    categories.push(category);
  });

  return categories;
};

/**
 * 
 * Alternative un peu plus old school : 
 * 
 *export function adaptApiToCategory(input: any): Category[] {
  const categories: Category[] = [];

  //adapt
  input.data.map((element: any) => {
    const category: Category = {
      id: element.id,
      name: element.attributes.name,
      image: {
        thumbnail: `http://localhost:1337${element.attributes.image.data.attributes.formats.thumbnail.url}`,
        medium: `http://localhost:1337${element.attributes.image.data.attributes.formats.medium.url}`,
      },
    };
    categories.push(category);
  });

  return categories;
}
 * 
 * 
 * 
 */
