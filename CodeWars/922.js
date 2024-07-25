static async logout() {
   await UserActions.changeStatus(false);
   const currentUser = await UserActions.getMeQuery();
   await Api.logout(currentUser).then(async () => {
      console.log("ХУЙ");

      setAuthData({
         token: "",
         login: "",
         password: ""
      });

      store.dispatch({
         type: ROOT_ACTIONS.ROOT_RESET,
         payload: undefined
      });

      // await UserActions.login(getAuthData())

   });