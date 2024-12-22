import { reactive } from "vue";

export interface SignedInUser {
    handle: string;

}

export const signedInUser = reactive<SignedInUser>({

})
