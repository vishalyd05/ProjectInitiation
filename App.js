import React from 'react';
import ReactDOM from 'react-dom/client';

/* Components of Our Food-Order App
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search Bar
 * - Restaurant-Container
 *  - Restaurant-Card
 *    - Img
 *    - Name of Res, Star Rating, cuisine, delivery time.
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://png.pngtree.com/png-vector/20230217/ourmid/pngtree-food-logo-design-for-restaurant-and-business-png-image_6604922.png"
          alt="App Logo"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//  const styleCard = {
//   backgroundColor: '#f0f0f0',
// };

// * Props :

// * prop -> is Just a JS Object

// * Note: When you have to dainamically pass in a data to a component, you pass in prop

// const RestaurantCard = (props) => {
// console.log(props);

// * Note We can also destructure props on the fly by wrapping them in between {}, this is like...

// * const { resName, cuisine } = props;

// const RestaurantCard = ({ resName, cuisine }) => {
//   console.log({ resName, cuisine });
const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  return (
    <div
      className="res-card"
      style={{
        backgroundColor: '#f0f0f0',
      }}
    >
      <img
        className="res-logo"

        src={
            'https://source.unsplash.com/random'
        }
        alt="Biryani"
      />     
      {/* <h3>{props.resName}</h3>
        <h4>{props.cuisine}</h4> */}
      {/* <h3>{resData.data.name}</h3>
      <h4>{resData.data.cuisines.join(', ')}</h4>
      <h4>{resData.data.avgRating} stars</h4>
      <h4>₹{resData.data.costForTwo / 100} FOR TWO</h4>
      <h4>{resData.data.deliveryTime} minutes</h4> */}
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const resObj = [
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
          "header": {
            "title": "What's on your mind?",
            "headerStyling": {
              "padding": {
                "left": 16,
                "top": 16,
                "bottom": 4
              }
            }
          },
          "layout": {
            "rows": 1,
            "columns": 10,
            "horizontalScrollEnabled": true,
            "itemSpacing": 24,
            "widgetPadding": {
              
            },
            "containerStyle": {
              "containerPadding": {
                "left": 8,
                "top": 8,
                "right": 12,
                "bottom": 4
              }
            },
            "scrollBar": {
              
            },
            "widgetTheme": {
              "defaultMode": {
                "backgroundColour": "#FFFFFF",
                "theme": "THEME_TYPE_LIGHT"
              },
              "darkMode": {
                "theme": "THEME_TYPE_DARK"
              }
            }
          },
          "imageGridCards": {
            "info": [
              {
                "id": "762797",
                "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
                  "text": "Burgers",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for burger",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger",
                "frequencyCapping": {
                  
                }
              },
              {
                "id": "750580",
                "imageId": "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/83644?collection_id=83644&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
                  "text": "pizzas",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for pizza",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza&search_context=pizza",
                "frequencyCapping": {
                  
                }
              },
              {
                "id": "750592",
                "imageId": "v1675667625/PC_Creative%20refresh/Biryani_2.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/83649?collection_id=83649&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
                  "text": "Biryani",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for biryani",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani&search_context=biryani",
                "frequencyCapping": {
                  
                }
              },
              {
                "id": "750223",
                "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
                  "text": "Rolls",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for roll",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
                "frequencyCapping": {
                  
                }
              },
              {
                "id": "750588",
                "imageId": "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/83647?collection_id=83647&tags=layout_CCS_Chinese&type=rcv2",
                  "text": "Chinese",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurant curated for chinese",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=83647&tags=layout_CCS_Chinese",
                "frequencyCapping": {
                  
                }
              },
              {
                "id": "749769",
                "imageId": "v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Momos.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80462?collection_id=80462&tags=layout_CCS_Momos&type=rcv2",
                  "text": "Momos",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurant curated for momos",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=80462&tags=layout_CCS_Momos",
                "frequencyCapping": {
                  
                }
              },
              {
                "id": "750207",
                "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80480?collection_id=80480&tags=layout_BAU_Contextual%2Cpasta%2Cads_pc_pasta&type=rcv2",
                  "text": "Pasta",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurant curated for pasta",
                  "altTextCta": "open"
                },
                "entityId": "80480",
                "frequencyCapping": {
                  
                }
              },
              {
                "id": "750230",
                "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80397?collection_id=80397&tags=layout_BAU_Contextual%2Csamosa&type=rcv2",
                  "text": "Samosa",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for samosa",
                  "altTextCta": "open"
                },
                "entityId": "80397",
                "frequencyCapping": {
                  
                }
              },
              {
                "id": "749874",
                "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
                  "text": "Cakes",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurant curated for cakes",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
                "frequencyCapping": {
                  
                }
              },
              {
                "id": "749774",
                "imageId": "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80464?collection_id=80464&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
                  "text": "Noodles",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurant curated for noodles",
                  "altTextCta": "open"
                },
                "entityId": "80464",
                "frequencyCapping": {
                  
                }
              },
              {
                "id": "749879",
                "imageId": "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80383?collection_id=80383&tags=layout_CCS_CholeBhature&type=rcv2",
                  "text": "Chole Bhature",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurant curated for chhole bhatoore",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=80383&tags=layout_CCS_CholeBhature",
                "frequencyCapping": {
                  
                }
              },
              {
                "id": "750132",
                "imageId": "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
                  "text": "Dosa",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for dosa",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa",
                "frequencyCapping": {
                  
                }
              },
              {
                "id": "750235",
                "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/83667?collection_id=83667&tags=layout_CCS_Sandwiches&type=rcv2",
                  "text": "Sandwich",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for sandwich",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=83667&tags=layout_CCS_Sandwiches",
                "frequencyCapping": {
                  
                }
              },
              {
                "id": "750239",
                "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/83674?collection_id=83674&tags=layout_CCS_Shakes&type=rcv2",
                  "text": "Shake",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurant curated for shakes",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=83674&tags=layout_CCS_Shakes",
                "frequencyCapping": {
                  
                }
              },
              {
                "id": "750209",
                "imageId": "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Pastry.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80358?collection_id=80358&tags=layout_BAU_Contextual%2Clayout_ux4&type=rcv2",
                  "text": "Pastry",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurant curated for Pastry",
                  "altTextCta": "open"
                },
                "entityId": "80358",
                "frequencyCapping": {
                  
                }
              },
              {
                "id": "750599",
                "imageId": "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Coffee.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/83908?collection_id=83908&tags=layout_CCS_Coffee&type=rcv2",
                  "text": "Coffee",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for coffee",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=83908&tags=layout_CCS_Coffee",
                "frequencyCapping": {
                  
                }
              },
              {
                "id": "750217",
                "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80364?collection_id=80364&tags=layout_PavBhaji_Contextual&type=rcv2",
                  "text": "Pav Bhaji",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurant curated for pav bhaji",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=80364&tags=layout_PavBhaji_Contextual",
                "frequencyCapping": {
                  
                }
              },
              {
                "id": "750249",
                "imageId": "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80403?collection_id=80403&tags=layout_Shawarma_Contextual&type=rcv2",
                  "text": "Shawarma",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurant curated for shawarma",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=80403&tags=layout_Shawarma_Contextual",
                "frequencyCapping": {
                  
                }
              },
              {
                "id": "750123",
                "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Dhokla.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80423?collection_id=80423&tags=layout_BAU_Contextual%2Cdhokla&type=rcv2",
                  "text": "Dhokla",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for dhokla",
                  "altTextCta": "open"
                },
                "entityId": "80423",
                "frequencyCapping": {
                  
                }
              },
              {
                "id": "750640",
                "imageId": "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Kachori.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80450?collection_id=80450&tags=layout_BAU_Contextual%2Ckachori&type=rcv2",
                  "text": "Kachori",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurant curated for kachori",
                  "altTextCta": "open"
                },
                "entityId": "80450",
                "frequencyCapping": {
                  
                }
              }
            ],
            "style": {
              "width": {
                "type": "TYPE_RELATIVE",
                "value": 0.2941,
                "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
              },
              "height": {
                "type": "TYPE_RELATIVE",
                "value": 1.2444,
                "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
              }
            }
          },
          "id": "whats_on_your_mind",
          "gridElements": {
            "infoWithStyle": {
              "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
              "info": [
                {
                  "id": "762797",
                  "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
                    "text": "Burgers",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for burger",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750580",
                  "imageId": "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/83644?collection_id=83644&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
                    "text": "pizzas",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for pizza",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza&search_context=pizza",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750592",
                  "imageId": "v1675667625/PC_Creative%20refresh/Biryani_2.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/83649?collection_id=83649&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
                    "text": "Biryani",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for biryani",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani&search_context=biryani",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750223",
                  "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
                    "text": "Rolls",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for roll",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750588",
                  "imageId": "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/83647?collection_id=83647&tags=layout_CCS_Chinese&type=rcv2",
                    "text": "Chinese",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for chinese",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=83647&tags=layout_CCS_Chinese",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "749769",
                  "imageId": "v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Momos.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80462?collection_id=80462&tags=layout_CCS_Momos&type=rcv2",
                    "text": "Momos",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for momos",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=80462&tags=layout_CCS_Momos",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750207",
                  "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80480?collection_id=80480&tags=layout_BAU_Contextual%2Cpasta%2Cads_pc_pasta&type=rcv2",
                    "text": "Pasta",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for pasta",
                    "altTextCta": "open"
                  },
                  "entityId": "80480",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750230",
                  "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80397?collection_id=80397&tags=layout_BAU_Contextual%2Csamosa&type=rcv2",
                    "text": "Samosa",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for samosa",
                    "altTextCta": "open"
                  },
                  "entityId": "80397",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "749874",
                  "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
                    "text": "Cakes",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for cakes",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "749774",
                  "imageId": "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80464?collection_id=80464&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
                    "text": "Noodles",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for noodles",
                    "altTextCta": "open"
                  },
                  "entityId": "80464",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "749879",
                  "imageId": "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80383?collection_id=80383&tags=layout_CCS_CholeBhature&type=rcv2",
                    "text": "Chole Bhature",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for chhole bhatoore",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=80383&tags=layout_CCS_CholeBhature",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750132",
                  "imageId": "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
                    "text": "Dosa",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for dosa",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750235",
                  "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/83667?collection_id=83667&tags=layout_CCS_Sandwiches&type=rcv2",
                    "text": "Sandwich",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for sandwich",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=83667&tags=layout_CCS_Sandwiches",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750239",
                  "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/83674?collection_id=83674&tags=layout_CCS_Shakes&type=rcv2",
                    "text": "Shake",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for shakes",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=83674&tags=layout_CCS_Shakes",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750209",
                  "imageId": "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Pastry.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80358?collection_id=80358&tags=layout_BAU_Contextual%2Clayout_ux4&type=rcv2",
                    "text": "Pastry",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for Pastry",
                    "altTextCta": "open"
                  },
                  "entityId": "80358",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750599",
                  "imageId": "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Coffee.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/83908?collection_id=83908&tags=layout_CCS_Coffee&type=rcv2",
                    "text": "Coffee",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for coffee",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=83908&tags=layout_CCS_Coffee",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750217",
                  "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80364?collection_id=80364&tags=layout_PavBhaji_Contextual&type=rcv2",
                    "text": "Pav Bhaji",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for pav bhaji",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=80364&tags=layout_PavBhaji_Contextual",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750249",
                  "imageId": "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80403?collection_id=80403&tags=layout_Shawarma_Contextual&type=rcv2",
                    "text": "Shawarma",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for shawarma",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=80403&tags=layout_Shawarma_Contextual",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750123",
                  "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Dhokla.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80423?collection_id=80423&tags=layout_BAU_Contextual%2Cdhokla&type=rcv2",
                    "text": "Dhokla",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for dhokla",
                    "altTextCta": "open"
                  },
                  "entityId": "80423",
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "750640",
                  "imageId": "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Kachori.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80450?collection_id=80450&tags=layout_BAU_Contextual%2Ckachori&type=rcv2",
                    "text": "Kachori",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for kachori",
                    "altTextCta": "open"
                  },
                  "entityId": "80450",
                  "frequencyCapping": {
                    
                  }
                }
              ],

// * not using keys (not acceptable) <<<< index as a key <<<<<<<<<< unique id (is the best  practice)

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search Food or Restaurant" />
        <button>Search</button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} />
        <RestaurantCard resData={resList[4]} />
        <RestaurantCard resData={resList[5]} />
        <RestaurantCard resData={resList[6]} />
        <RestaurantCard resData={resList[7]} />
        <RestaurantCard resData={resList[8]} />
        <RestaurantCard resData={resList[9]} />
        <RestaurantCard resData={resList[10]} />
        <RestaurantCard resData={resList[11]} />
        <RestaurantCard resData={resList[12]} /> */}

        {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}

        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}

        {/* // * or */}

        {/* // * We can also use index as the key to the JSX child elemnt - which is the 2nd parameter of the map() method, but is not a recommended practice - react official Docs declared this/}

        {resList.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}

        {/* // * Why should we provide key property to the child elements - When creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its' children. React uses the key prop create a relationship between the component and the DOM element. The library uses this relationship to determine whether or not the component should be re-rendered.
         */}
      </div>
    </div>
  );
};

// * What is Config-driven-UI -> A "config-driven UI" is a user interface that is built and configured using a declarative configuration file or data structure, rather than being hardcoded.

// * Every company now-a-days follows these approach, because our Appications need to be Dynamic These Days

// * Note: A Good Senior Frontend engineer is - who is a good UI Layer Engineer and a good Data Layer Engineer

const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright &copy; {currYear}, Made with 💗 by <strong>Vishal</strong>
      </p>
    </footer>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
