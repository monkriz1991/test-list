import { defineStore } from "pinia";
import { useTransport } from "~/composables/useTransport";
import type { IApiResponse, IAllData } from "~/types/api";
import type { List } from "~/types/list";
import type { Profile } from "~/types/profile";
import type { Seo } from "~/types/seo";

interface IStoreStatus {
  statusRequest: "initial" | "pending" | "success" | "error";
}
export const useAllDataStore = defineStore("allData", () => {
  const list = ref<List[]>([]);
  const profile = ref<Profile[]>([]);
  const seo = ref<Seo[]>([]);

  const status = reactive<IStoreStatus>({
    statusRequest: "initial",
  });

  const requestAllData = async () => {
    status.statusRequest = "pending";
    const { data, error } = await useTransport(`?api_key=DMwdj29q@S29shslok2`, {
      method: "GET",
    });

    if (error.value) {
      console.warn(error.value);
      status.statusRequest = "error";
      return;
    }

    const responseData = data.value as IApiResponse<IAllData>;

    if (responseData.error === 0) {
      const responseDataAll = responseData.response;
      list.value = responseDataAll.data.list || [];
      profile.value = responseDataAll.data.profile || [];
      seo.value = responseDataAll.page || [];
      status.statusRequest = "success";
    } else {
      console.warn("API error:", responseData.error_message);
      status.statusRequest = "error";
    }
  };

  return {
    requestAllData,
    list,
    profile,
    seo,
    status,
  };
});
