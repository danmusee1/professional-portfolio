import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'PageInfo',
  type: 'document',
  fields: [
  {
    name:"name",
    tittle:"Name",
    type:"string",
  },
  {
    name:"role",
    tittle:"Role",
    type:"string",
  },
  {
    name:"heroImage",
    tittle:"Image",
    type:"image",
    options:{

      hotspot:true,
    },
  },
  ],

 
})
