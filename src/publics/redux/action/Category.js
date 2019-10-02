import Axios from "axios";
import qs from "qs";

export const getCategory = () => {
  return {
    type: "GET_CATEGORY",
    payload: Axios.get(`https://mobile-provider-clone.herokuapp.com/category/`)
  };
};

export const postCategory = params => {
  const param = qs.stringify({
    name: params
  });
  return {
    type: "POST_CATEGORY",
    payload: Axios.post(
      `https://mobile-provider-clone.herokuapp.com/category/`,
      param
    )
  };
};
export const deleteCategory = params => {
  return {
    type: "DELETE_CATEGORY",
    payload: Axios.delete(
      `https://mobile-provider-clone.herokuapp.com/category/${params}`
    )
  };
};
