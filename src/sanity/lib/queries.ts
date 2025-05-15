import { defineQuery } from 'next-sanity';

export const ROUTES_QUERY = defineQuery(`*[_type == "route"]`);

export const ROUTE_QUERY = defineQuery(`*[_type == "route" && slug.current == $slug][0]{
    ...,
    redirectRoute->{
      slug
    },
    page->{
      ...,
      sections[]{
        _type,
        ...
      }
    }
  }`);

export const HEADER_QUERY = defineQuery(`*[_type == "header"][0]{
    ...,
  }`);

export const FOOTER_QUERY = defineQuery(`*[_type == "footer"][0]{
    ...,
  }`);

// *[_type == "headerNav"][0]{
//   ...,
//   mainNav[]{
//     ...,
//     internal->{
//       slug{
//         current
//       }
//     }
//   },
//   secondaryNav[]{
//     ...,
//     internal->{
//       slug{
//         current
//       }
//     }
//   }
// }