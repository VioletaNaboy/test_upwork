import type { Struct, Schema } from '@strapi/strapi';

export interface ListItemsList extends Struct.ComponentSchema {
  collectionName: 'components_list_items_lists';
  info: {
    displayName: 'itemsList';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    descr: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'list.items-list': ListItemsList;
    }
  }
}
