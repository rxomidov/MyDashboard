import axios from "axios";

import { URL } from "./config";

const request = axios.create({
    baseURL: URL,
});

const subscribe = (history = null) => {
    request.interceptors.request.use((config) => {
        let token = localStorage.getItem("token");

        if (token) {
            // config.headers["Authorization"] = ["Token", token].join(" ");
            config.headers["Content-Type"] = ["application/json"];
        }

        return config;
    });

    request.interceptors.response.use(
        (config) => config,
        (error) => {
            if (error?.response?.status === 401) {
                localStorage.removeItem("token");
                history.push("/");
                console.log("error!")
                // showNotification(
                //     "error",
                //     "Login yoki parol xato!",
                //     "Iltimos qaytadan urining!"
                // );
            }

            if (error.response?.data) {
                console.log(error);
            }

            throw error;
        }
    );
};

export default { request, subscribe };
