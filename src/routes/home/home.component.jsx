

import Directory from '../../compnents/directory/directory.jsx';




const  Home = () => {

  const categories = [
    {
      id : 1,
      title : 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
    }
    ,{

      id : 2,
      title : 'Jackets',
      imageUrl: 'https://media.istockphoto.com/photos/male-coat-isolated-on-the-white-picture-id163208487'


    }
    ,{

      id : 3,
      title : 'Snickers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'


    }
    ,{

      id : 4,
      title : 'Womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png'

    }
    ,{

      id : 5,
      title : 'Mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png'

    }
  ]
  return (
    <Directory  categories= {categories}/>
  );
}

export default Home;
