import {SELLER_LOGIN_FAIL, SELLER_LOGIN_REQUEST, SELLER_LOGIN_SUCCESS, SELLER_LOGOUT} from "../constants/sellerConstant"

    export const sellerLoginReducer = (state={ }, action) => {
        switch (action.type) {
            case SELLER_LOGIN_REQUEST:
                return {
                    loading:true
                }
            case SELLER_LOGIN_SUCCESS:
                return {
                    loading:false, sellerInfo:action.payload
                }
            case SELLER_LOGIN_FAIL:
                return{
                    loading:false, error:action.payload
                }
            case SELLER_LOGOUT:
                return{}
                
            default:
                return state;
        }
    }