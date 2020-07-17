import client from './client';
const endpoint = '/listings';

const getListings = () => client.get(endpoint);

const addListing = (listing, onUploadProgress) => {
  const data = new FormData();
  // const data = {
  //   title: listing.title,
  //   price: listing.price,
  //   categoryId: listing.category.value,
  //   description: listing.description,
  // };
  data.append('title', listing.title);
  data.append('price', listing.price);
  data.append('categoryId', listing.category.value);
  data.append('description', listing.description);
  listing.images.forEach((image, index) =>
    data.append('images', {
      uri: image,
      name: 'image' + index,
      type: 'image/jpg',
    }),
  );

  if (listing.location)
    data.append('location', JSON.stringify(listing.location));
  const headers = {
    'Content-Type': 'multipart/form-data',
  };
  return client.post(
    '/listings',
    data,
    {headers},
    {
      onUploadProgress: (progress) =>
        onUploadProgress(progress.loaded / progress.total),
    },
  );
};

export default {
  getListings,
  addListing,
};
