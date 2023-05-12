// constant.js OR config.js BOTH FILE NAMING ARE SAME

// export const RESTAURANTS_API_LINK = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
// export const RESTAURANTS_API_LINK = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&page_type=DESKTOP_WEB_LISTING"
export const RESTAURANTS_API_LINK = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING"

//Restaurant menu details
export const RESTAURANTS_MENU_API_LINK = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=";//pass is 299 at the end of the link




export const IMG_CDN_LINK = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
export const LOGO_LINK = 'https://obs.line-scdn.net/0m0339dd5b72513e8a8d6127b836e5ecf1e128f1da5cb7'

//Todo:Most important Thing
//*Note-Router root path starting from / like this to="/profile"
//*Router parent relative path starting from ''  like this to="profile"



export const restaurantList = [
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "312849",
            "name": "Chopstick",
            "uuid": "435a6970-dbd2-494b-ac75-e045bb63fa15",
            "city": "1",
            "area": "R T Nagar",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "t5hqbzgb9rdx0m96wsd8",
            "cuisines": [
                "Chinese",
                "Thai",
                "Seafood",
                "Asian",
                "Combo",
                "Healthy Food",
                "Beverages"
            ],
            "tags": [],
            "costForTwo": 35000,
            "costForTwoString": "₹350 FOR TWO",
            "deliveryTime": 24,
            "minDeliveryTime": 24,
            "maxDeliveryTime": 24,
            "slaString": "24 MINS",
            "lastMileTravel": 6.800000190734863,
            "slugs": {
                "restaurant": "chopstick-ramamurthy-nagar-ramamurthy-nagar",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "17, 1st Main Rd , Dena Bank Colony , Armane Nagar , Bengaluru, Karnataka 560032",
            "locality": "Armane Nagar",
            "parentId": 1783,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "FLAT150 off",
                "shortDescriptionList": [
                    {
                        "meta": "FLAT150 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "FLAT150 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "₹150 OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "FLAT150 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "time",
                        "fee": 2500,
                        "message": ""
                    },
                    {
                        "name": "distance",
                        "fee": 6900,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 9400,
                "message": "",
                "title": "Delivery Charge",
                "amount": "9400",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6722002~p=1~eid=00000187-fd2c-e14b-3ade-7a4c00da0160",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "6.8 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "312849",
                "deliveryTime": 24,
                "minDeliveryTime": 24,
                "maxDeliveryTime": 24,
                "lastMileTravel": 6.800000190734863,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.0",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "428",
            "name": "Biryani Pot",
            "uuid": "6db20a8b-dd85-4148-b750-107169f7f826",
            "city": "1",
            "area": "Btm Layout",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "mdipoyzfzsa7n7igskht",
            "cuisines": [
                "North Indian",
                "Biryani"
            ],
            "tags": [],
            "costForTwo": 50000,
            "costForTwoString": "₹500 FOR TWO",
            "deliveryTime": 26,
            "minDeliveryTime": 26,
            "maxDeliveryTime": 26,
            "slaString": "26 MINS",
            "lastMileTravel": 7.5,
            "slugs": {
                "restaurant": "biryani-pot-madiwala-junction-btm",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "14th  Cross, 4th link Road Maruthi Nagar Madiwala Bangalore 68",
            "locality": "Maruti Nagar",
            "parentId": 21798,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "20% off",
                "shortDescriptionList": [
                    {
                        "meta": "20% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "20% off up to ₹50 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "20% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "20% off up to ₹50 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 7900,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 2500,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 10400,
                "message": "",
                "title": "Delivery Charge",
                "amount": "10400",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 1,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "7.5 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "428",
                "deliveryTime": 26,
                "minDeliveryTime": 26,
                "maxDeliveryTime": 26,
                "lastMileTravel": 7.5,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "IT_IS_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.9",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "5936",
            "name": "Burger King",
            "uuid": "09d0ea0b-4d16-4bd2-8731-8e20a9ebc2eb",
            "city": "1",
            "area": "Jayanagar",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "28fb13049b4e55297bb3f703cde63c35",
            "cuisines": [
                "Burgers",
                "American"
            ],
            "tags": [],
            "costForTwo": 35000,
            "costForTwoString": "₹350 FOR TWO",
            "deliveryTime": 31,
            "minDeliveryTime": 31,
            "maxDeliveryTime": 31,
            "slaString": "31 MINS",
            "lastMileTravel": 6.300000190734863,
            "slugs": {
                "restaurant": "burger-king-jayanagar",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "Showroom No. 1, No. 653/67, 11th Main Road, next to Bata showroom ,Jayanagar, Bangalore- 560011",
            "locality": "3rd Block",
            "parentId": 166,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "Get every item under 129",
                "shortDescriptionList": [
                    {
                        "meta": "Get every item under 129",
                        "discountType": "FinalPrice",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "Get every item under 129",
                        "discountType": "FinalPrice",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "",
                "shortDescriptionList": [
                    {
                        "meta": "",
                        "discountType": "FinalPrice",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "Get every item under 129",
                        "discountType": "FinalPrice",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 6900,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 2500,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 9400,
                "message": "",
                "title": "Delivery Charge",
                "amount": "9400",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "6.3 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "5936",
                "deliveryTime": 31,
                "minDeliveryTime": 31,
                "maxDeliveryTime": 31,
                "lastMileTravel": 6.300000190734863,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.1",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "487291",
            "name": "Chinese Panda",
            "uuid": "4852b64f-8101-418b-b49b-efda67a53e24",
            "city": "1",
            "area": "Sanjay Nagar",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "as1mhpzyaxzd7gdativz",
            "cuisines": [
                "Biryani",
                "Tandoor",
                "Indian"
            ],
            "tags": [],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 27,
            "minDeliveryTime": 27,
            "maxDeliveryTime": 27,
            "slaString": "27 MINS",
            "lastMileTravel": 6.800000190734863,
            "slugs": {
                "restaurant": "chinese-panda-sanjay-nagar,-new-bel-road-sanjay-nagar,-new-bel-road",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "17, 1st Main Rd, Dena Bank Colony, Armane Nagar, Bengaluru, Karnataka 560032",
            "locality": "Armane Nagar",
            "parentId": 3890,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "FLAT150 off",
                "shortDescriptionList": [
                    {
                        "meta": "FLAT150 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "FLAT150 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "₹150 OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "FLAT150 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "time",
                        "fee": 2500,
                        "message": ""
                    },
                    {
                        "name": "distance",
                        "fee": 6900,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 9400,
                "message": "",
                "title": "Delivery Charge",
                "amount": "9400",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6722006~p=7~eid=00000187-fd2c-e14b-3ade-7a4e00da0767",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "6.8 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "487291",
                "deliveryTime": 27,
                "minDeliveryTime": 27,
                "maxDeliveryTime": 27,
                "lastMileTravel": 6.800000190734863,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.3",
            "totalRatings": 100,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "30531",
            "name": "Hotel Empire",
            "uuid": "134dd05e-561e-449a-9ba5-b1f6a3c5cb8b",
            "city": "1",
            "area": "Hotel Empire International",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "qltgnkyywuo5gmnpqzbm",
            "cuisines": [
                "North Indian",
                "Kebabs",
                "Biryani"
            ],
            "tags": [],
            "costForTwo": 45000,
            "costForTwoString": "₹450 FOR TWO",
            "deliveryTime": 20,
            "minDeliveryTime": 20,
            "maxDeliveryTime": 20,
            "slaString": "20 MINS",
            "lastMileTravel": 2.0999999046325684,
            "slugs": {
                "restaurant": "empire-restaurant-central-bangalore-central-bangalore",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "Empire SuitesNo.35, Castle Street, Off Brigade Road,Bengaluru, Karnataka 560025",
            "locality": "Brigade Road",
            "parentId": 475,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "10% off",
                "shortDescriptionList": [
                    {
                        "meta": "10% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "10% off up to ₹40 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "10% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "10% off up to ₹40 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "time",
                        "fee": 2500,
                        "message": ""
                    },
                    {
                        "name": "distance",
                        "fee": 3300,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 5800,
                "message": "",
                "title": "Delivery Charge",
                "amount": "5800",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "2 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "30531",
                "deliveryTime": 20,
                "minDeliveryTime": 20,
                "maxDeliveryTime": 20,
                "lastMileTravel": 2.0999999046325684,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.2",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "121603",
            "name": "Kannur Food Point",
            "uuid": "51983905-e698-4e31-b0d7-e376eca56320",
            "city": "1",
            "area": "Tavarekere",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "bmwn4n4bn6n1tcpc8x2h",
            "cuisines": [
                "Kerala",
                "Chinese"
            ],
            "tags": [],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 23,
            "minDeliveryTime": 23,
            "maxDeliveryTime": 23,
            "slaString": "23 MINS",
            "lastMileTravel": 6.699999809265137,
            "slugs": {
                "restaurant": "kannur-food-point-btm",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "6/21,9TH CROSS ,1ST MAIN, VENKATESHWARA LAYOUT,SG PALYA, BENGALURU, - 560093",
            "locality": "SG Palya",
            "parentId": 20974,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "50% off",
                "shortDescriptionList": [
                    {
                        "meta": "50% off on all orders",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "50% off on all orders",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "50% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "50% off on all orders",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 6900,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 2500,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 9400,
                "message": "",
                "title": "Delivery Charge",
                "amount": "9400",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 1,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "6.6 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "121603",
                "deliveryTime": 23,
                "minDeliveryTime": 23,
                "maxDeliveryTime": 23,
                "lastMileTravel": 6.699999809265137,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "IT_IS_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.9",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "10584",
            "name": "Pizza Hut",
            "uuid": "aa85709a-161f-42fa-93aa-5bce45570308",
            "city": "1",
            "area": "Indiranagar",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "cuisines": [
                "Pizzas"
            ],
            "tags": [],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 34,
            "minDeliveryTime": 34,
            "maxDeliveryTime": 34,
            "slaString": "34 MINS",
            "lastMileTravel": 6.199999809265137,
            "slugs": {
                "restaurant": "pizza-hut-cmh-road-indiranagar",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "#1/4, ward no 82, NGEF Layout,Binmangala, CMH road, Indiranagar, Bangalore",
            "locality": "Indiranagar",
            "parentId": 721,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 6900,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 2500,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 9400,
                "message": "",
                "title": "Delivery Charge",
                "amount": "9400",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "6.1 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "10584",
                "deliveryTime": 34,
                "minDeliveryTime": 34,
                "maxDeliveryTime": 34,
                "lastMileTravel": 6.199999809265137,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.6",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "70161",
            "name": "Imperio Restaurant",
            "uuid": "579609b6-73f2-4d8f-a777-20929a10b7b3",
            "city": "1",
            "area": "Hrbr Layout",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "uz8axstizmuiij9adupe",
            "cuisines": [
                "Chinese",
                "South Indian",
                "North Indian",
                "Continental",
                "Desserts",
                "Kerala",
                "Andhra",
                "Beverages",
                "Mughlai",
                "Seafood",
                "Hyderabadi",
                "Pan-Asian",
                "Thai"
            ],
            "tags": [],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 32,
            "minDeliveryTime": 32,
            "maxDeliveryTime": 32,
            "slaString": "32 MINS",
            "lastMileTravel": 9.800000190734863,
            "slugs": {
                "restaurant": "imperio-restaurant-kalyan-nagar-kammanahallikalyan-nagar",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "No.429 1st block hrbr layout kalyan Nagar",
            "locality": "1st Block",
            "parentId": 5610,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "FLAT100 off",
                "shortDescriptionList": [
                    {
                        "meta": "FLAT100 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "FLAT100 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "₹100 OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "FLAT100 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "time",
                        "fee": 2500,
                        "message": ""
                    },
                    {
                        "name": "distance",
                        "fee": 9900,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 12400,
                "message": "",
                "title": "Delivery Charge",
                "amount": "12400",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 1,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "9.8 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "70161",
                "deliveryTime": 32,
                "minDeliveryTime": 32,
                "maxDeliveryTime": 32,
                "lastMileTravel": 9.800000190734863,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "IT_IS_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.9",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "312846",
            "name": "Chinese BAE",
            "uuid": "dcce82f6-e239-44c6-b43a-117dc76142d3",
            "city": "1",
            "area": "R T Nagar",
            "totalRatingsString": "5000+ ratings",
            "cloudinaryImageId": "vg0sy0mr422ynwrxj7fo",
            "cuisines": [
                "Chinese",
                "Thai",
                "Seafood",
                "Asian",
                "Combo",
                "Healthy Food",
                "Beverages"
            ],
            "tags": [],
            "costForTwo": 40000,
            "costForTwoString": "₹400 FOR TWO",
            "deliveryTime": 24,
            "minDeliveryTime": 24,
            "maxDeliveryTime": 24,
            "slaString": "24 MINS",
            "lastMileTravel": 6.800000190734863,
            "slugs": {
                "restaurant": "chinese-bae-ramamurthy-nagar-ramamurthy-nagar",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "17, 1st Main Rd, Dena Bank Colony, Armane Nagar, Bengaluru, Karnataka 560032",
            "locality": "Armane Nagar",
            "parentId": 9769,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "FLAT150 off",
                "shortDescriptionList": [
                    {
                        "meta": "FLAT150 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "FLAT150 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "₹150 OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "FLAT150 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 6900,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 2500,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 9400,
                "message": "",
                "title": "Delivery Charge",
                "amount": "9400",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6722004~p=13~eid=00000187-fd2c-e14b-3ade-7a5000da0d6f",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "6.8 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "312846",
                "deliveryTime": 24,
                "minDeliveryTime": 24,
                "maxDeliveryTime": 24,
                "lastMileTravel": 6.800000190734863,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "3.9",
            "totalRatings": 5000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "314691",
            "name": "Momoz",
            "uuid": "cd2698f8-cb81-4801-a5a2-fe63c0514ca5",
            "city": "1",
            "area": "RT Nagar",
            "totalRatingsString": "5000+ ratings",
            "cloudinaryImageId": "ktiphhoyhayzyrxxxyy6",
            "cuisines": [
                "Chinese",
                "Thai",
                "Seafood",
                "Asian",
                "Combo",
                "Malaysian"
            ],
            "tags": [],
            "costForTwo": 35000,
            "costForTwoString": "₹350 FOR TWO",
            "deliveryTime": 26,
            "minDeliveryTime": 26,
            "maxDeliveryTime": 26,
            "slaString": "26 MINS",
            "lastMileTravel": 6.800000190734863,
            "slugs": {
                "restaurant": "momoz-ramamurthy-nagar-ramamurthy-nagar",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "17, 1st Main Rd, Dena Bank Colony, Armane Nagar, Bengaluru, Karnataka 560032",
            "locality": "Ganganagar",
            "parentId": 2486,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "FLAT150 off",
                "shortDescriptionList": [
                    {
                        "meta": "FLAT150 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "FLAT150 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "₹150 OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "FLAT150 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "time",
                        "fee": 2500,
                        "message": ""
                    },
                    {
                        "name": "distance",
                        "fee": 6900,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 9400,
                "message": "",
                "title": "Delivery Charge",
                "amount": "9400",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6722005~p=16~eid=00000187-fd2c-e14b-3ade-7a5100da1075",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "6.8 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "314691",
                "deliveryTime": 26,
                "minDeliveryTime": 26,
                "maxDeliveryTime": 26,
                "lastMileTravel": 6.800000190734863,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.0",
            "totalRatings": 5000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "210945",
            "name": "Royal Restaurant",
            "uuid": "9b33bca4-65e6-4a26-af3e-f47c4476ed4d",
            "city": "1",
            "area": "Shivajinagar",
            "totalRatingsString": "5000+ ratings",
            "cloudinaryImageId": "yicweopn4lzcjlqy4jvq",
            "cuisines": [
                "Chinese",
                "North Indian",
                "Tandoor"
            ],
            "tags": [],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 21,
            "minDeliveryTime": 21,
            "maxDeliveryTime": 21,
            "slaString": "21 MINS",
            "lastMileTravel": 2.5999999046325684,
            "slugs": {
                "restaurant": "royal-restaurant-central-bangalore-central-bangalore",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "Broadway Road Police Station, HKP Road, Sulthangunta, Shivajinagar, Bengaluru, Bangalore Urban, Karnataka, India",
            "locality": "Sulthangunta",
            "parentId": 2896,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "35% off",
                "shortDescriptionList": [
                    {
                        "meta": "35% off on all orders",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    },
                    {
                        "meta": "Free Handi Firni on orders above ₹490",
                        "discountType": "Freebie",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "35% off on all orders",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    },
                    {
                        "meta": "Free Handi Firni on orders above ₹490",
                        "discountType": "Freebie",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "35% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "35% off on all orders",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    },
                    {
                        "meta": "Free Handi Firni on orders above ₹490",
                        "discountType": "Freebie",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "time",
                        "fee": 2500,
                        "message": ""
                    },
                    {
                        "name": "distance",
                        "fee": 3300,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 5800,
                "message": "",
                "title": "Delivery Charge",
                "amount": "5800",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "2.5 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "210945",
                "deliveryTime": 21,
                "minDeliveryTime": 21,
                "maxDeliveryTime": 21,
                "lastMileTravel": 2.5999999046325684,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.9",
            "totalRatings": 5000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "531381",
            "name": "Olio - The Wood Fired Pizzeria",
            "uuid": "7e08c07e-9b5d-4bbf-875b-7f197b30b81a",
            "city": "1",
            "area": "Indiranagar",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "tergaeovicova1ntvbyn",
            "cuisines": [
                "Pizzas",
                "Italian"
            ],
            "tags": [],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 37,
            "minDeliveryTime": 37,
            "maxDeliveryTime": 37,
            "slaString": "37 MINS",
            "lastMileTravel": 6.199999809265137,
            "slugs": {
                "restaurant": "olio-the-wood-fired-pizzeria-3rd-b-crosssector-yelahanka",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "NO- 721, GROUND FLOOR, CMH ROAD, INDIRANAGAR, Shanthinagara, BBMP East, Karnataka - 560038",
            "locality": "CMH Road",
            "parentId": 11633,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "50% off",
                "shortDescriptionList": [
                    {
                        "meta": "50% off | Use GUILTFREE",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "50% off up to ₹120 | Use code GUILTFREE",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "50% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use GUILTFREE",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "50% off up to ₹120 | Use code GUILTFREE",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 6900,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 2500,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 9400,
                "message": "",
                "title": "Delivery Charge",
                "amount": "9400",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6736285~p=22~eid=00000187-fd2c-e14b-3ade-7a5300da1610",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "6.1 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "531381",
                "deliveryTime": 37,
                "minDeliveryTime": 37,
                "maxDeliveryTime": 37,
                "lastMileTravel": 6.199999809265137,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.1",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "252618",
            "name": "Al-Bek",
            "uuid": "9cd12cc5-caf6-4db1-99f2-38644395aa67",
            "city": "1",
            "area": "Rajajinagar",
            "totalRatingsString": "5000+ ratings",
            "cloudinaryImageId": "teg1rujhfwroaoig95qs",
            "cuisines": [
                "Arabian",
                "Tandoor",
                "Biryani"
            ],
            "tags": [],
            "costForTwo": 50000,
            "costForTwoString": "₹500 FOR TWO",
            "deliveryTime": 24,
            "minDeliveryTime": 24,
            "maxDeliveryTime": 24,
            "slaString": "24 MINS",
            "lastMileTravel": 5.599999904632568,
            "slugs": {
                "restaurant": "al-bek-rajajinagar-rajajinagar",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "349/74, 12th Main, 6th BLOCK Opp Mayura Hotel, Bangalore- 560010",
            "locality": "6th Block",
            "parentId": 9911,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 5900,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 2500,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 8400,
                "message": "",
                "title": "Delivery Charge",
                "amount": "8400",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "5.5 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "252618",
                "deliveryTime": 24,
                "minDeliveryTime": 24,
                "maxDeliveryTime": 24,
                "lastMileTravel": 5.599999904632568,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.0",
            "totalRatings": 5000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "354939",
            "name": "Shanghai House",
            "uuid": "22034f4d-101e-4f4a-aa2a-e78809ebc5d3",
            "city": "1",
            "area": "Indiranagar",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "f6wlizhxy4rp05qtqbom",
            "cuisines": [
                "Chinese",
                "Thai",
                "Seafood",
                "Asian",
                "Healthy Food",
                "Beverages"
            ],
            "tags": [],
            "costForTwo": 40000,
            "costForTwoString": "₹400 FOR TWO",
            "deliveryTime": 28,
            "minDeliveryTime": 28,
            "maxDeliveryTime": 28,
            "slaString": "28 MINS",
            "lastMileTravel": 7.400000095367432,
            "slugs": {
                "restaurant": "chinese-bae-sector-50-sector-50",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "NO.40, KODIHALLI VILLAGE, JEEVAN BHEEMA NAGAR, HAL 2ND STAGE, BANGALORE., Shanthinagara , B.B.M.P East, Karnataka-560075",
            "locality": "1st Stage",
            "parentId": 17040,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "FLAT150 off",
                "shortDescriptionList": [
                    {
                        "meta": "FLAT150 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "FLAT150 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "₹150 OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "FLAT150 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "time",
                        "fee": 2500,
                        "message": ""
                    },
                    {
                        "name": "distance",
                        "fee": 7900,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 10400,
                "message": "",
                "title": "Delivery Charge",
                "amount": "10400",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6721999~p=25~eid=00000187-fd2c-e14b-3ade-7a5400da1977",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "7.4 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "354939",
                "deliveryTime": 28,
                "minDeliveryTime": 28,
                "maxDeliveryTime": 28,
                "lastMileTravel": 7.400000095367432,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "3.9",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "35495539",
            "name": "Shanghai House",
            "uuid": "22034f4d-101e-4f4a-aa2a-e78809ebc5d3",
            "city": "1",
            "area": "Indiranagar",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "f6wlizhxy4rp05qtqbom",
            "cuisines": [
                "Chinese",
                "Thai",
                "Seafood",
                "Asian",
                "Healthy Food",
                "Beverages"
            ],
            "tags": [],
            "costForTwo": 40000,
            "costForTwoString": "₹400 FOR TWO",
            "deliveryTime": 28,
            "minDeliveryTime": 28,
            "maxDeliveryTime": 28,
            "slaString": "28 MINS",
            "lastMileTravel": 7.400000095367432,
            "slugs": {
                "restaurant": "chinese-bae-sector-50-sector-50",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "NO.40, KODIHALLI VILLAGE, JEEVAN BHEEMA NAGAR, HAL 2ND STAGE, BANGALORE., Shanthinagara , B.B.M.P East, Karnataka-560075",
            "locality": "1st Stage",
            "parentId": 17040,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "FLAT150 off",
                "shortDescriptionList": [
                    {
                        "meta": "FLAT150 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "FLAT150 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "₹150 OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "FLAT150 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "time",
                        "fee": 2500,
                        "message": ""
                    },
                    {
                        "name": "distance",
                        "fee": 7900,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 10400,
                "message": "",
                "title": "Delivery Charge",
                "amount": "10400",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6721999~p=25~eid=00000187-fd2c-e14b-3ade-7a5400da1977",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "7.4 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "354939",
                "deliveryTime": 28,
                "minDeliveryTime": 28,
                "maxDeliveryTime": 28,
                "lastMileTravel": 7.400000095367432,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "3.9",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },

]