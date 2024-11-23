import { TourType } from "@/types";

interface FetchToursResult {
    data: TourType[];
    isError: boolean;
    errorMessage: string;
}

export const fetchTours = async (url: string): Promise<FetchToursResult> => {
    const apiUrl = url;

    if (!apiUrl) {
        return {
            data: [],
            isError: true,
            errorMessage: "Failed to fetch data",
        };
    }

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            return {
                data: [],
                isError: true,
                errorMessage: "Failed to fetch data",
            };
        }

        const data: TourType[] = await response.json();

        return {
            data: data,
            isError: false,
            errorMessage: "",
        };
    } catch (error) {
        const errorMsg =
            error instanceof Error
                ? error.message
                : "Oops! Something went wrong!";

        return {
            data: [],
            isError: true,
            errorMessage: errorMsg,
        };
    }
};
