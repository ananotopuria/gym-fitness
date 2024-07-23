const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiJmOWEwMmU1MC0xYzAwLTRlZWYtYjE5OC1mMGY4YjgxYjI4MDciLCJSb2xlIjoiVXNlciIsImV4cCI6MTcyMTQ5MzA5NywiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzI4Ni8iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo3Mjg2LyJ9.BMjLYpErPmMIG1ynDIlkKgr07YkaKzOf49f49DrSKWM";

export const fetchData = async () => {
  try {
    const response = await fetch(
      "https://testing.api.addme.ge/api/card/getcard/Guro",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchQRs = async () => {
  try {
    const response = await fetch(
      "https://testing.api.addme.ge/api/Card/GetCardQR?typeId=2&userName=Guro",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const dashboardData = {
  success: true,
  data: {
    totalViewCount: 545,
    countryViews: [
      {
        countryName: "Georgia",
        viewCount: 543,
        countryCode: "GE",
        coordinates: [42.3154, 43.3569],
      },
      {
        countryName: "Vietnam",
        viewCount: 2,
        countryCode: "VN",
        coordinates: [14.0583, 108.2772],
      },
      {
        countryName: "United States",
        viewCount: 320,
        countryCode: "US",
        coordinates: [37.0902, -95.7129],
      },
      {
        countryName: "Germany",
        viewCount: 210,
        countryCode: "DE",
        coordinates: [51.1657, 10.4515],
      },
      {
        countryName: "Japan",
        viewCount: 180,
        countryCode: "JP",
        coordinates: [36.2048, 138.2529],
      },
    ],
    cityViews: [
      {
        cityName: "Tbilisi, Georgia",
        viewCount: 543,
      },
      {
        cityName: "Ho Chi Minh City, Vietnam",
        viewCount: 2,
      },
    ],
  },
  errorCode: 0,
  errors: null,
};

export const GetCards = async () => {
  try {
    const response = await fetch(
      "https://testing.api.addme.ge/api/Card/GetCards",
      {
        method: "GET", // or 'POST', 'PUT', etc.
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// export const GetInfo = async () => {
//   try {
//     const response = await fetch(
//       "https://testing.api.addme.ge/api/User/GetProfileData",
//       {
//         method: "GET", // or 'POST', 'PUT', etc.
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// };

export const GetInfo = async () => {
  try {
    const response = await fetch(
      "https://testing.api.addme.ge/api/User/GetProfileData",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const result = await response.json();
    if (response.ok) {
      return {
        success: true,
        data: result,
        errorCode: 0,
        errors: null,
      };
    } else {
      return {
        success: false,
        data: null,
        errorCode: result.errorCode,
        errors: result.errors,
      };
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      success: false,
      data: null,
      errorCode: -1,
      errors: error.message,
    };
  }
};