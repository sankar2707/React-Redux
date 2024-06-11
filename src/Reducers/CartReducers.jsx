import { createSlice, createSelector } from "@reduxjs/toolkit";

const cartReducerSlice = createSlice({
    name:"cartOperation",
    initialState:{
        data: [
            {
                "id": 1,
                "title": "iPhone 9",
                "description": "An apple mobile which is nothing like apple",
                "price": 55549,
                "quantity":1,
                "thumbnail": "https://bgr.com/wp-content/uploads/2020/02/iphone-9.jpg?quality=70&strip=all",
            },
            {
                "id": 2,
                "title": "iPhone X",
                "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
                "price": 135000,
                "quantity":1,
                "thumbnail": "https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/3357245/1160/772/m1/fpnw/wm0/iphonex-preview-.jpg?1507100604&s=a6bed3106f89a8cf2a3009f5ab1530bb",
            },
            {
                "id": 3,
                "title": "Samsung Universe 9",
                "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
                "price": 35000,
                "quantity":1,
                "thumbnail": "https://tse3.mm.bing.net/th?id=OIP.AndDiJ6byCyHJtg4ZsO2bgHaJN&pid=Api&P=0&h=180",
            },
            {
                "id": 4,
                "title": "OPPOF19",
                "description": "OPPO F19 is officially announced on April 2021.",
                "price": 22000,
                "quantity":1,
                "thumbnail": "https://i.ytimg.com/vi/XQQYGWdIKLU/maxresdefault.jpg",
            },
            {
                "id": 5,
                "title": "Huawei P30",
                "description": "Huawei's re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
                "price": 18000,
                "quantity":1,
                "thumbnail": "https://images.ctfassets.net/vx12w8gtks6f/5mdzkK8yvIYSnUTFiuhsYC/5e6ab9b840073ee2ef0ecd61d7bcdd7b/HUAWEI_P30_Feature_Image.jpg",
            }
        ],

    },

    reducers:{
        handleDelete: (state,action) => {
            state.data = state.data.filter((d) => {
                return action.payload !== d.id;
            });
        },

        handleQty: (state,action) => {
            state.data = state.data.map((d) => {
                if(d.id === action.payload.id){
                    return {
                        ...d,
                        quantity:action.payload.qty,
                    }
                }else{
                    return d;
                }
            });
        }

    }

});

export const setTotalQty = createSelector(
    (state) => state.cartOperation.data,
    (data) => data.reduce((total,item) => total + item.quantity , 0)
);

export const setTotalPrice = createSelector(
    (state) => state.cartOperation.data,
    (data) =>  data.reduce((total,item) => total + (item.quantity * item.price) , 0)
);

export const { handleDelete, handleQty } = cartReducerSlice.actions;

export default cartReducerSlice.reducer;