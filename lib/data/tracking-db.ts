// lib/data/mockTrackingDB.ts

export interface Package {
    trackingNumber: string,
        status: string,
        estimatedDelivery: string,
        origin: string,
        destination: string,
        service: string,
        weight: string,
        pieces: string,
        shipDate: string,
        receiver: {
          name: string,
          company: string,
          address: string,
          phone: string,
          email: string,
        },
        journey: [
          {
            date: string,
            time: string,
            location: string,
            status: string,
            completed: boolean,
          }         
        ],
  }
  
  export const trackingDB: Package[] = [
    {
        trackingNumber: "6546775677896",
        status: "In Transit",
        estimatedDelivery: "April 10, 2025",
        origin: "Nashville-Tennessee, USA",
        destination: "Fairmont-West Virginia, USA",
        service: "Express Sea Freight",
        weight: "2,185 kg",
        pieces: "1",
        shipDate: "April 5, 2025",
        receiver: {
          name: "Elsie Louise Patrick",
          company: "...",
          address: "8081/2 Center Ave. mononagh, WV, 26554",
          phone: "+1 681-332-6965",
          email: "...",
        },
        journey: [
          {
            date: "April 5, 2025",
            time: "09:30 AM",
            location: "Nashville-Tennesse, USA",
            status: "Transhipment document processed",
            completed: true,
          },
          {
            date: "April 5, 2025",
            time: "11:45 AM",
            location: "Nashville-Tennessee, USA",
            status: "Processed at origin warehouse",
            completed: true,
          },
          {
            date: "April 5, 2025",
            time: "1:15 PM",
            location: "Nashville-Tennesse, USA",
            status: "Departed for enforcement investigation",
            completed: true,
          },
          {
            date: "April 5, 2025",
            time: "3:30 PM",
            location: "In Transit",
            status: "In transit to destination",
            completed: true,
          },         
        ],
      },
    {
        trackingNumber: "6546CAN0A3905B9T",
        status: "In Transit",
        estimatedDelivery: "May 22, 2025",
        origin: "Odessa, Ukraine",
        destination: "Québec, Canada",
        service: "Express Air Freight",
        weight: "12.45 kg",
        pieces: "1",
        shipDate: "May 12, 2025",
        receiver: {
          name: "Mickael Sotchegbe",
          company: "...",
          address: "1234 Rue Des Cedres, Appartement 5B, Québec(Quebec), G1K 7Z4, Canada",
          phone: "+1 (263) 382-7894",
          email: "...",
        },
        journey: [
          {
            date: "May 12, 2025",
            time: "09:30 AM",
            location: "Odessa, Ukraine",
            status: "Transhipment document processed",
            completed: true,
          },
          {
            date: "May 12, 2025",
            time: "11:45 AM",
            location: "Odessa, Ukraine",
            status: "Processed at origin warehouse",
            completed: true,
          },
          {
            date: "May 13, 2025",
            time: "1:15 PM",
            location: "Odessa, Ukraine",
            status: "Departed for enforcement investigation",
            completed: true,
          },
          {
            date: "May 13, 2025",
            time: "3:30 PM",
            location: "Odessa, Ukraine",
            status: "In transit to destination",
            completed: true,
          },         
          {
            date: "May 14, 2025",
            time: "9:50 AM",
            location: "Odessa, Ukraine",
            status: "Received at the dispacthing office",
            completed: true,
          },         
          {
            date: "May 14, 2025",
            time: "2:30 PM",
            location: "Odessa, Ukraine",
            status: "Registered for dispatching",
            completed: true,
          },         
          {
            date: "May 15, 2025",
            time: "10:30 AM",
            location: "Odessa, Ukraine",
            status: "Awaiting clearance and dispacthing authority",
            completed: false,
          },         
        ],
      }    
  ];
  