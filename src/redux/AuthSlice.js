import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Toast } from "toastify-react-native";

const STATUSES = {
    IDLE: 'idle',
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error'
};

// Replace with your actual login endpoint URL
// const backendURL = 'http://your-backend-url';


// Asynchronous thunk for logging in a user
export const loginUser = createAsyncThunk(
  'users/login',
  async ({ email, password,navigation }, { rejectWithValue }) => {
    console.log('email, password ReduexFile============================>',email, password);
  
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    
    
      const response = await fetch("http://192.168.100.33:3030/api/v1/users/login ", {
        method: 'POST',
        body: JSON.stringify({ email,  password }),
        ...config,
      });

      console.log("responseLogin", response)
      const data = await response.json();
      console.log("apiDataLogin", data?.message);
      if (!response.ok) {
       
        Toast.error(data?.message)
      console.log("date========================>");
      }
      else {
        console.log('eeeeeeeeeeeeeeeeeeeeeeee');
        navigation.navigate('MyTabs')
        return data;
      }
 
    
    
  }
);




// Asynchronous thunk for registering a user

export const signupUser = createAsyncThunk(
  'users/signup',
  async ({ firstName, lastName, email, dob, password, role, navigation }, { rejectWithValue }) => {
     console.log("SignupApi", firstName, lastName, email, dob, password, role);
     const config = {
       headers: {
         'Content-Type': 'application/json',
       },
     };
 
     const response = await fetch("http://192.168.100.33:3030/api/v1/users/signup", {
       method: 'POST',
       body: JSON.stringify({ firstName, lastName, email, dob, password, role }),
       ...config,
     });
 
     const data = await response.json();
 
     if (!response.ok) {
       // Check if the user already exists
       if (response.status === 409) {
         // Assuming the API returns a specific message for this case
         Toast.error(data?.message || 'A user with this email already exists.');
         // Call toggleModalSec() here to close the modal or show an error message
         return rejectWithValue({ ...data, message: 'A user with this email already exists.' });
       } else {
         Toast.error(data?.message || 'An unexpected error occurred during registration.');
         return rejectWithValue(data);
       }
     } else {
       console.log('Registration successful');
       navigation.navigate('Login');
       return data;
     }
  }
 );
 




// ===============verifyOtp=============================
export const verifyOtp = createAsyncThunk(
  'users/verify-forgot-password-otp',
  async ( {userEmail, otp}, {rejectWithValue}) =>{
    console.log("forgotPasswordotp, emailReduxFile=======================>",userEmail, otp);``
const config = {
  headers:{
    'Content-Type': 'application/json',
  },
};

try {
  const response = await fetch("http://192.168.100.33:3030/api/v1/users/verify-forgot-password-otp", {
    method: 'POST',
    body: JSON.stringify({userEmail, otp }),
    ...config,
});
console.log("verify-forgot-password-otp-response==================================>", response)
const data = await response.json();
console.log("verify-forgot-password-otp-data===================================>", data);
return data;
} catch (error) {
  // console.log("errorSingupData",error?.message?.data?.message);
  console.log("verify-forgot-password-otp-error===============================================>", error.message);
  return rejectWithValue(error.message || 'An unexpected error occurred during registration.');
}



  },

 
);




// ====================================confirmPassword========================


export const confirmPassword = createAsyncThunk(
  'users/resetPasswordDone',
  async ( {password, passwordConfirm, email}, {rejectWithValue}) =>{
    console.log("password, emailReduxFile=======================>",password, passwordConfirm, email);
const config = {
  headers:{
    'Content-Type': 'application/json',
  },
};

try {
  const response = await fetch("http://192.168.100.33:3030/api/v1/users/resetPasswordDone", {
    method: 'POST',
    body: JSON.stringify({ password, passwordConfirm, email}),
    ...config,
});
console.log("password-response==================================>", response)
const data = await response.json();
console.log("password-data===================================>", data);
return data;
} catch (error) {
  // console.log("errorSingupData",error?.message?.data?.message);
  console.log("password-error===============================================>", error.message);
  return rejectWithValue(error.message || 'An unexpected error occurred during registration.');
}



  },

 
);



// Asynchronous thunk for logging in a user
export const loginChild = createAsyncThunk(
  'users/login',
  async ({ email, password,navigation }, { rejectWithValue }) => {
    console.log('email, password ReduexFile============================>',email, password);
  
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    
    
      const response = await fetch("http://192.168.100.33:3030/api/v1/users/login ", {
        method: 'POST',
        body: JSON.stringify({ email,  password }),
        ...config,
      });

      console.log("responseLogin", response)
      const data = await response.json();
      console.log("apiDataLogin", data?.message);
      if (!response.ok) {
       
        Toast.error(data?.message)
      console.log("date========================>");
      }
      else {
        console.log('eeeeeeeeeeeeeeeeeeeeeeee');
        navigation.navigate('MyTabs')
        return data;
      }
 
    
    
  }
);
//  ht
//  https://four-pillar-8ab34604fe05.herokuapp.com   
// http://192.168.100.33:3030/api/v1/users/signup , 
// http://192.168.100.33:3030/api/v1/users/login    
// https://four-pillar-8ab34604fe05.herokuapp.com/api/v1/users/signup      
// "https://four-pillar-8ab34604fe05.herokuapp.com/api/v1/users/login"
// 192.168.100.33

// new
// https://192.168.100.33/api/v1/users/signup
// http://192.168.100.33:3030/api/v1/users/login


const initialState = {
  loading: false,
  userInfo: {},
  sendOTP:{},
  confirmPassword:{},
  error: null,
  status: STATUSES.IDLE,
};

// Slice for managing authentication state
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.status = STATUSES.LOADING;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload.data.user;
        state.status = STATUSES.SUCCESS;
        console.log("payload",payload.data.user);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.status = STATUSES.ERROR;
      })
     

      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.status = STATUSES.LOADING;
      })
      .addCase(signupUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload;
        state.status = STATUSES.SUCCESS;
      })
      .addCase(signupUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.status = STATUSES.ERROR;
      })

       // Add sendOTP cases
     .addCase(sendOTP.pending, (state) => {
      state.loading = true;
      state.status = STATUSES.LOADING;
  
    })
    .addCase(sendOTP.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.sendOTP = payload;
      state.status = STATUSES.SUCCESS;
      console.log("payload=====================>", payload);
   
    })
    .addCase(sendOTP.rejected, (state, ) => {
      state.loading = false;
      state.error = payload;
      state.status = STATUSES.ERROR;
    })

    .addCase(verifyOtp.pending, (state) => {
      state.loading = true;
      state.status = STATUSES.LOADING;
  
    })
    .addCase(verifyOtp.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.verifyOtp = payload;
      state.status = STATUSES.SUCCESS;
      console.log("payloadverifyOtp=====================>", payload);
      
    })
    .addCase(verifyOtp.rejected, (state, action) => {
      state.loading = false;
      state.error = payload;
      state.status = STATUSES.ERROR;
    })
    

    .addCase(confirmPassword.pending, (state) => {
      state.loading = true;
      state.status = STATUSES.LOADING;
  
    })
    .addCase(confirmPassword.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.confirmPassword = payload;
      state.status = STATUSES.SUCCESS;
      console.log("payloadverifyOtp=====================>", payload);
      
    })
    .addCase(confirmPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = payload;
      state.status = STATUSES.ERROR;
    })
    .addCase(loginChild.pending, (state) => {
      state.loading = true;
      state.status = STATUSES.LOADING;
    })
    .addCase(loginChild.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload.data.user;
      state.status = STATUSES.SUCCESS;
      console.log("payload",payload.data.user);
    })
    .addCase(loginChild.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.status = STATUSES.ERROR;
    })
    
  },


    
});


// Slice for managing authentication state


export default authSlice.reducer;


